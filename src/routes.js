import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';

import SignIn from './pages/signIn/index';
import Main from './pages/main/index';

const AppNavigator = createStackNavigator({
	SignIn: {
		screen: SignIn,
		navigationOptions: {
			headerShown: false,
		}
	},
	Main: {
		screen: Main,
		navigationOptions: {
			title: 'WAAY'
		}
	},
})

export default createAppContainer(AppNavigator);