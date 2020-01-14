import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';

import Sign from './pages/signIn/index';
import SignInLojista from './pages/signInLojista/index';
import Main from './pages/main/index';

const AppNavigator = createStackNavigator({
	SignInLojista: {
		screen: SignInLojista,
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