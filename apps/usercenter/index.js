import React, {Component} from 'react';
import {StoreProvider} from 'plume2'
import {PixelRatio, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AppStore from './store'

@StoreProvider(AppStore, {debug: __DEV__})
export default class UserCenter extends Component<{}> {
	store: AppStore;

	render() {
		return (
			<View style={styles.container}>
				<Text>个人中心</Text>
				<TextInput style={styles.input}
				           keyboardType="numeric"
				           placeholder="请输入您的手机号"
				           placeholderTextColor="#999"
				           underlineColorAndroid="transparent"
				           onChangeText={(value) => this.store.setAccount(value)}/>
				<TextInput style={styles.input}
				           secureTextEntry={true}
				           keyboardType="ascii-capable"
				           placeholder="密码"
				           placeholderTextColor="#999"
				           underlineColorAndroid="transparent"
				           onChangeText={(value) => this.store.setPass(value)}/>
				<TouchableOpacity onPress={() => this.store.doLogin()}>
					<Text>登录</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		height: 30,
		width: 150,
		borderBottomWidth: 1 / PixelRatio.get(),
		borderBottomColor: '#000',
	}
});