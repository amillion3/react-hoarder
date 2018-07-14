import React from 'react';

import Items from '../Items/Items';

import itemsRequests from '../../firebaseRequests/stuff';
import toAddRequests from '../../firebaseRequests/myHoard';
import authRequests from '../../firebaseRequests/auth';

import './AddStuff.css';

class AddStuff extends React.Component {
  state = {
    allItems: [],
    toAdd: {},
  };

  saveToHoard = () => {
    const newItems = {allItems: {...this.state.toAdd}};
    newItems.uid = authRequests.getUid();
    toAddRequests
      .postToMyHoard(newItems)
      .then(() => {
        this.props.history.push('./');
      })
      .catch(err => {
        console.error(err);
      });
  }

  addToHoard = key => {
    const newToAdd = {...this.state.toAdd};
    newToAdd[key] = newToAdd[key] + 1 || 1;
    this.setState({toAdd: newToAdd});
    saveToHoard();
  }

  componentDidMount () {
    itemsRequests
      .getStuffRequest()
      .then((items) => {
        this.setState({allItems: items});
      })
      .catch((err) => {
        console.error('error with items get request', err);
      });
  }

  render () {
    const itemComponents = this.state.items.map(item => {
      return (
        <Items
          details={item}
          key={item.id}
          addToHoard={this.addToHoard}
        />
      );
    });
    return (
      <div>
        {itemComponents}
      </div>
    );
  }
};

export default AddStuff;
