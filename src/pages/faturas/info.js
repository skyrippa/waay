import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './style';

export default class Info extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	saldo: '',
    	faturaAnterior: '',
    	faturaAtual: '',
  	}
  }

  componentDidMount() {
  	const { 
  		data, 
  		faturaAnterior, 
  		faturaAtual
  	} = this.props;

  	this.setState({ 
  		saldo: data.saldo,
  		faturaAnterior: data.faturaAnterior,
  		faturaAtual: data.faturaAtual,
  	});
  }

	render() {
		return(
			<View style={styles.info}>
				<View style={styles.saldo}>
					<Text style={styles.saldoText}>SALDO DISPONÍVEL</Text>
					<Text style={styles.saldoValor}>{this.state.saldo}</Text>
				</View>
				<View style={styles.faturas}>
					<View style={styles.fatura}>
						<Text style={styles.faturaText}>Gastos do mês anterior</Text>
						<Text style={styles.faturaValor}>{this.state.faturaAnterior}</Text>
					</View>
					<View style={styles.fatura}>
						<Text style={styles.faturaText}>Gastos do mês atual</Text>
						<Text style={styles.faturaValor}>{this.state.faturaAtual}</Text>
					</View>
				</View>
			</View>
		)
	}
}