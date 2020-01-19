import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	// estilo da tela
	container: {
		backgroundColor: '#18B4B1',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	// estilo header
	header: {
		flex: 1,
		justifyContent: 'center'
	},
	title: {
		color: '#eee',
		fontSize: 60,
		fontFamily: 'typold_condensed_black'
	},
	subtitle: {
		color: '#eee',
		fontSize: 18,
		fontFamily: 'opensans_regular',
		alignSelf: 'center'
	},
	// estilo form
	form: {
		flex: 2,
		justifyContent: 'center',
		width: '70%',
		//margin: 40,
	},
	label: {
		color: '#eee',
		fontSize: 18,
		marginTop: 40,
		fontFamily: 'opensans_regular'
	},
	passwordHelpLabel: {
		fontSize: 14,
		color: '#eee',
		fontFamily: 'opensans_regular',
	},
	inputField: {
		borderBottomColor: '#eee',
    borderBottomWidth: 1,
    fontSize: 18,
    color: '#eee',
    //marginBottom: 20,
	},
	errorText: {
		color: 'red',
		fontFamily: 'opensans_regular',
	},
	// estilo botões
	button: {
		padding: 10,
	},
	// botao entrar
	loginButton: {
		backgroundColor: '#FFC700',
		padding: 18,
		marginBottom: 16,
		borderRadius: 40,
		alignItems: 'center',
	},
	loginButtonText: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#111',
		fontFamily: 'opensans_regular',
	},
	// botao esqueceu a senha
	forgotPasswordText: {
		fontSize: 16,
		color: '#eee',
		fontFamily: 'opensans_regular'
	},
	forgotPasswordButton: {
		alignItems: 'center',
	},
	// botão registrar
	registerButton: {
		flex: 1,
		justifyContent: 'center'
	},
	registerButtonText: {
		fontSize: 18,
		color: '#eee',
		fontFamily: 'opensans_regular'
	}
});

export default styles;