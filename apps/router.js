import {StackNavigator, TabBarBottom, TabNavigator} from 'react-navigation'
import BaskInSingle from './baskinsingle'
import UserCenter from './usercenter'
import Demo from './demolist'

const Tab = TabNavigator(
	{

		//晒单
		Demo: {
			screen: Demo,
			navigationOptions: ({navigation}) => ({
				//选项卡名称
				tabBarLabel: 'demo'
			})
		},
		//晒单
		BaskInSingle: {
			screen: BaskInSingle,
			navigationOptions: ({navigation}) => ({
				//选项卡名称
				tabBarLabel: '晒单'
			})
		},
		//个人中心
		UserCenter: {
			screen: UserCenter,
			navigationOptions: ({navigation}) => ({
				//选项卡名称
				tabBarLabel: '个人中心'
			})
		}
	}, {
		tabBarComponent: TabBarBottom,
		tabBarPosition: 'bottom',
		tabBarOptions: {
			labelStyle: {
				fontSize: 12
			}
		},
		lazy: true,
		animationEnabled: false,
		swipeEnabled: false
	}
);

export const AppNavigator = StackNavigator({
	Tab: {
		screen: Tab,
		//屏幕导航选项
		navigationOptions: {
			//设置隐藏标题。HeaderProps null
			header: null
		}
	},
});