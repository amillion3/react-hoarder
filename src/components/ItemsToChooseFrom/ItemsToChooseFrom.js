import React from 'react';

import authRequests from '../../firebaseRequests/auth';
import Items from '../Items/Items';
import fbItems from '../../firebaseRequests/fbItems';
import fbMyThings from '../../firebaseRequests/fbMyThings';

import './ItemsToChooseFrom.css';

class ItemsToChooseFrom extends React.Component {
  state = {
    allItems: [],
  }
  saveItem = () => {
    const newItems = {allItems: {...this.state.allItems}};
    console.log('saveItem() newItems:', newItems);
    newItems.uid = authRequests.getUid();
    fbMyThings
      .addToMyThings(newItems)
      .then(() => {
        this.props.history.push('./thegoods');
      })
      .catch(err => {
        console.error(err);
      });
  }

  gimmeItem = key => {
    const newItem = {...this.state.allItems};
    newItem[key] = newItem[key] + 1 || 1;
    console.log('test, one object', test);
    this.setState({allItems: newItem});

    this.saveItem();
  }
  // sets state with all the items
  componentDidMount () {
    fbItems
      .getAllItems()
      .then(allItems => {
        this.setState({allItems});
      })
      .catch(err => {
        console.error('componentDidMount.fbItems.getAllItems()', err);
      });
  }

  render () {
    console.log('this and stuffs', this);
    const itemComponents = this.state.allItems.map(item => {
      return (
        <Items
          key={item.id}
          details={item}
          gimmeItem={this.gimmeItem}
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

export default ItemsToChooseFrom;
