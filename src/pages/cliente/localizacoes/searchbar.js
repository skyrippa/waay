import React, { Component } from 'react';
import { TextInput, TouchableOpacity, View, Image } from 'react-native';

import styles from './style';

export default class SearchBar extends Component {

	render() {
		return (
			<View style={styles.searchBar}>
				<TextInput 
					placeholder={'Pesquise por estabelecimento...'}
					style={styles.searchField}
				/>

				<TouchableOpacity>
					<Image 
						source={require('../../../../assets/images/search.png')}
						style={styles.searchButton}
					/>
				</TouchableOpacity>
			</View>
		)
	}
}