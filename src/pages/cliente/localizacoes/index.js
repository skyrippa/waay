import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './style';

import Header from '../../components/header';
import SearchBar from './searchbar';
import MapCanvas from './mapCanvas';
import DadosEmpresa from './dadosEmpresa';

export default class Localizacoes extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	local: '',
	  };
	}

	render() {
		return(
			<View styles={styles.container}>
				<Header />
				<SearchBar />
				<View style={styles.mapaView}>
					<MapCanvas />
					<DadosEmpresa />
				</View>
			</View>
		)
	}
}