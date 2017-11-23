import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBHq_omU_9gXQv6nkI1ZiSsRhiO7rO4T4s",
    authDomain: "fb-and-react.firebaseapp.com",
    databaseURL: "https://fb-and-react.firebaseio.com",
    projectId: "fb-and-react",
    storageBucket: "fb-and-react.appspot.com",
    messagingSenderId: "538848049640"
};

const fire  = firebase.initializeApp(config);
export default fire;