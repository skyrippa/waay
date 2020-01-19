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
import SignIn from './pages/cliente/signIn/index';
import SignInLojista from './pages/lojista/signInLojista/index';

// telas cliente
import Faturas from './pages/cliente/faturas/index';
import Cartoes from './pages/cliente/cartoes/index';
import Localizacoes from './pages/cliente/localizacoes/index';
// telas lojista
import Vendas from './pages/lojista/vendas/index';
import Perfil from './pages/lojista/perfil/index';
import Tab1 from './pages/lojista/tab1/index';

const ClienteNavigation = createBottomTabNavigator(
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

const LojistaNavigation = createBottomTabNavigator(
	{
		Tab1: {
			screen: Tab1,
		},
		Vendas: {
			screen: Vendas,
		},
		Perfil: {
			screen: Perfil,
		},
	},
	{
		defaultNavigationOptions: ({navigation}) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				if (routeName === 'Vendas') {
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
				} else if (routeName === 'Tab1') {
					return (
						<Image 
							source={
								focused
									? require('../assets/images/list-on.png')
									: require('../assets/images/list-off.png')
							}
							style={{
								width: 30,
								height: 30,
							}}
						/>
					)
				} else if (routeName === 'Perfil') {
					return (
						<Image 
							source={
								focused
									? require('../assets/images/avatar-on.png')
									: require('../assets/images/avatar-off.png')
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
		initialRouteName: 'Vendas',
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
	ClienteNavigation: {
		screen: ClienteNavigation,
		navigationOptions: {
			title: 'WAAY',
		}
	},
	LojistaNavigation: {
		screen: LojistaNavigation,
		navigationOptions: {
			title: 'WAAY',
		}
	}
})

export default createAppContainer(App);