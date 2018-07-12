import React from 'react';

import authRequests from '../../firebaseRequests/auth';

import './Register.css';

class Register extends React.Component {
  state = {
    registerNewUser: {
      userEmail: '',
      userPassword: '',
    },
  };

  eventClickedRegisterSubmit = e => {
    const {registerNewUser} = this.state;
    e.preventDefault();
    authRequests
      .registerNewUser(registerNewUser)
      .then()
      .catch(err => {
        console.error('Error registering', err);
      });

  };

  emailChange = e => {
    const tempEmail = {...this.state.registerNewUser};
    tempEmail.userEmail = e.target.value;
    this.setState({registerNewUser: tempEmail});
  }

  passwordChange = e => {
    const tempPassword = {...this.state.registerNewUser};
    tempPassword.userPassword = e.target.value;
    this.setState({registerNewUser: tempPassword});
  }

  render () {
    const {registerNewUser} = this.state;
    return (
      <div className=''>
        <h2 className='text-center'>Register</h2>
        <form>
          <label htmlFor='userEmail'>Email</label>
          <input
            type='email'
            id='userEmail'
            placeholder='john.q.smith@gmail.com'
            onChange={this.emailChange}
            value={registerNewUser.registerEmail}
          />
          <label htmlFor='userPassword'>Password</label>
          <input
            type='password'
            id='userPassword'
            placeholder='123456'
            onChange={this.passwordChange}
            value={registerNewUser.registerPassword}
          />
        </form>
        <button
          type='submit'
          onClick={this.eventClickedRegisterSubmit}
        >
          Register Now
        </button>
      </div>
    );
  }
};

export default Register;
