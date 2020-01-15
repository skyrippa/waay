import { 
	createAppContainer, 
	createSwitchNavigator,
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import React from 'react';
import { Button, Image } from 'react-native';
// telas login
import MenuInicial from './pages/menuInicial/index';
import SignIn from './pages/signIn/index';
import SignInLojista from './pages/signInLojista/index';

// telas do app
import Faturas from './pages/faturas/index';
import Cartoes from './pages/cartoes/index';
import Localizacoes from './pages/localizacoes/index';
import Vendas from './pages/vendas/index';

const MainNavigation = createBottomTabNavigator(
	{
		Cartoes: {
			screen: Cartoes,
		},
		Faturas: {
			screen: Faturas,
		},
		Localizacoes: {
			screen: Localizacoes,
		},
	},
	{
		defaultNavigationOptions: ({navigation}) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				if (routeName === 'Faturas') {
					return (
						<Image 
							source={
								focused
									? require('../assets/images/home-on.png')
									: require('../assets/images/home-off.png')
							}
							style={{
								width: 30,
								height: 30,
							}}
						/>
					)
				} else if (routeName === 'Localizacoes') {
					return (
						<Image 
							source={
								focused
									? require('../assets/images/location-on.png')
									: require('../assets/images/location-off.png')
							}
							style={{
								width: 30,
								height: 30,
							}}
						/>
					)
				} else if (routeName === 'Cartoes') {
					return (
						<Image 
							source={
								focused
									? require('../assets/images/card-on.png')
									: require('../assets/images/card-off.png')
							}
							style={{
								width: 36,
								height: 36,
							}}
						/>
					)
				}
			}
		}),
		initialRouteName: 'Faturas',
		tabBarOptions: {
			style: { 
				backgroundColor: '#fff',
				height: 60,
			},
			showLabel: false,
		},
	},
)

const App = createSwitchNavigator({
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
	MainNavigation: {
		screen: MainNavigation,
		navigationOptions: {
			title: 'WAAY'
		}
	},
	Vendas: {
		screen: Vendas,
	}
})

export default createAppContainer(App);