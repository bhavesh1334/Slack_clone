/** @format */
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyCloxyrodwTZx5rDoiuWwF-d6XlKnMe1Ak',
  authDomain: 'slack-clone-1334.firebaseapp.com',
  databaseURL: 'https://slack-clone-1334.firebaseio.com',
  projectId: 'slack-clone-1334',
  storageBucket: 'slack-clone-1334.appspot.com',
  messagingSenderId: '694590692050',
  appId: '1:694590692050:web:e563329bc78236bbcd6b0b',
};

//connect frontend to backend
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
//prepare authentication

const auth = firebase.auth();
//connecting the provider

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
