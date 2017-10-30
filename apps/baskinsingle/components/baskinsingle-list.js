import React, {Component} from 'react'
import {Dimensions, Text} from 'react-native'
import {Relax} from 'plume2'
import {AJListView, noop,} from 'ajkit'
import BaskInSingleItem from "./baskinsingle-item";

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
					<BaskInSingleItem item={item} index={index} key={item.shareOrderId}/>
				)
			},
			renderEmpty: () => <Text>列表无内容</Text>,
			onDataReached: (res) => fetchBaskInSingle(res),
			keyProps: 'shareOrderId'
		}

		return (
			<AJListView {...listViewProps}/>
		)
	}
}