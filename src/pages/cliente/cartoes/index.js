import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/header';
import CardList from './cardList';

import styles from './style';
import user from '../../../services/user.json';

export default class Cartoes extends Component {
	render() {
		return(
			<View style={{flex:1}}>
				<Header />
				<CardList data={user.cartoes} username={user.nome} />
			</View>
		)
	}
}