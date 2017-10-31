import {AppRegistry} from 'react-native';
import App from './apps/index';

AppRegistry.registerComponent('DemoApp', () => {
	//去warning
	//console.disableYellowBox = true;
	return App;
});
