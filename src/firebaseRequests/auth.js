import firebase from 'firebase';

const registerNewUser = registerNewUser => {
  return firebase.auth().createUserWithEmailAndPassword(registerNewUser.userEmail, registerNewUser.userPassword);
};

const loginExistingUser = registerNewUser => {
  return firebase.auth().signInWithEmailAndPassword(registerNewUser.loginEmail, registerNewUser.loginPassword);
};

const logoutUser = () => {
  return firebase.auth().signOut();
};

const getUid = () => {
  return firebase.auth().currentUser.uid;
};

export default {registerNewUser, loginExistingUser, logoutUser, getUid};
