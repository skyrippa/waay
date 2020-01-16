import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		margin: 10,
		alignItems: 'center'
	},
	// coluna data
	col1: {
		flex: 2,
	},
	dia: {
		color: '#18B4B1',
		fontSize: 18,
		fontFamily: 'roboto_medium',
	},
	hora: {
		fontSize: 12,
		alignSelf: 'center',
		color: '#888',
		fontFamily: 'opensans_regular',
	},
	// divisor
	col2: {
		flex: 1,
		alignSelf: 'flex-start',
		margin: 7,
		marginLeft: 14
	},
	divisor: {
		height: 15,
		width: 15,
		backgroundColor: '#bbb',
		borderRadius: 50,
	},
	// coluna valor/empresa
	col3: {
		flex: 7,
	},
	valor: {
		color: '#666',
		fontSize: 18,
		fontFamily: 'roboto_medium',
	},
	empresa: {
		color: '#888'
	},
})

export default styles;