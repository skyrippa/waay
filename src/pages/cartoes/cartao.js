import React, { Component } from 'react';
import { 
	ImageBackground, 
	View, 
	Text, 
	Dimensions,
	Image,
} from 'react-native';

import styles from './style';

export default class Cartao extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	data: props.data,
	  	username: props.username,
	  };
	}

	pickBackgroundImage = (banco) => {
		switch(banco) {
			case 'visa':
				return require('../../../assets/images/card-visa.png');
			case 'mastercard':
				return require('../../../assets/images/card-mastercard.png');
			case 'purple':
				return require('../../../assets/images/card-purple.png');
		}
	}

	pickQrCode = (banco) => {
		switch(banco) {
			case 'visa':
				return require('../../../assets/images/qrcode-visa.jpg');
		}
	}

	pickBandeira = (banco) => {
		switch(banco) {
			case 'visa':
				return require('../../../assets/images/bandeira-visa.jpg');
			case 'mastercard':
				return require('../../../assets/images/bandeira-mastercard.jpg');
		}
	}

	render() {
		const { width } = Dimensions.get('window');
		const { banco, numero } = this.state.data;
		const { username } = this.state;
		const backgroundImage = this.pickBackgroundImage(banco);

		return (
				<View style={styles.card}>
					<ImageBackground
						source={this.pickBackgroundImage(banco)}
						style={[styles.bgImage, { width: width-50 }]}
						imageStyle={styles.bgImageStyle}
					>

						<View style={styles.cardImages}>
							<Image 
								source={this.pickBandeira(banco)} 
								style={styles.bandeira}
							/>
							<Image 
								source={this.pickQrCode(banco)} 
								style={styles.qrCode}
							/>
						</View>

						<View style={styles.dados}>
							<Text style={styles.text}>{banco != 'purple' ? username : null}</Text>
							<Text style={styles.text}>{banco != 'purple' ? numero : null}</Text>
						</View>
					</ImageBackground>
				</View>
		)
	}
}
