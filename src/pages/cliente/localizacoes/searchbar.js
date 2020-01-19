import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';

import styles from './style';

export default class SearchBar extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	place: {},
	  };
	}


	openSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
    .then((place) => {
			this.props.onChangeRegion(place);
    })
    .catch(error => {
    	this.props.onServerError(true);
  	});
  }

	render() {
		return (
			<View style={styles.searchBar}>
				<Text 
					style={styles.searchField}
					onPress={() => this.openSearchModal()}
				>
					Pesquise por estabelecimento...
				</Text>
				<TouchableOpacity
	        style={styles.button}
	        onPress={() => this.openSearchModal()}
	      >
	         <Image 
						source={require('../../../../assets/images/search.png')}
						style={styles.searchButton}
					/>
	       </TouchableOpacity>
				
			</View>
		)
	}
}
