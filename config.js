import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
 apiKey: "AIzaSyA9GYpAiuXFUyDA3A67adW--dF8ZsN8PDA",
    authDomain: "p-67-1.firebaseapp.com",
    projectId: "p-67-1",
    storageBucket: "p-67-1.appspot.com",
    messagingSenderId: "271984513140",
    appId: "1:271984513140:web:1272d4f5e9e4aa28e58121"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();