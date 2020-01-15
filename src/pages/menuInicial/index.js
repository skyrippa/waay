import React, { Component } from 'react';
import { 
	View, 
	Text, 
	TouchableOpacity,
	StatusBar,
} from 'react-native';

import styles from './style.js';

export default class MenuInicial extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor="#18B4B1" barStyle="light-content" />
				<View style={styles.header}>
					<Text style={styles.title}>Waay</Text>
					<Text style={styles.description}>App de fatura de cartões</Text>
				</View>
				<View style={styles.body}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => this.props.navigation.navigate('SignIn')}
						>
						<Text style={styles.buttonText}>CLIENTE</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => this.props.navigation.navigate('SignInLojista')}
					>
						<Text style={styles.buttonText}>LOJISTA</Text>
					</TouchableOpacity>
				</View>
				<View>
					<Text style={{color: 'white'}}>
						Made with React Native
					</Text>
				</View>
			</View>
		)
	}
}