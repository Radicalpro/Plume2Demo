import React, {Component} from 'react'
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native'
import {Relax} from 'plume2'

const {
	width: screenWidth,
	height: screenHeight
} = Dimensions.get('window'); // 屏幕宽高

@Relax
export default class BaskInSingleItem extends Component {

	static relaxProps = {
		baskInSingles: 'baskInSingles',
	}

	render() {
		const {item: baskInSingle} = this.props
		return (
			<View style={styles.container}>
				<Text>{baskInSingle.userNickName ? baskInSingle.userNickName : '为空'}</Text>
				{
					baskInSingle.imgObj.map((v, i) => {
						console.log('image------' + i + '------>' + v.smallImage)
						return (
							<Image key={i} resizeMode={'cover'} source={{uri: v.smallImage}} style={styles.img}/>
						)
					})
				}

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: screenWidth
	},
	img: {
		height: 100,
		width: 100
	}
});