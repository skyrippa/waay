import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './style';

export default class Compra extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	compra: props.data,
    }
  }

	render() {
		const { data, hora, valor, empresa, endereco } = this.state.compra;

		return(
			<View style={styles.container}>
				<View style={styles.col1}>
					<Text style={styles.dia}>{data}</Text>
					<Text style={styles.hora}>{hora}</Text>
				</View>
				<View style={styles.col2}>
					<View style={styles.divisor}></View>
				</View>
				<View style={styles.col3}>
					<Text style={styles.valor}>{valor}</Text>
					<Text style={styles.empresa}>{empresa}</Text>
				</View>
			</View>
		)
	}
}