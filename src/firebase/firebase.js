import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB-KaP7Nw6Nx-UdOZ3BnKrjxJNimCb1PE4",
  authDomain: "expensify-cab9d.firebaseapp.com",
  databaseURL: "https://expensify-cab9d.firebaseio.com",
  projectId: "expensify-cab9d",
  storageBucket: "expensify-cab9d.appspot.com",
  messagingSenderId: "258750244826"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };