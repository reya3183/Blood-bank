import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';

export const initializeFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const newUser = res.user;
      newUser.error = '';
      newUser.success = true;
      alert('Successfully registered your name,email!');
      return newUser;
    })
    .catch((error) => {
      const newUser = {};
      newUser.error = error.message;
      newUser.success = false;
      alert(error.message);
      return newUser;
    });
};

export const signInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const newUser = res.user;
      newUser.error = '';
      newUser.success = true;
      return newUser;
    })
    .catch(function (error) {
      const newUser = {};
      newUser.error = error.message;
      newUser.success = false;
      return newUser;
    });
};

export const resetPassword = (email) => {
  var auth = firebase.auth();
  auth
    .sendPasswordResetEmail(email)
    .then(function () {
      // email sent
    })
    .catch(function (error) {
      console.log(error);
    });
};
