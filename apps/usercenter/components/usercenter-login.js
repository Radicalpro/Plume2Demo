import React, {Component} from 'react'
import {PixelRatio, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {Relax} from 'plume2'
import {noop} from 'ajkit'

@Relax
export default class UserCenterLogin extends Component {

	static relaxProps = {
		account: '',
		password: '',
		setAccount: noop,
		setPass: noop,
		doLogin: noop
	}

	render() {
		const {setAccount, setPass, doLogin} = this.props.relaxProps
		return (
			<View style={styles.inputView}>
				<TextInput style={styles.inputItem}
				           keyboardType="numeric"
				           placeholder="请输入您的手机号"
				           placeholderTextColor="#999"
				           underlineColorAndroid="transparent"
				           onChangeText={(value) => setAccount(value)}/>
				<TextInput style={styles.inputItem}
				           secureTextEntry={true}
				           keyboardType="ascii-capable"
				           placeholder="密码"
				           placeholderTextColor="#999"
				           underlineColorAndroid="transparent"
				           onChangeText={(value) => setPass(value)}/>
				<TouchableOpacity style={styles.loginBtn}
				                  onPress={() => doLogin()}>
					<Text>登录</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	inputView: {
		flex:1,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	inputItem: {
		height: 30,
		width: 150,
		borderBottomWidth: 1 / PixelRatio.get(),
		borderBottomColor: '#000',
	},
	loginBtn: {
		alignItems: 'center',
		marginTop: 10
	}
});