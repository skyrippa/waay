import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	// header
	header: {
		// flex: 1,
		backgroundColor: '#18B4B1',
		alignItems: 'center',
		justifyContent: 'center',
		height: 80
	},
	title: {
		fontFamily: 'typold_condensed_black',
		fontSize: 50,
		color: '#eee',
	},

});

export default styles;