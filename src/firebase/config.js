import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBcHodQFC8F2VSGgvDIJOjPoX2nXbb3edE",
  authDomain: "yogesh-firegram.firebaseapp.com",
  databaseURL: "https://yogesh-firegram.firebaseio.com",
  projectId: "yogesh-firegram",
  storageBucket: "yogesh-firegram.appspot.com",
  messagingSenderId: "314255995169",
  appId: "1:314255995169:web:d3734d4b88ab0f54f44e60"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }