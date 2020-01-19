import React, { Component } from 'react';
import { 
	View, 
	Text, 
	FlatList, 
	Image,
	TouchableHighlight,
} from 'react-native';

import CartaoModal from './cartaoModal';

import styles from './style';

export default class List extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	cartoes: props.data,
	  	username: props.username,
	  };
	}

  renderItem = ({ item }) => (
		<View>
				<CartaoModal data={item} username={this.state.username}/>
		</View>
	)

	render() {
		return(
			<View style={{flex:1, backgroundColor: '#f2f2f2'}}>
				<FlatList 
					data={this.state.cartoes}
					renderItem={this.renderItem}
					keyExtractor={item => item._id}
				/>
			</View>
		)
	}
}