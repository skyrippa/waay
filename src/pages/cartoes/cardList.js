import React, { Component } from 'react';
import { 
	View, 
	Text, 
	FlatList, 
	Image,
	TouchableHighlight,
	Modal,
} from 'react-native';

import Cartao from './cartao';

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
				<Cartao data={item} username={this.state.username}/>
		</View>
	)

	render() {
		return(
			<View style={{flex:1}}>
				<FlatList 
					data={this.state.cartoes}
					renderItem={this.renderItem}
					keyExtractor={item => item._id}
				/>
			</View>
		)
	}
}