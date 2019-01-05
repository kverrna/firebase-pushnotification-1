import React from 'react';
import {Platform, StyleSheet, Text, View, Alert, Button} from 'react-native';
import firebase from 'react-native-firebase';
import { Notification, RemoteMessage, RNFirebase } from 'react-native-firebase';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const notification = new firebase.notifications.Notification()
  .setNotificationId('notificationId')
  .setTitle('My notification title')
  .setBody('My notification body')
  .setData({
    key1: 'value1',
    key2: 'value2',
  });

  const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
  .setDescription('My apps test channel');

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.messageListener = firebase.messaging().onMessage((message: RemoteMessage) => {
      const {data} =message;
      const{message:mensagem,title} = data;

      console.log(`Mensagem recebida:[=D] ${mensagem} titulo ${title} idChannel: ${message.data.channelId}`);
      
    //   firebase.notifications().android.createChannel(channel);
      
    //   notification.android.setChannelId(channel.channelId);
    //   notification.android.setSmallIcon('ic_launcher');
    //   notification.android.setPriority(RNFirebase.notifications.Android.Priority.High);

    //   firebase.notifications().displayNotification(notification);
  });

  this.notificationListener = firebase.notifications().onNotification((notification: Notification) => {
      // Process your notification as required
      const { title, body, data } =notification;
      const { channelId } = data;


      Alert.alert('Pagamento Confirmado','O pagamento foi confirmado');
      console.log(`Mensagem recebida: notification -> [ ${title} ]-[ ${body} ] `);
      
  });
  


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
        //   Alert.alert('Permissoes','Permissoes concedidas');
        } else {
          Alert.alert('Permissoes','Permissoes nao concedidas');
        } 
      });
  }

  componentWillUnmount() {
    this.notificationDisplayedListener();
    this.notificationListener();
    this.messageListener();
}
  
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title="Pagina 2" onPress={()=>navigation.navigate('Pagina2')}/>
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

export default Home;

