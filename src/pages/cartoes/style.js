import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  list: {
    flex: 3,
    backgroundColor: '#F2F2F2',
  },
  card: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: width/1.5,
    elevation: 1,
    margin: -10,
  },
  bgImage: {
    height: '80%',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  bgImageStyle: {
    borderRadius: 20,
  },
  // imagens do cartao
  cardImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // qr code
  qrCode: {
    height: width/4.5,
    width: width/4.5,
    margin: 15,
  },
  // bandeira
  bandeira: {
    height: width/5,
    width: width/2.8,
    margin: 5.5,
  },
  // dados
  dados: {
    margin: 16,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    padding: 1,
    fontFamily: 'asap_regular',
  },
});

export default styles;