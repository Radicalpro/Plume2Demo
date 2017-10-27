import React, {Component} from 'react'
import {Image, StyleSheet, View} from 'react-native'
import {screenWidth} from '../styles'

export default class Loading extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.img} source={require('./loading.gif')}/>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	img: {
		width: screenWidth,
		height: screenWidth * 0.196
	}
});
