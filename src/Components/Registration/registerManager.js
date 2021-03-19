import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';

export const initializeFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const handleSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then((res) => {
      const signedOutUser = {
        signedIn: false,
        name: '',
        email: '',
      };
      return signedOutUser;
    })
    .catch((error) => {
      // An error happened.
    });
};

export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const newUser = res.user;
      newUser.error = '';
      newUser.success = true;
      // updateUserName(name);
      return newUser;
    })
    .catch((error) => {
      const newUser = {};
      newUser.error = error.message;
      newUser.success = false;
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

const updateUserName = (name) => {
  const user = firebase.auth.currentUser;
  user
    .updateProfile({
      displayName: name,
    })
    .then(function () {
      console.log('user name updated successfully');
    })
    .catch(function (error) {
      console.log(error);
    });
};
