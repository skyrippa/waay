import React, { Component } from 'react';
import { 
	Text, 
	View, 
	Image, 
	TouchableOpacity, 
	ScrollView,
	Linking,
} from 'react-native';

import styles from './style';

export default class DadosEmpresa extends Component {

	handleGoogleMapsStart = () => {
		const { viewport } = this.props.place;
		Linking.openURL(`http://maps.google.com/maps?q=${(viewport.latitudeNE+viewport.latitudeSW)/2},${(viewport.longitudeNE+viewport.longitudeSW)/2}`);
	}

	render() {

		const { name, address, phoneNumber } = this.props.place;

		return (		
		name !== undefined ?
			<ScrollView style={{height: 150}}>
				<View style={styles.dadosEmpresa}>
					<Text style={styles.dadosTitle}>{name}</Text>
						<Text style={styles.categoria}>Endereço:</Text>
						<Text style={styles.valor}>{address}</Text>
						<Text style={styles.categoria}>Telefone:</Text>
						<Text style={styles.valor}>{phoneNumber ? phoneNumber : ' sem número'}</Text>
					<View>
						<TouchableOpacity
							style={styles.comoChegarButton}
							onPress={this.handleGoogleMapsStart}
						>
							<Text style={styles.comoChegarText}>Como chegar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
			:
			null
		)
	}
	
}