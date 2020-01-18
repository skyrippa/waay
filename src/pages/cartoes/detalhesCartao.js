import React, { Component } from 'react';
import { 
	View, 
	Image, 
	TouchableOpacity,
	Dimensions,
	Text,
	TouchableHighlight,
	ToastAndroid,
} from 'react-native';
import { RNCamera } from 'react-native-camera';


import Cartao from './cartao';
import QRCodeScanner from './qrCodeScanner';

import styles from './style';

export default class DetalhesCartao extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
	  	data: props.data,
	  	username: props.username,
	  	barcode: {},
	  	cameraOn: false,
	  };
	  Dimensions.addEventListener('change', (e) => {
	  	this.setState(e.window);
	  });
	}

	closeModal = () => {
		this.props.changeModalVisibility(false);
	}

	confirmarCompra = () => {
		ToastAndroid.show('Compra confirmada!', ToastAndroid.SHORT);
	}

	barcodeRecognized = ({ barcodes }) => {
		this.setState({barcode: barcodes[0].data})
		this.confirmarCompra();
		this.closeModal();
	}

	mostrarCamera = (bool) => this.setState({ cameraOn: bool });

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
				<View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
					{ this.state.cameraOn ?
						<RNCamera 
							ref={ref => {
								this.camera = ref;
							}}
							style={styles.leitorQrCode}
							ratio={'4:4'}
							onGoogleVisionBarcodesDetected={this.barcodeRecognized}
						>
						</RNCamera>
						:
						<Image source={require('../../../assets/images/qrcode.jpg')} style={styles.leitorQrCode}/>
					}

					<View >
						<Text style={styles.tipText}>APROXIME A TELA DO TERMINAL DO LOJISTA</Text>
						<TouchableOpacity
							onPress={() => this.mostrarCamera(true)}
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

//<Image source={require('../../../assets/images/qrcode.jpg')} style={styles.leitorQrCode}/>