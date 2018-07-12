import firebase from 'firebase';

const registerNewUser = registerNewUser => {
  return firebase.auth().createUserWithEmailAndPassword(registerNewUser.userEmail, registerNewUser.userPassword);
};

const loginExistingUser = loginUser => {
  return firebase.auth().createUserWithEmailAndPassword(loginUser.loginEmail, loginUser.loginPassword);
};

const logoutUser = () => {
  return firebase.auth().signOut();
};

export default {registerNewUser, loginExistingUser, logoutUser};
