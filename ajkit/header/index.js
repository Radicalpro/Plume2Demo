import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const isAndroid = Platform.OS === 'android';

/**
 * 公共header组件
 */
export default class Header extends Component {

	/**
	 * 设置默认属性
	 *
	 * @returns {{renderLeft: null, renderTitle: string, renderRight: null, onLeftMenuPress: null}}
	 */
	static defaultProps = {
		renderTitle: '',
		renderLeft: null,
		renderRight: null,
		onLeftMenuPress: null,
	}


	/**
	 * view
	 *
	 * @returns {XML}
	 */
	render() {
		return (
			<View style={[styles.container, this.props.style]}>
				{this._renderTitle()}
				{this._renderLeft()}
				{this._renderRight()}
			</View>
		);
	}


	/**
	 * 渲染左边区域
	 *
	 * @returns {XML}
	 * @private
	 */
	_renderLeft() {
		if (this.props.renderLeft) {
			return (
				<View style={styles.leftImg}>
					{this.props.renderLeft()}
				</View>
			);
		} else {
			return (
				<TouchableOpacity
					activeOpacity={0.8}
					style={[styles.leftImg, {paddingLeft: 10, paddingRight: 30}]}
					onPress={() => this._handleBack()}>
					<Image
						style={[styles.img, this.props.imgStyle]}
						source={require('./back.png')}/>
				</TouchableOpacity>
			);
		}
	}


	/**
	 * 渲染右侧区域
	 *
	 * @returns {XML}
	 * @private
	 */
	_renderRight() {
		if (this.props.renderRight) {
			return (
				<View style={styles.rightContainer}>
					{this.props.renderRight()}
				</View>
			);
		}
	}


	/**
	 * 渲染标题
	 *
	 * @returns {*}
	 * @private
	 */
	_renderTitle() {
		if (this.props.renderTitle) {
			return this.props.renderTitle();
		} else {
			return (
				<View style={styles.titleContainer}>
					<Text style={[styles.titleText, this.props.titleStyle]} allowFontScaling={false}>{this.props.title}</Text>
				</View>
			);
		}
	}


	/**
	 * 处理返回
	 * 默认pop路由,除非有自定义的处理
	 *
	 * @private
	 */
	_handleBack() {
		if (this.props.onLeftMenuPress) {
			this.props.onLeftMenuPress();
		} else {
			// msg.on('router: back', this._back)
		}
	}
}


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: isAndroid ? 50 : 60,
		paddingTop: isAndroid ? 0 : 15,
		backgroundColor: '#3d85cc',
	},
	leftImg: {
		height: isAndroid ? 50 : 45,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		left: 0,
		backgroundColor: 'transparent',
		top: isAndroid ? 2 : 15
	},
	img: {
		width: 10,
		height: 18
	},
	titleContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleText: {
		color: '#ffffff',
		fontSize: 18,
		fontWeight: '400'
	},
	rightContainer: {
		height: isAndroid ? 50 : 45,
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		right: 0,
		paddingRight: 10,
		bottom: 0,
		backgroundColor: 'transparent',
	}
});