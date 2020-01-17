import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

import styles from './style';

const Header = () => (
	<View style={styles.header}>
		<StatusBar backgroundColor="#18B4B1" barStyle="light-content" />
		<Text style={styles.title}>Waay</Text>
	</View>
)

export default Header;