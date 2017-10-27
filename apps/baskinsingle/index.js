import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {StoreProvider} from 'plume2'
import {Header} from 'ajkit';
import AppStore from './store'

@StoreProvider(AppStore, {debug: __DEV__})
export default class BaskInSingle extends Component<{}> {
	store: AppStore;

	render() {
		return (
			<View style={styles.container}>
				<Header title='晒单'renderLeft={() => {}}/>
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
