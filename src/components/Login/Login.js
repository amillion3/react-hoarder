import React from 'react';
import { Link } from 'react-router-dom';

import authRequests from '../../firebaseRequests/auth';

import './Login.css';

class Login extends React.Component {
  state = {
    loginUser: {
      loginEmail: '',
      loginPassword: '',
    },
  };

  eventClickedLoginSubmit = e => {
    const {loginUser} = this.state;
    e.preventDefault();
    authRequests
      .loginExistingUser(loginUser)
      .then(() => {

      })
      .catch(err => {
        console.error('Error logging in', err);
      });
  }

  emailChange = e => {
    const tempEmail = {...this.state.loginUser};
    tempEmail.loginEmail = e.target.value;
    this.setState({loginUser: tempEmail});
  }

  passwordChange = e => {
    const tempPassword = {...this.state.loginUser};
    tempPassword.loginPassword = e.target.value;
    this.setState({loginUser: tempPassword});
  }

  render () {
    const {loginUser} = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor='loginEmail'>Email</label>
          <input
            type='email'
            id='loginEmail'
            placeholder=''
            onChange={this.emailChange}
            value={loginUser.loginEmail}
          />
          <label htmlFor='loginPassword'>Password</label>
          <input
            type='password'
            id='loginPassword'
            placeholder=''
            onChange={this.passwordChange}
            value={loginUser.loginPassword}
          />
        </form>
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <Link to="/register">Need to Register?</Link>
          </div>
        </div>
        <button
          type='submit'
          onClick={this.eventClickedLoginSubmit}
        >Log In</button>
      </div>
    );
  }
};

export default Login;
