import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBOq_Q8AluZwPB_H-Cfvy1u3AOlS5IuvMc",
    authDomain: "firegram-36238.firebaseapp.com",
    databaseURL: "https://firegram-36238-default-rtdb.firebaseio.com",
    projectId: "firegram-36238",
    storageBucket: "firegram-36238.appspot.com",
    messagingSenderId: "292007720585",
    appId: "1:292007720585:web:2f15c051f3c63779e47858"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };