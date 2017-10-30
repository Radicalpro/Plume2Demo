import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {AJFlatList, Fetch, Header} from 'ajkit'
import BaskInSingleItem from './components/baskinsingle-item';

export default class Demo extends Component {

	constructor(props) {
		super(props);
		this.state = {
			from: {
				cityCode: '210000',
				location: '南京',
				osType: 1,
				appVersion: '3.0.5',
				width: 750,
				parterValue: 100,
				accessToken: '50EBB94438938CD3509441B146F1EB82',
				deviceToken: 'B6D71781-156E-42F1-88D6-AFDAFBD0F0FC',
				mobileNum: '18888888021',
				page: 3,
				limit: 10
			},
			url: '/shareorder/getList',
			data: [],
		}
	}

	componentDidMount() {
		this._initData()
	}

	render() {
		const listViewProps = {
			data: this.state.data,
			renderRow: (item, index) => {
				return (
					<BaskInSingleItem item={item} index={index} key={item.shareOrderId}/>
				)
			},
			onEndReached: () => {
				console.log('onEndReached--------->')
			},
			onRefresh: () => {
				console.log('onRefresh--------->')
			},
			ListFooterComponent: () => {
				console.log('ListFooterComponent--------->')
				return(
					<View><Text>ListFooterComponent</Text></View>
				)
			},
			ListHeaderComponent: () => {
				console.log('ListHeaderComponent--------->')
				return(
					<View><Text>ListHeaderComponent</Text></View>
				)
			},
			ListEmptyComponent: () => {
				console.log('ListEmptyComponent--------->')
				return(
					<View><Text>ListEmptyComponent</Text></View>
				)
			},
			keyProps: 'shareOrderId'
		}

		console.log('data----->' + this.state.data);

		return (
			<View style={styles.container}>
				<Header title='demo' renderLeft={() => {
				}}/>
				<AJFlatList {...listViewProps}/>
			</View>
		)
	}

	async _initData() {
		const res = await Fetch(this.state.url, {
			method: 'POST',
			body: JSON.stringify(this.state.from)
		})
		const dataList = res.obj
		this.setState({
			data: dataList
		})
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		alignItems: 'center',
	}
});