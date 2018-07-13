import React, { Component } from 'react';
import firebase from 'firebase';

import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Navbar from '../components/Navbar/Navbar';
import ShowStuff from '../components/ShowStuff/ShowStuff';

import fbConnection from '../firebaseRequests/connection';

import './App.css';

fbConnection();

class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({authed: true});
      } else {
        this.setState({authed: false});
      }
    });
  }

  componentWillUnmount () {
    this.removeListener();
  }

  userWantsOut = () => {
    this.setState({authed: false});
  }

  render () {
    return (
      <div className="App">
        <Navbar
          authed={this.state.authed}
          userWantsOut={this.userWantsOut}
        />
        <Register />
        <Login />
        <ShowStuff />
      </div>
    );
  }
}

export default App;
