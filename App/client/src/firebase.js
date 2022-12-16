// Import the functions you need from the SDKs you need
// eslint-disable-next-line no-unused-vars
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {    apiKey: 'AIzaSyC9aicBgyU6_rXLxf9xAmFzhOVxfNYeBO8',
    authDomain: 'brave-monitor-333406.firebaseapp.com',
    projectId: 'brave-monitor-333406',
    storageBucket: 'brave-monitor-333406.appspot.com',
    messagingSenderId: '209728307085',
    appId: '1:209728307085:web:473ac964868ff6ab9c47c4',};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
