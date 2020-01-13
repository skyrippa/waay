import React from 'react';
import { Text } from 'react-native';

const Main = ({navigation}) => <Text>{navigation.state.params.cpf}</Text>;

export default Main;