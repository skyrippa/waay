import React, { Component } from 'react';
import { 
	View, 
	Image, 
	TouchableOpacity,
	Dimensions,
	Text,
	TouchableHighlight,
} from 'react-native';

import Cartao from './cartao';
import QRCodeScanner from './qrCodeScanner';

import styles from './style';

export default class DetalhesCartao extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
	  	data: props.data,
	  	username: props.username,
	  };
	  Dimensions.addEventListener('change', (e) => {
	  	this.setState(e.window);
	  });
	}

	closeModal = () => {
		this.props.changeModalVisibility(false);
	}

	render() {
		const { data, username } = this.state;

		return(
			<View style={styles.modal}>
				<TouchableOpacity
					onPress={() => this.closeModal()}
					style={{alignSelf: 'flex-start'}}
				>
					<Image 
						source={require('../../../assets/images/left.png')}
						style={styles.returnButton}
					/>
				</TouchableOpacity>
				<Cartao 
					data={data} 
					username={username} 
				/>
				<View style={{flex:1, alignItems: 'center'}}>
					<Image source={require('../../../assets/images/qrcode.jpg')} style={styles.leitorQrCode}/>
					<View style={{margin:10}}>
					<Text style={styles.tipText}>APROXIME A TELA DO TERMINAL DO LOJISTA</Text>
					<TouchableOpacity
						onPress={() => this.closeModal()}
						style={styles.button}
					>
						<Text style={styles.buttonText}>LER QR CODE</Text>
					</TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}
}

// <Image
// 						style={styles.leitorQrCode}
// 						source={require('../../../assets/images/qrcode.jpg')}
// 					/>