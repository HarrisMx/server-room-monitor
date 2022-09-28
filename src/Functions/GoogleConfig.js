import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCU1TDg0v6aLmg_RaLh9NkVEnRNkz3FrGY",
  authDomain: "enviromental-factors.firebaseapp.com",
  databaseURL: "https://enviromental-factors-default-rtdb.firebaseio.com",
  projectId: "enviromental-factors",
  storageBucket: "enviromental-factors.appspot.com",
  messagingSenderId: "44242591395",
  appId: "1:44242591395:web:7a14fef8b8c13b9aada916"
};

const FirebaseApp = initializeApp(firebaseConfig);

export default FirebaseApp;