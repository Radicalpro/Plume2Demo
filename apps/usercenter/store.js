import React from 'react'
import {Alert} from 'react-native'
import {Store} from 'plume2'
import LoginActor from './actor/login-actor'
import * as webapi from './webapi'

export default class AppStore extends Store {

	constructor(props) {
		super(props)
	}

	bindActor() {
		return [
			new LoginActor
		]
	}

	setAccount = (value) => {
		this.dispatch("login:account", value)
	}

	setPass = (value) => {
		this.dispatch("login:password", value)
	}

	doLogin = async() => {
		//获取用户名和密码，并去除所有this的空格
		const account = this.state().get('account');
		const password = this.state().get('password');
		console.log('account-------> ' + account);
		console.log('password-------> ' + password);
		const res = await webapi.login(account, password);
		console.log('login-res------>' + JSON.stringify(res));
		if(res.code == 1){
			Alert.alert(
				'Alert Title',
				'登录成功',
			)
		}else {
			Alert.alert(
				'Alert Title',
				'登录失败',
			)
		}
	}

}