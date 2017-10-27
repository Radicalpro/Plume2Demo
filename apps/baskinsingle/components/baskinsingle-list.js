import React, {Component} from 'react'
import {Dimensions, Text} from 'react-native'
import {Relax} from 'plume2'
import {AJListView, noop,} from 'ajkit'

const {
	width: screenWidth,
	height: screenHeight
} = Dimensions.get('window'); // 屏幕宽高

@Relax
export default class BaskInSingleList extends Component {

	static relaxProps = {
		from: 'from',
		fetchBaskInSingle: noop
	}

	render() {
		const {from, fetchBaskInSingle} = this.props.relaxProps;
		const listViewProps = {
			url: "/shareorder/getList",
			params: from,
			renderRow: (item, _, index) => {
				return (
					<Text style={{height: 100, width: screenWidth}} key={index}>{item.shareOrderId}</Text>
				)
			},
			renderEmpty: () => <Text>列表无内容</Text>,
			onDataReached: (res) => fetchBaskInSingle(res),
		}

		return (
			<AJListView {...listViewProps}/>
		)
	}
}