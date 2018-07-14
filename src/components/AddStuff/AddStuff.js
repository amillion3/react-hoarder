import React from 'react';

import itemsRequests from '../Items/Items';
import toAddRequests from '../../firebaseRequests/myHoard';
import authRequests from '../../firebaseRequests/auth';

import './AddStuff.css';

class AddStuff extends React.Component {
  state = {
    allItems: [],
    toAdd: {},
  };

  addToHoard = key => {
    const newToAdd = {...this.state.toAdd};
    newToAdd[key] = newToAdd[key] + 1 || 1;
    this.setState({toAdd: newToAdd});
  }

  componentDidMount () {
    itemsRequests
      .getRequest()
      .then((items) => {
        this.setState({allItems: items});
      })
      .catch((err) => {
        console.error('error with items get request', err);
      });
  }

  saveToHoard = () => {
    const newItems = {allItems: {...this.state.toAdd}};
    newItems.uid = authRequests.getUid();
    toAddRequests
      .postRequest(newItems)
      .then(() => {
        this.props.history.push('./');
      })
      .catch(err => {
        console.error(err);
      });
  }

  render () {
    return (

    );
  }
};

export default AddStuff;
