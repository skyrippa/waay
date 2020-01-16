import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from './header';
import Info from './info';
import List from './list';

import user from '../../services/user.json';

export default class Faturas extends Component {

	render() {
		return(
			<View style={{flex:1}}>
				<Header />
				<Info data={user}/>
				<List data={user.compras}/>
			</View>
		)
	}
}