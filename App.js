/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert} from 'react-native';
import firebase from 'react-native-firebase';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  componentDidMount(){

  //   this.messageListener = firebase.messaging().onMessage((message: RemoteMessage) => {
  //     Alert.alert('Mensagem recebida','uhuu');
  // });
    // firebase.auth().signInAnonymously()
    // .then((user) => {
    //   Alert.alert('Usuario anonimo',`->${user.isAnonymous}`);
    // }).catch(erro=>{
    //   Alert.alert('Erro',` erro : ${erro}`);
    // });

    firebase.messaging().getToken()
      .then(fcmToken => {
        if (fcmToken) {
          console.log(`Token: ${fcmToken}`);
        } else {
          Alert.alert('Nao tem token  ','=(');
        } 
      });

      firebase.messaging().hasPermission()
      .then(enabled => {
        if (enabled) {
          Alert.alert('Permissoes','Permissoes concedidas');
        } else {
          Alert.alert('Permissoes','Permissoes nao concedidas');
        } 
      });
  }

  componentWillMount(){
    
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
