import React, { Component } from 'react';
import { View, Image } from 'react-native';

import styles from './style';

export default class MapCanvas extends Component {

	render() {
		return (
			<View>
				<Image 
					source={require('../../../assets/images/mapa.jpg')}
					style={styles.mapa}
				/>
			</View>
		)
	}
}