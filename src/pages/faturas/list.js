import React, { Component } from 'react';
import { 
	View, 
	Text, 
	FlatList, 
	Image,
	TouchableHighlight,
	Modal,
} from 'react-native';

import styles from './style';

import Compra from '../compra/index';
import CompraDetalhes from '../compraDetalhes/index';
import ListHeader from './listHeader';

export default class List extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	data: props.data,
    }
  }

  renderItem = ({ item }) => (
		<View>
				<Compra data={item} />
		</View>
	)

	render() {
		return(
			<View style={styles.list}>
				<ListHeader data={this.state.data}/>
				<FlatList 
					data={this.state.data}
					keyExtractor={item => item._id}
					renderItem={this.renderItem}
				/>
			</View>
		)
	}
}