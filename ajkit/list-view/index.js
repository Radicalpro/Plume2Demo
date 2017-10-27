/**
 * ListView
 */
import React, {Component} from 'react'
import {FlatList, RefreshControl, Text, View} from 'react-native'

import Fetch from '../fetch'
import noop from '../noop'
import Loading from '../loading'


export default class AJListView extends Component {

	//当前的pageNum
	_pageNum: 1;

	static defaultProps = {
		//请求的url
		url: '',
		pageSize: 10,
		//默认当前页
		pageNum: 1,
		//当前的数据
		dataSource: [],
		renderRow: null,
		renderEmpty: null,
		//收到数据后的回调
		onDataReached: noop,
	};

	constructor(props) {
		super(props)
		const {pageNum, dataSource} = this.props
		this._pageNum = pageNum
		this.state = {
			//是不是正在初始化
			isFirstLoading: true,
			refreshing: false,
			//当前的数据源
			dataSource: dataSource || [],
		}
	}

	componentDidMount() {
		this._init()
	}

	componentWillReceiveProps(nextProps) {

	}

	render() {
		const {
			pageSize,
			renderRow,
			renderEmpty,
			extraData,
		} = this.props;

		if (this.state.isFirstLoading) {
			return <Loading/>
		}

		//如果数据为空
		let {dataSource} = this.state;

		//如果数据不为空
		return (
			<FlatList
				ref="listRef"
				data={dataSource}
				renderItem={({item, index}) => renderRow(item, extraData, index)}
				horizontal={false}
				initialNumToRender={pageSize}
				// keyExtractor={this._keyExtractor}
				//0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
				onEndReachedThreshold={0.3}
				onEndReached={this._handlePagination}
				ListFooterComponent={this._renderFooter}
				ListEmptyComponent={!this.state.isFirstLoading && renderEmpty}
				extraData={extraData}
				refreshControl={
					<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={() => this._onRefresh()}
					/>
				}
			/>
		)
	}

	/**
	 * 初始化数据
	 */
	_init = async (props?) => {
		this._pageNum = 1;
		this.setState({
			refreshing: true
		})
		props = props || this.props;
		const {url} = props

		//如果url不为空，fetch去访问
		if (url !== '') {
			const res = await Fetch(url, {
				method: 'POST',
				body: JSON.stringify(this._getParams(props))
			})

			const dataList = res.obj

			this.setState({
				isFirstLoading: false,
				refreshing: false,
				dataSource: dataList,
			}, () => {
				//通知父组件数据
				props.onDataReached(res)
			})
		}
	}

	_handlePagination = async () => {
		this._pageNum++

		const res = await Fetch(this.props.url, {
			method: 'POST',
			body: JSON.stringify(this._getParams())
		})

		const dataList = res.obj
		console.log('_pageNum------>' + this._pageNum);
		if (!res || dataList.length === 0) {
			this._pageNum--;
			return;
		}

		this.setState((state) => ({
			dataSource: state.dataSource.concat(dataList),
			noMore: dataList.length < this.props.pageSize
		}), () => {
			this.props.onDataReached(res)
		})

	}

	/**
	 * 获取参数
	 */
	_getParams(props?) {
		const {pageSize, params} = props || this.props;
		return {
			...params,
			page: this._pageNum,
			limit: pageSize
		}
	}

	/**
	 * 没有更多了提示
	 */
	_renderFooter = () => {
		return (
			<View>
				<Text>没有更多</Text>
			</View>
		)
	}

	_onRefresh(){
		this._init(this.props)
	}

}
