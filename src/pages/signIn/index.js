import React, { Component } from 'react';
import { 
	View, 
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	ToastAndroid,
} from 'react-native';

import styles from './styles';

export default class SignIn extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	cpf: '',
    	senha: ''
    };
  }

  onChangeCPFText = cpf => {
  	switch(this.state.cpf.length) {
  		case 2: case 6:
  			this.setState({ cpf: cpf+'.'});
  			break;
  		case 10:
  			this.setState({ cpf: cpf+'-'});
  			break;
  		default:
  			this.setState({ cpf })
  	}
  }

  onChangeSenhaText = senha => this.setState({ senha });

  autenticar = () => {
  	let cpf = this.state.cpf
  	cpf = cpf.replace('.','');
  	cpf = cpf.replace('-','');

  	if (cpf.length < 11) {
  		ToastAndroid.show('CPF inválido', ToastAndroid.SHORT);
  	} else if (cpf !== '12345678901') {
  		ToastAndroid.show('CPF não cadastrado', ToastAndroid.SHORT);
  	} else if (this.state.senha !== '1234') {
  		ToastAndroid.show('Senha incorreta', ToastAndroid.SHORT);
  	} else {
  		this.props.navigation.navigate('Main', { cpf: this.state.cpf });
  	}
  }

	render() {
		return (
			<View style={styles.container}>

				<View style={styles.header}>
					<Text style={styles.title}>Waay</Text>
				</View>
				
				<View style={styles.form}>
					<Text style={styles.label}>CPF:</Text>
					<TextInput
						style={styles.inputField}
						onChangeText={this.onChangeCPFText}
						value={this.state.cpf}
						returnKeyType='next'
						onSubmitEditing={() => {this.secondTextInput.focus()}}
    				blurOnSubmit={false}
    				keyboardType='number-pad'
    				autoCorrect={false}
    				maxLength={14}
					/>
					<Text style={styles.label}>SENHA DE ACESSO</Text>
					<Text style={styles.passwordHelpLabel}>(Não é a senha do cartão):</Text>
					<TextInput
						style={styles.inputField}
						onChangeText={this.onChangeSenhaText}
						value={this.state.senha}
						ref={(input) => { this.secondTextInput = input; }}
						secureTextEntry={true}
					/>

					<View style={styles.button}>
						<TouchableOpacity
							onPress={this.autenticar}
							style={styles.loginButton}
						>
							<Text style={styles.loginButtonText}>ENTRAR</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.forgotPasswordButton}>
							<Text style={styles.forgotPasswordText}>
								Esqueceu a senha?
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.registerButton}>
					<TouchableOpacity>
						<Text style={styles.registerButtonText}>
							Primeiro acesso? Clique AQUI
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
