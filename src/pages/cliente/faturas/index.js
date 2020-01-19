import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/header';
import Info from './info';
import List from './list';
import Categoria from './categoria'

import user from '../../../services/user.json';

export default class Faturas extends Component {

	render() {
		return(
			<View style={{flex:1}}>
				<Header />
				<Categoria />
				<Info data={user} isClient={true}/>
				<List data={user.compras} isClient={true}/>
			</View>
		)
	}
}