import {Action, Actor} from 'plume2'

export default class LoginActor extends Actor {

	defaultState() {
		return {
			account: '',    //账号
			password: '',   //密码
		}
	}

	@Action('login:account')
	changeAccount(state, account) {
		return state.set('account', account)
	}

	@Action('login:password')
	changePass(state, pass) {
		return state.set('password', pass)
	}

}