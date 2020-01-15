import React, { Component } from 'react';
import { 
	View, 
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
	ToastAndroid,
	StatusBar
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import styles from '../signIn/styles';
import user from '../../services/user.json';

export default class SignInLojista extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	cnpj: '',
    	senha: '',
    	erroCnpj: '',
    	erroDados: '',
    };
  }

  onChangeCnpjText = cnpj => {
  	if (cnpj.length === 0) {
  		this.setState({ cnpj, erroCnpj: '' });
  	}
  	this.setState({ cnpj });
  }

  onChangeSenhaText = senha => {
  	if (senha.length === 0) {
  		this.setState({ senha, erroDados: '' });
  	}
  	this.setState({ senha });
  }

  logar = () => {
  	if (this.cnpjField.isValid()) {

	  	if (this.state.cnpj === user.cnpj && this.state.senha === user.senha) {
	  		this.setState({ erroDados: '', erroCnpj: '' });
	  		this.props.navigation.navigate('MainNavigation');
	  	} else {
	  		this.setState({erroDados: 'Usuário ou senha incorretos'});
	  	}
	  } else {
			this.setState({erroCnpj: 'cnpj inválido!'});
	  }
  }

  funcIncompleta = () => {
  	Alert.alert(
  		'Funcionalidade incompleta',
  		'Esta funcionalidade será adicionada em breve.',
  	)
  }

	render() {
		return (
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.container}>
					<StatusBar backgroundColor="#18B4B1" barStyle="light-content" />
					<View style={styles.header}>
						<Text style={styles.title}>Waay</Text>
						<Text style={styles.subtitle}>LOJISTA</Text>
					</View>
		
					<View style={styles.form}>
					<View>
						<Text style={styles.label}>CNPJ:</Text>
						<TextInputMask
							type={'cnpj'}
							style={styles.inputField}
							onChangeText={this.onChangeCnpjText}
							value={this.state.cnpj}
	    				keyboardType='number-pad'
	    				maxLength={18}
	    				ref={(ref) => this.cnpjField = ref}
						/>
						<Text style={styles.errorText}>{this.state.erroCnpj}</Text>
					</View>
					<View>
						<Text style={styles.label}>SENHA DE ACESSO:</Text>
						<TextInput
							style={styles.inputField}
							onChangeText={this.onChangeSenhaText}
							value={this.state.senha}
							autoCorrect={false}
							secureTextEntry={true}
							onSubmitEditing={this.logar}
							ref={(ref) => this.senhaField = ref}
						/>
						<Text style={styles.errorText}>{this.state.erroDados}</Text>
						</View>
						<View style={styles.button}>
							<TouchableOpacity
								onPress={this.logar}
								style={styles.loginButton}
							>
								<Text style={styles.loginButtonText}>ENTRAR</Text>
							</TouchableOpacity>
							<TouchableOpacity 
								style={styles.forgotPasswordButton}
								onPress={this.funcIncompleta}
							>
								<Text style={styles.forgotPasswordText}>
									Esqueceu a senha?
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					
					<View style={styles.registerButton}>
						<TouchableOpacity onPress={this.funcIncompleta}>
							<Text style={styles.registerButtonText}>
								Primeiro acesso? Clique AQUI
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}
