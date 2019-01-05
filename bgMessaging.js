// @flow
import firebase from 'react-native-firebase';
// Optional flow type
import { RemoteMessage, RNFirebase } from 'react-native-firebase';

export default async (message: RemoteMessage) => {
    const {data} =message;
    const{message:mensagem,title} = data;
    console.log(`Mensagem recebida ${mensagem} titulo ${title}`);
    return Promise.resolve();
}