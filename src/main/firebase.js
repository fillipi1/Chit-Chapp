import firebase from 'firebase/app';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyC1CM05f3hqGy0Su1Egb23Ghm0TQsHjUDg",
    authDomain: "chat-dashboard-5dbff.firebaseapp.com",
    databaseURL: "https://chat-dashboard-5dbff.firebaseio.com",
    projectId: "chat-dashboard-5dbff",
    storageBucket: "chat-dashboard-5dbff.appspot.com",
    messagingSenderId: "806554788186"
  };

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

export default firebase;