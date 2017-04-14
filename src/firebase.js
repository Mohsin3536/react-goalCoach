import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAnB_7KWWeJFJv5tK8ZMyImEYSXLbovOD8",
    authDomain: "goalcoach-99da8.firebaseapp.com",
    databaseURL: "https://goalcoach-99da8.firebaseio.com",
    projectId: "goalcoach-99da8",
    storageBucket: "goalcoach-99da8.appspot.com",
    messagingSenderId: "592105036867"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
  export const completeGoalRef = firebase.database().ref('completeGolas');
