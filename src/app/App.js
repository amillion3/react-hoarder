import React, { Component } from 'react';

import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Register />
        <Login />
      </div>
    );
  }
}

export default App;
