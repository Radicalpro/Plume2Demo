import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {StoreProvider} from 'plume2'
import {Header} from 'ajkit'
import AppStore from './store'
import UserCenterLogin from "./components/usercenter-login";

@StoreProvider(AppStore, {debug: __DEV__})
export default class UserCenter extends Component<{}> {
	store: AppStore;

	render() {
		return (
			<View style={styles.container}>
				<Header title='个人中心' renderLeft={() => {
				}}/>
				<UserCenterLogin/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	}
});