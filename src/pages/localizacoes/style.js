import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f2f2f2',
	},
	// searchbar
	searchBarView: {
		flex: 1,
	},
	searchBar: {
		// flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 60,
		marginTop: 10,
		marginBottom: 5,
	},
	searchField: {
		backgroundColor: '#fff',
		justifyContent: 'center',
		width: width-100,
		textAlign: 'center',
	},
	searchButton: {
		width: 40,
		height: 40,
		margin: 10,
	},
	// mapView
	mapaView: {
		// flex: 4,
		alignItems: 'center',
		justifyContent: 'center',
	},
	mapCanvas: {
		// flex: 2,
	},
	// mapa
	mapa: {
		width: width-30,
		height: width-100,
	},
	// dados empresa
	dadosEmpresa: {
		backgroundColor: '#fff',
		width: width-30,
		padding: 10,
	},
	comoChegarButton: {
		alignSelf: 'flex-start',
		padding: 10,
		marginTop: 2,
		backgroundColor: 'green',
		borderRadius: 8,
	},
	comoChegarText: {
		color: '#fff',
	}
});

export default styles;