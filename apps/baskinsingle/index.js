import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {StoreProvider} from 'plume2'
import {Header} from 'ajkit';
import AppStore from './store'
import BaskInSingleList from "./components/baskinsingle-list";

@StoreProvider(AppStore, {debug: __DEV__})
export default class BaskInSingle extends Component<{}> {
	store: AppStore;

	componentWillMount() {
		this.store.init()
	}

	render() {
		const from = this.store.state().get('from')
		return (
			<View style={styles.container}>
				<Header title='晒单' renderLeft={() => {
				}}/>
				<BaskInSingleList/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		alignItems: 'center',
	}
});
