import React, { Component } from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import firebase from 'firebase';

import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Navbar from '../components/Navbar/Navbar';
import ShowStuff from '../components/ShowStuff/ShowStuff';
import Home from '../components/Home/Home';

import fbConnection from '../firebaseRequests/connection';

import './App.css';

fbConnection();

// helper function                   ...rest = any other components
const PrivateRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/thegoods', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

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
      <BrowserRouter>
        <div className="App">
          <Navbar
            authed={this.state.authed}
            userWantsOut={this.userWantsOut}
          />
          <div className='container col-xs-12'>
            <Switch>
              <Route path='/' exact component={Home}/>
              <PublicRoute
                path='/register'
                authed={this.state.authed}
                component={Register} />
              <PublicRoute
                path='/login'
                authed={this.state.authed}
                component={Login} />
              <PrivateRoute
                path='/thegoods'
                authed={this.state.authed}
                component={ShowStuff} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
