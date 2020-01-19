import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Header from '../../components/header';
import Info from '../../cliente/faturas/info';
import List from '../../cliente/faturas/list';

import user from '../../../services/user.json';

export default class Vendas extends Component {
	render() {
		return (
			<View style={{flex:1}}>
				<Header />
				<Info data={user}/>
				<List data={user.compras}/>
			</View>
		)
	}
}