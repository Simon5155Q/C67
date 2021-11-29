import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCnuu9ifjNL8gY4gsnkHNMjcRzEAtH2PKE",
    authDomain: "ball-8db0a.firebaseapp.com",
    databaseURL: "https://ball-8db0a-default-rtdb.firebaseio.com",
    projectId: "ball-8db0a",
    storageBucket: "ball-8db0a.appspot.com",
    messagingSenderId: "243330796590",
    appId: "1:243330796590:web:ada74aca47ea8bbfcc63bf"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();