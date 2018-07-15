import React from 'react';

import myStuffRequest from '../../firebaseRequests/myStuffRequest';
import authRequests from '../../firebaseRequests/auth';

class MyStuff extends React.Component {
  state = {
    myItems: [],
  }

  componentDidMount () {
    myStuffRequest
      .postRequest(authRequests.getUid())
      .then(stuffz => {
        console.log('state', this.state);
        this.setState({myItems: stuffz});
      })
      .catch(err => console.error('Error with myStuff request', err));
  }
};

export default MyStuff;
