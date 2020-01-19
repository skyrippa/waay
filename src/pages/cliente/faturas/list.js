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
    	isClient: props.isClient,
    }
  }

  renderItem = ({ item }) => (
		<View>
				<Compra data={item} isClient={this.state.isClient}/>
		</View>
	)

	render() {
		const { isClient } = this.state;
		return(
			<View style={styles.list}>
				{ isClient ?
					<ListHeader data={this.state.data}/>
					:
					<Text style={styles.listTitle}>Últimas vendas</Text>
				}
				<FlatList 
					data={this.state.data}
					keyExtractor={item => item._id}
					renderItem={this.renderItem}
				/>
			</View>
		)
	}
}