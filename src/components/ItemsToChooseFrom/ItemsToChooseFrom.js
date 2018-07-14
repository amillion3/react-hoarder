import React from 'react';

import Items from '../Items/Items';
import fbItems from '../../firebaseRequests/fbItems';

import './ItemsToChooseFrom.css';

class ItemsToChooseFrom extends React.Component {
  state = {
    allItems: [],
  }
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
    const newItem = {...this.state.allItems};
    newItem[key] = newItem[key] + 1 || 1;
    this.setState({myItems: newItem});

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
