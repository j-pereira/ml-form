import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCeIJTKbmTyCHS4UTg54Sh8rqn3ugmHwhg",
    authDomain: "ml-form.firebaseapp.com",
    databaseURL: "https://ml-form.firebaseio.com",
    projectId: "ml-form",
    storageBucket: "ml-form.appspot.com",
    messagingSenderId: "383560232421"
  };

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();