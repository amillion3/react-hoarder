import React from 'react';

import ItemsToChooseFrom from '../ItemsToChooseFrom/ItemsToChooseFrom';
// import ThingsIOwn from '../ThingsIOwn/ThingsIOwn';

import './TheGoods.css';

class TheGoods extends React.Component {
  state = {
    theItems: [],
  };

  render () {
    return (
      <div className='TheGoods'>
        <ItemsToChooseFrom />
        {/* <ThingsIOwn /> */}
      </div>
    );
  }
};

export default TheGoods;
