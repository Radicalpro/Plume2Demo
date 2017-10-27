import {Action, Actor} from 'plume2'

export default class BaskInSingleListFromActor extends Actor {

	defaultState() {
		return {
			from: {
				cityCode: '',
				location: '',
				osType: 1,
				appVersion: '',
				width: 0,
				parterValue: 0,
				accessToken: '',
				deviceToken: '',
				mobileNum: '',
			},
			baskInSingles: [],
		}
	}

	/**
	 * 初始化表单参数
	 * @param state
	 */
	@Action('list-from:setFrom')
	setFrom(state) {
		const from = {
			cityCode: '210000',
			location: '南京',
			osType: 1,
			appVersion: '3.0.5',
			width: 750,
			parterValue: 100,
			accessToken: '50EBB94438938CD3509441B146F1EB82',
			deviceToken: 'B6D71781-156E-42F1-88D6-AFDAFBD0F0FC',
			mobileNum: '18888888021',
		}
		return state.set('from', from)
	}

	/**
	 * 晒单集合
	 * @param state
	 * @param obj
	 */
	@Action('list-from:fetchBaskInSingle')
	fetchBaskInSingle(state, obj) {
		return state.set('baskInSingles', (value) => value.push(obj))
	}

}