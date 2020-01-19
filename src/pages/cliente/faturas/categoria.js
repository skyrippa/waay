import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './style';

export default class Categoria extends Component {

	render() {
		return(
			<View style={styles.categoria}>
				<View>
					<TouchableOpacity>
						<Text style={styles.alimentacaoText}>Alimentação</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.divisor}>
					<View></View>
				</View>
				<View>
					<TouchableOpacity>
						<Text style={styles.combustivelText}>Combustível</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}