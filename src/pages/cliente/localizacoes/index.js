import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './style';

import Header from '../../components/header';
import SearchBar from './searchbar';
import MapCanvas from './mapCanvas';
import DadosEmpresa from './dadosEmpresa';

export default class Localizacoes extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	place: {},
	  	initialRegion: {
	  		latitude: 0,
	  		longitude: 360,
	 			latitudeDelta: 360,
	 			longitudeDelta: 360,
	 		},
	 		noConnection: false,
	  };
	}

	onChangeRegion = (place) => {
		this.setState({ place });
	}

	onServerError = (bool) => {
		this.setState({ noConnection: bool });
	}

	sendNewRegion = () => {
		const { viewport } = this.state.place;
		const { initialRegion } = this.state;

		if (viewport !== undefined) {
			let newRegion = {
				latitude: viewport.latitudeSW,
				longitude: viewport.longitudeSW,
				latitudeDelta: viewport.latitudeNE - viewport.latitudeSW,
				longitudeDelta: viewport.longitudeNE - viewport.longitudeSW,
			}
			return newRegion;
		}
		return initialRegion;
	}

	render() {
		return(
			<View styles={styles.container}>
				<Header />
				<SearchBar 
					onChangeRegion={ this.onChangeRegion }
					onServerError={this.onServerError}
				/>
				<View style={styles.mapaView}>
					{ this.state.noConnection ?
						<Image source={require('../../../../assets/images/mapa.jpg')}/>
						:
						<MapCanvas region={this.sendNewRegion}/>
					}
					<DadosEmpresa place={this.state.place}/>
				</View>
			</View>
		)
	}
}