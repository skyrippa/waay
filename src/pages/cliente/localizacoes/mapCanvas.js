import React, { Component } from 'react';
import { View, Image } from 'react-native';

import styles from './style';

import MapView from 'react-native-maps';

export default class MapCanvas extends Component {

	render() {
		return (
			<View>
				<MapView
					style={styles.mapa}
					region={ this.props.region() }
				/>
			</View>
		)
	}
}
