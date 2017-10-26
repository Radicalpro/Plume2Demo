import assign from 'object-assign';
import {config} from './config';

const {HTTP_TIME_OUT, BFF_HOST} = config;

/**
 * 定义异步返回结果
 */
type IAsyncResult = {
	code: string,
	context: any,
	message: Error
}
/**
 * 封装公共的fetch服务
 */
const Fetch = (url, req, host=BFF_HOST): IAsyncResult => {

  //默认参数
	let request = {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + (window.token || '')
		}
	};

	//对header做单独合并
	if (req && req.headers) {
		const mergeHeader = assign({}, request.headers, req.headers);
		request.headers = mergeHeader;
		delete req.headers;
	}

	//merge
	const merge = assign({}, request, req);

	url = host + url;

	let start;

	if (__DEV__) {
		console.log('请求->', url, '\n', JSON.stringify(merge, null, 2));
		start = new Date();
	}

	return new Promise((resolve, reject) => {
		let isServerOk = true;

		//超时优化
		let httpTimeout = setTimeout(() => {
			const err = {
				code: 'S-000002',
				message: '网络超时'
			};
			resolve(err);
		}, 1000 * HTTP_TIME_OUT);

		fetch(url, merge)
			.then(res => {
				//清除网络超时
				clearTimeout(httpTimeout);
				//判断server是不是异常状态404，500等
				isServerOk = (res.status >= 200 && res.status < 300);
				//promise
				return res.json();
			})
			.then((res) => {
				if (isServerOk) {
					if (__DEV__) {
						let time = new Date - start;
						console.info(`${url} --> 响应时间 : ${time} ms`);
					}
					//数据正确返回
					resolve(res);
				} else {
					if (__DEV__) {
						console.info('响应->', url, res.code, '\n', res);
					}
					reject(res);
				}
			})
			.catch((err) => {
        //清除网络超时
				clearTimeout(httpTimeout);
				reject({
					code: 'K-000001',
					message: '网络错误'
				});
			})
			.done();
	});
};

export default Fetch;
