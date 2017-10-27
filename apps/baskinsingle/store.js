import React from 'react'
import {Store} from 'plume2'
import BaskInSingleListFromActor from "./actor/baskinsingle-list-from-actor";

export default class AppStore extends Store {

	constructor(props) {
		super(props)
	}

	bindActor() {
		return [
			new BaskInSingleListFromActor
		]
	}

	init = () => {
		this.dispatch('list-from:setFrom')
		this.dispatch('list-from:test')
	}

	fetchBaskInSingle = (res) => {
		if (res.obj) {
			this.dispatch('list-from:fetchBaskInSingle', res.obj)
		}
	}

}