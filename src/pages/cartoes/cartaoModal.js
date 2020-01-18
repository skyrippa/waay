import React, { Component } from 'react';
import { TouchableHighlight, ToastAndroid, Text, Modal, View, Dimensions } from 'react-native';

import Cartao from './cartao';
import DetalhesCartao from './detalhesCartao';

import styles from './style';

export default class CartaoModal extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	data: props.data,
	  	username: props.username,
	  	isModalVisible: false,
	  };
	}

	changeModalVisibility = (bool) => {
  	this.setState({ isModalVisible: bool });
  }

	onPress = () => {
		ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
	}

	render() {

		return (

			<TouchableHighlight
				onPress={() => this.changeModalVisibility(true)}
				underlayColor='white'
				activeOpacity={1}
				//style={{flex: 1}}
			>
				<View>
					<Cartao 
						data={this.state.data}
						username={this.state.username}
					/>
					<Modal
						transparent={true}
						visible={this.state.isModalVisible}
						onRequestClose={() => this.changeModalVisibility(false)}
						animationType='fade'
						style={{flex:1}}
					>
						<DetalhesCartao 
							changeModalVisibility={this.changeModalVisibility}
							data={this.state.data}
							username={this.state.username}
						/>
					</Modal>
				</View>
			</TouchableHighlight>
		)
	}
}
