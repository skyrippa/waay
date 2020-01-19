import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './style';

export default class DadosEmpresa extends Component {

	render() {
		return (
			<View style={styles.dadosEmpresa}>
				<Text>Dados da Empresa</Text>
				<Text>Nome: Restaurante da Carol</Text>
				<Text>Tel: 42069-8008</Text>
				<Text>Endereço: Rua 5</Text>
				<View>
					<TouchableOpacity
						style={styles.comoChegarButton}
					>
						<Text style={styles.comoChegarText}>Como chegar</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}