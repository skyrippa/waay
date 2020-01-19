import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	modal: {
		height: 350,
		paddingTop: 10,
		alignSelf: 'center',
		alignItems: 'center',
		textAlign: 'center',
		backgroundColor: 'white',
		borderRadius: 10,
		borderColor: '#000',
		borderWidth: 1,
	},
	text: {
		textAlign: 'center',
		fontSize: 24,
		fontFamily: 'typold_condensed_black',
		color: '#444'
	},
	touchableHighlight: {
		flex: 1,
		backgroundColor: 'white',
		paddingVertical: 10,
		alignSelf: 'stretch',
		alignItems: 'center',
		borderRadius: 10,
	},
	textView: {
		flex: 1,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	// botao enviar
	buttonEnviar: {
		backgroundColor: '#FFC700',
		borderRadius: 20,
		padding: 10,
		margin: 15,
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 18,
		fontWeight: '800',
	},
	// fatura
	faturaView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	valorTitle: {
		fontSize: 16,
		color: '#444',
		fontFamily: 'asap_regular',
	},
	valorText: {
		fontSize: 28,
		color: '#18B4B1',
		fontFamily: 'typold_condensed_black',
	},
	infoView: {
		flex: 1,
	},
	qualidade: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#444',
	},
	valor: {
		fontSize: 16,
		fontFamily: 'asap_regular',
		color: '#444',
	},
});

export default styles;