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
    margin: -10,
  },
  bgImage: {
    height: '80%',
    // alignItems: 'center',
    justifyContent: 'center',
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
  // modal
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    width: '100%',
    height: '100%',
    paddingTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    // borderRadius: 10,
    // borderColor: '#000',
    // borderWidth: 1,
  },
  textModal: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'typold_condensed_black',
    color: '#444'
  },
  touchableHighlight: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 10,
  },
  textView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // botao enviar
  button: {
    backgroundColor: 'green',
    borderRadius: 14,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '800',
    color: '#eee',
    fontFamily: 'asap_regular',
  },
  tipText: {
    fontFamily: 'asap_regular',
    fontSize: 12,
    margin: 2,
  },
  leitorQrCode: {
    width: width-120,
    height: width-120,
  },
  returnButton: {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginBottom: -8,
  },
});

export default styles;