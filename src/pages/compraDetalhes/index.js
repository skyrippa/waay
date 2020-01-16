import React, { Component } from 'react';
import { 
	View, 
	Text, 
	TouchableHighlight,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	ToastAndroid,
} from 'react-native';

import styles from './style';

export default class CompraDetalhes extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	width: Dimensions.get('window').width,
	  	data: props.data,
	  };
	  Dimensions.addEventListener('change', (e) => {
	  	this.setState(e.window);
	  });
	}

	closeModal = () => {
		this.props.changeModalVisibility(false);
	}

	enviarComprovante = () => {
		this.closeModal();
		ToastAndroid.showWithGravity(
			'Comprovante enviado com sucesso!',
			ToastAndroid.SHORT,
			ToastAndroid.CENTER,
		);
	}

	render() {

		const { empresa, endereco, telefone, valor } = this.state.data;

		return(
			<TouchableOpacity 
				activeOpacity={1}
				disabled={true}
				style={styles.contentContainer}
			>
				<View style={[styles.modal, {width: this.state.width - 50}]}>
					<View style={styles.textView}>
						<Text style={styles.text}>Detalhes</Text>
						<View style={styles.faturaView}>
							<Text style={styles.valorTitle}>Valor da fatura</Text>
							<Text style={styles.valorText}>{valor}</Text>
						</View>

						<View style={{justifyContent: 'flex-start' }}>
							<Text style={styles.qualidade}>Nome:</Text>
							<Text style={styles.valor}>{empresa}</Text>
							<Text style={styles.qualidade}>Telefone:</Text>
							<Text style={styles.valor}>{telefone}</Text>
							<Text style={styles.qualidade}>Endereço:</Text>
							<Text style={styles.valor}>{endereco}</Text>
						</View>
					</View>
					
					<View>
						<TouchableHighlight
							onPress={() => this.enviarComprovante()}
							style={styles.buttonEnviar}
						>
							<Text style={styles.buttonText}>ENVIAR COMPROVANTE</Text>
						</TouchableHighlight>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}

//<TouchableHighlight
// 	onPress={() => this.closeModal()}
// 	style={styles.buttonCancel}
// 	underlayColor={'#f1f1f1'}
// >
// 	<Text style={styles.text}>Voltar</Text>
// </TouchableHighlight>