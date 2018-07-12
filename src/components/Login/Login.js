import React from 'react';

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
    console.error(loginUser);
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
        <button
          type='submit'
          onClick={this.eventClickedLoginSubmit}
        >Log In</button>
      </div>
    );
  }
};

export default Login;
