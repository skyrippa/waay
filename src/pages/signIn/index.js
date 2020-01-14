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
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles';
import user from '../../services/user.json';

export default class SignIn extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	cpf: '',
    	senha: '',
    	erroCpf: '',
    	erroDados: '',
    };
  }

  onChangeCpfText = cpf => {
  	if (cpf.length === 0) {
  		this.setState({ cpf, erroCpf: '' });
  	}
  	this.setState({ cpf });
  }

  onChangeSenhaText = senha => {
  	if (senha.length === 0) {
  		this.setState({ senha, erroDados: '' });
  	}
  	this.setState({ senha });
  }

  logar = () => {
  	if (this.cpfField.isValid()) {

	  	if (this.state.cpf === user.cpf && this.state.senha === user.senha) {
	  		this.setState({ erroDados: '', erroCpf: '' });
	  		this.props.navigation.navigate('Main', { cpf: this.state.cpf });
	  	} else {
	  		this.setState({erroDados: 'Usuário ou senha incorretos'});
	  	}
	  } else {
			this.setState({erroCpf: 'CPF inválido!'});
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

					<View style={styles.header}>
						<Text style={styles.title}>Waay</Text>
					</View>
		
					<View style={styles.form}>
					<View>
						<Text style={styles.label}>CPF:</Text>
						<TextInputMask
							type={'cpf'}
							style={styles.inputField}
							onChangeText={this.onChangeCpfText}
							value={this.state.cpf}
	    				keyboardType='number-pad'
	    				maxLength={14}
	    				ref={(ref) => this.cpfField = ref}
						/>
						<Text style={styles.errorText}>{this.state.erroCpf}</Text>
					</View>
					<View>
						<Text style={styles.label}>SENHA DE ACESSO</Text>
						<Text style={styles.passwordHelpLabel}>(Não é a senha do cartão):</Text>
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
