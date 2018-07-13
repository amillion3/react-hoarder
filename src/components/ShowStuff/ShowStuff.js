import React from 'react';

import Items from '../Items/Items';

import './ShowStuff.css';

class ShowStuff extends React.Component {
  render () {
    return (
      <div className='row'>
        <div className='notMyStuff col-xs-6'>
          <h3>This is stuff you don't have</h3>
        </div>
        <div className='myStuff col-xs-6'>
          <h3>This is stuff you DO have</h3>
        </div>
      </div>
    );
  }
}

export default ShowStuff;
