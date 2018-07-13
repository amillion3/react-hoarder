import React from 'react';
import authRequests from '../../firebaseRequests/auth';

import './Navbar.css';

class Navbar extends React.Component {
  render () {
    const {authed, userWantsOut} = this.props;

    const logoutClickEvent = () => {
      authRequests.logoutUser();
      userWantsOut();
    };

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <p className="navbar-brand" href="#">React Hoarder</p>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            {
              authed ? (
                <ul className='nav navbar-nav navbar-right'>
                  <button
                    className='btn btn-primary'
                    onClick={logoutClickEvent}
                  >Logout</button>
                </ul>
              ) : (
                <ul className='nav navbar-nav navbar-right'>
                  <li>
                    <p>You need to log in</p>
                  </li>
                </ul>
              )
            }
            <ul className="nav navbar-nav navbar-right">
              <button
                className='btn btn-primary'
                onClick={logoutClickEvent}
              >Logout</button>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
