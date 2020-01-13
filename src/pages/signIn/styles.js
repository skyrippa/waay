import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	// estilo da tela
	container: {
		backgroundColor: '#6fb89f',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	// estilo header
	header: {
		flex: 1,
		justifyContent: 'center',
	},
	title: {
		fontWeight: 'bold',
		color: 'white',
		fontSize: 65,
	},
	// estilo form
	form: {
		flex: 2,
		justifyContent: 'center',
		width: '70%',
	},
	label: {
		color: 'white',
		fontSize: 18,
		marginTop: 20,
	},
	passwordHelpLabel: {
		fontSize: 14,
		color: 'white',
	},
	inputField: {
		borderBottomColor: 'white',
    borderBottomWidth: 1,
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
	},
	// estilo botões
	button: {
		padding: 10,
	},
	// botao entrar
	loginButton: {
		backgroundColor: '#ffd800',
		padding: 18,
		marginBottom: 16,
		borderRadius: 40,
		alignItems: 'center',
	},
	loginButtonText: {
		fontWeight: 'bold',
		fontSize: 20,

	},
	// botao esqueceu a senha
	forgotPasswordText: {
		fontSize: 16,
		color: 'white',
	},
	forgotPasswordButton: {
		alignItems: 'center',
	},
	// botão registrar
	registerButton: {
		flex: 1,
		justifyContent: 'center',
	},
	registerButtonText: {
		fontSize: 18,
		color: 'white',
	}
});

export default styles;