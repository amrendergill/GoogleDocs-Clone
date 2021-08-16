import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBq7KpjWaCm6jru4FuZL_kYyoM9m8bPlB0",
  authDomain: "docs-d3cdc.firebaseapp.com",
  projectId: "docs-d3cdc",
  storageBucket: "docs-d3cdc.appspot.com",
  messagingSenderId: "634958759141",
  appId: "1:634958759141:web:f02dffdb2381877da4800c",
};
const app= !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db=app.firestore();
export {db};