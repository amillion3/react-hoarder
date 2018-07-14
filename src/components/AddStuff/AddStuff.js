import React from 'react';

import Items from '../Items/Items';

import itemsRequests from '../../firebaseRequests/stuff';
import myStuffRequests from '../../firebaseRequests/myStuffRequests';
import authRequests from '../../firebaseRequests/auth';

import './AddStuff.css';

class AddStuff extends React.Component {
  state = {
    myItems: [],
    toAdd: {},
  };

  saveItem = () => {
    const newItems = {myItems: {...this.state.toAdd}};
    console.log(newItems);
    newItems.uid = authRequests.getUid();
    myStuffRequests
      .postRequest(newItems)
      .then(() => {
        this.props.history.push('./');
      })
      .catch(err => {
        console.error(err);
      });
  }

  gimmeItem = key => {
    console.log('holy shit it works', this);
    const newItem = {...this.state.myItems};
    newItem[key] = newItem[key] + 1 || 1;
    this.setState({myItems: newItem});

    this.saveItem();
  }

  componentDidMount () {
    itemsRequests
      .getStuffRequest()
      .then((items) => {
        this.setState({myItems: items});
      })
      .catch((err) => {
        console.error('error with items get request', err);
      });
  }

  render () {
    const itemComponents = this.state.myItems.map(item => {
      return (
        <Items
          key={item.id}
          details={item}
          gimmeItem={this.gimmeItem}
        />
      );
    });
    return (
      <ul>
        {itemComponents}
      </ul>
    );
  }
};

export default AddStuff;
