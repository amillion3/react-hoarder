import React, { Component } from 'react';

import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Navbar from '../components/Navbar/Navbar';

import fbConnection from '../firebaseRequests/connection';

import './App.css';

fbConnection();

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <Register />
        <Login />
      </div>
    );
  }
}

export default App;
