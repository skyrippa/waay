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
		fontSize: 80,
		fontFamily: 'typold_condensed_black'
	},
	description: {
		color: '#eee',
		fontSize: 16,
		alignSelf: 'center'
	},
	body: {
		flex: 1,
		//flexDirection: 'row',
		alignItems: 'stretch',
	},
	// estilo botões
	button: {
		padding: 40,
		backgroundColor: '#FFC700',
		margin: 2,
		alignSelf: 'flex-start',
		borderRadius: 20,
	},
	buttonText: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#111',
		fontFamily: 'opensans_regular',

	}
})

export default styles;