import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAetEhvHncUcifO8DgD8RvKZDfKFN7Mg0I",
    authDomain: "autenticaruser-cb787.firebaseapp.com",
    databaseURL: "https://autenticaruser-cb787-default-rtdb.firebaseio.com",
    projectId: "autenticaruser-cb787",
    storageBucket: "autenticaruser-cb787.appspot.com",
    messagingSenderId: "3385225024",
    appId: "1:3385225024:web:610829e1dbc632e7a3d4a5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth}
