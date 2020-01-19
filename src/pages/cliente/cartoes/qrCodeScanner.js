import React, { Component } from 'react';
import { View, Dimensions, Text, ToastAndroid, } from 'react-native';

import { RNCamera } from 'react-native-camera';

import styles from './style';

export default class QRCodeScanner extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	barcodes: [],
	  };
	}

	barcodeRecognized = ({ barcodes }) => {
		ToastAndroid.show(barcodes[0].data, ToastAndroid.SHORT);
		//this.setState({ barcodes });
	}

	render() {
		return  (
			<View>
				<RNCamera 
					ref={ref => {
						this.camera = ref;
					}}
					style={styles.leitorQrCode}
					ratio={'4:4'}
					onGoogleVisionBarcodesDetected={this.barcodeRecognized}
				>
				</RNCamera>
			</View>
		)
	}
}
