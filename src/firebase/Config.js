import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQQNPcEtOEwaqMfyhLra3EYLHa5kpWbOc",
    authDomain: "olxclone-ae5cd.firebaseapp.com",
    projectId: "olxclone-ae5cd",
    storageBucket: "olxclone-ae5cd.appspot.com",
    messagingSenderId: "486790278910",
    appId: "1:486790278910:web:9838d31ef85b57e309ffaf",
    measurementId: "G-CF60HNE3RJ"
  };

export default firebase.initializeApp(firebaseConfig)