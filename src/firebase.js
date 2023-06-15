import firebase from 'firebase/compat/app';
import "firebase/compat/database";

let config = {
    apiKey: "AIzaSyCMy1jijtJXv0yAfTqZTPN9NPLWfeMJB_s",
    authDomain: "invitation-kalananti.firebaseapp.com",
    databaseURL: "https://invitation-kalananti-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "invitation-kalananti",
    storageBucket: "invitation-kalananti.appspot.com",
    messagingSenderId: "398256473309",
    appId: "1:398256473309:web:22a8ae2ff0c0ffbf7e8734",
    measurementId: "G-8FVTD3S5E3"
};
firebase.initializeApp(config);
export default firebase.database();
