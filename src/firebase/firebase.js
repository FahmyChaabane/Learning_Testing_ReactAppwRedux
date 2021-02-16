import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_SA8TuS7aMv7B4a1_YrdI88zXX6xWO-M",
  authDomain: "expensify-d169a.firebaseapp.com",
  databaseURL: "https://expensify-d169a-default-rtdb.firebaseio.com",
  projectId: "expensify-d169a",
  storageBucket: "expensify-d169a.appspot.com",
  messagingSenderId: "482038574025",
  appId: "1:482038574025:web:81af480650bb36451c5618",
  measurementId: "G-GMPLV7YM19",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
export default app;
/*
const database = firebase.database();
export default database;
*/
