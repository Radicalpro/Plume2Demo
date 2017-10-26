import {Fetch} from 'ajkit'

/**
 * 登录系统
 * @param account
 * @param pass
 * @returns {*}
 */
export const login = (account, pass) => {
	return Fetch('/account/login', {
		method: 'POST',
		body: JSON.stringify({
			appVersion: '3.0.6',
			cityCode: '210000',
			deviceToken: '8f85478be7c47a5d',
			mobile: account,
			osType: 2,
			parterValue: 200,
			password: pass
		})
	})
}