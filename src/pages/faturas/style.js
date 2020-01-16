import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	// header
	header: {
		flex: 1,
		backgroundColor: '#18B4B1',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontFamily: 'typold_condensed_black',
		fontSize: 50,
		color: '#eee',
	},
	// info
	info: {
		flex: 2,
		backgroundColor: '#fff',
	},
	saldo: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		margin: 10,
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
		justifyContent: 'space-around' ,
		marginLeft: -15,
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
})

export default styles;