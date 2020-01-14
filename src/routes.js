import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MenuInicial from './pages/menuInicial/index';
import SignIn from './pages/signIn/index';
import SignInLojista from './pages/signInLojista/index';
import Main from './pages/main/index';

const mainNavigation = createSwitchNavigator({
	MenuInicial: {
		screen: MenuInicial
	},
	SignIn: {
		screen: SignIn,
		navigationOptions: {
			headerShown: false,
		}
	},
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

export default createAppContainer(mainNavigation);