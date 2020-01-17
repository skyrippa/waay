import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	// info
	info: {
		flex: 2,
		backgroundColor: '#fff',
	},
	saldo: {
		flex: 1,
		marginTop: 10,
		marginLeft: width * 0.03,
	},
	saldoText: {
		fontSize: 14,
		fontFamily: 'asap_regular',
		color: '#666',
		marginBottom: -6
	},
	saldoValor: {
		fontSize: 36,
		color: '#FFC700',
		fontFamily: 'roboto_bold',
	},
	faturas: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginLeft: width * -0.04,
	},
	fatura: {
		// marginLeft: ,
	},
	faturaText: {
		fontSize: 14,
		fontFamily: 'asap_regular',
		color: '#888'
	},
	faturaValor: {
		color: '#18B4B1',
		fontFamily: 'roboto_bold',
		fontSize: 24,
	},
	// list
	list: {
		flex: 5,
		backgroundColor: '#F2F2F2',
	},
	listTitle: {
		fontFamily: 'asap_regular',
		fontSize: 18,
		color: '#777',
		margin: 10,
	},
	listBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	img: {
		width: 35,
		height: 35,
		margin: 10,
	},
	categoria: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		flex: 0.8,
		backgroundColor: '#fff',
	},
	alimentacaoText: {
		fontSize: 18,
		fontFamily: 'asap_regular',
		color: '#444'
	},
	combustivelText: {
		fontSize: 15,
		fontFamily: 'asap_regular',
		color: '#666'
	},
	divisor: {
		margin: -100,
		height: 8,
		width: 8,
		backgroundColor: '#18B4B1',
		borderRadius: 50,
	},
})

export default styles;