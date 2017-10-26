import React, {Component} from 'react';
import {StoreProvider} from 'plume2'
import {StyleSheet, Text, TextInput, View} from 'react-native';
import AppStore from './store'

@StoreProvider(AppStore, {debug: __DEV__})
export default class UserCenter extends Component<{}> {
	// store:AppStore;

	render() {
		return (
			<View style={styles.container}>
				<Text>个人中心</Text>
				<TextInput
					keyboardType="numeric"
					placeholder="请输入您的手机号"
					placeholderTextColor="#999"
					underlineColorAndroid="transparent"/>
				<TextInput
					keyboardType="ascii-capable"
					placeholder="密码"
					placeholderTextColor="#999"
					underlineColorAndroid="transparent"/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});