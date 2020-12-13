import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBPkivEkMcer9ZKmelkQo6K1u5U07uE6AE",
    authDomain: "electronic-device-rec.firebaseapp.com",
    databaseURL: "https://electronic-device-rec-default-rtdb.firebaseio.com",
    projectId: "electronic-device-rec",
    storageBucket: "electronic-device-rec.appspot.com",
    messagingSenderId: "1047417321706",
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;