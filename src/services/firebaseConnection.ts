import firebase from "firebase";
import 'firebase/firestore'

let firebaseConfig = {
  apiKey: "AIzaSyC2OFWlFLcXuYP_y7-PrlUjqjlEpjo1Ph4",
  authDomain: "nextboard-7c278.firebaseapp.com",
  projectId: "nextboard-7c278",
  storageBucket: "nextboard-7c278.appspot.com",
  messagingSenderId: "326824482338",
  appId: "1:326824482338:web:2ff71e6f92f6e04a7d1c7b"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;