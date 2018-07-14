import React from 'react';

import itemRequests from '../../firebaseRequests/stuff';
import Items from '../Items/Items';
import MyPrecious from '../MyPrecious/MyPrecious';

import './ShowStuff.css';

class ShowStuff extends React.Component {
  state = {
    items: [],
    myItems: [],
  }

  componentDidMount () {
    itemRequests
      .getStuffRequest()
      .then(items => {
        this.setState({items: items});
      })
      .catch(err => {
        console.error('Error getting items, ', err);
      });
  }

  render () {
    const myStuff = this.state.myItems.map(myItem => {
      return (
        <MyPrecious
          details={myItem}
          key={myItem.id}
        />
      );
    });
    const itemComponents = this.state.items.map(item => {
      return (
        <Items
          details={item}
          key={item.id}
        />
      );
    });
    return (
      <div className='row'>
        <div className='notMyStuff col-xs-6'>
          <h3>This is stuff you DO have</h3>
          <div className='col-xs-12'>
            {myStuff}
          </div>
        </div>
        <div className='myStuff col-xs-6'>
          <h3>This is stuff you don't have (sadly)</h3>
          <div className='col-xs-12'>
            {itemComponents}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowStuff;
