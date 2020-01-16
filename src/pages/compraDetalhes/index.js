import React, { Component } from 'react';
import { 
	View, 
	Text, 
	Modal, 
	TouchableHighlight,
	Alert,
} from 'react-native';

export default class CompraDetalhes extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	compraDetalhes: props.data,
    	modalVisible: false,
    }
  }

  setModalVisible = (visible) => this.setState({ modalVisible: visible })

	render() {
		const { data, hora, valor, empresa, endereco } = this.state.compraDetalhes;

		return(
			<View>
				<Modal
					animationType='slide'
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						Alert.alert('Modal has been closed.');
					}}>
					<View style={{marginTop: 22}}>
						<View>
							<Text>Hello World!</Text>

							<TouchableHighlight
								onPress={() => {
									this.setModalVisible(!this.state.modalVisible);
								}}>
								<Text>Hide Modal</Text>
							</TouchableHighlight>
						</View>
					</View>
				</Modal>
			</View>
		)
	}
}