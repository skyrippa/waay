import React, { Component } from 'react';
import { 
	View, 
	Text, 
	TouchableOpacity, 
	Image,
	TextInput,
} from 'react-native';

import styles from './style';

export default class ListHeader extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	data: props.data,
    	searchValue: '',
    	isSearchActive: false,
    }
  }

	onSearchPressed = () => {
		this.setState({ isSearchActive: true });
	}
	onSearchTextChanged = (searchValue) => {
		this.setState({ searchValue });
	}
	onSearchClearPressed = () => {
		this.onSearchTextChanged('');
	}
	onSearchClosed = () => {
		this.setState({ isSearchActive: false, searchValue: ''});
	}

	onPress = () => {
		// const { isSearchActive, searchValue } = this.state;

		// if (isSearchActive && searchValue.length > 0) {
		// 	this.onSearchClearPressed();
		// } else {
		// 	this.onSearchPressed();
		// }
	}

	render() {
		const { isSearchActive, searchValue } = this.state;

		return(
			<View style={styles.listBar}>
				<Text style={styles.listTitle}>Últimas compras</Text>
				<TouchableOpacity
					onPress={this.onPress}
				>
					<Image 
						style={styles.img} 
						source={require('../../../assets/images/search.png')} 
					/>
				</TouchableOpacity>
			</View>
		)
	}
}