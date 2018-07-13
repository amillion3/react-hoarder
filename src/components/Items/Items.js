import React from 'react';

class Items extends React.Component {
  render () {
    const {details} = this.props;
    return (
      <li className='Items'>
        <img src={details.itemImage} alt='An item.'/>
      </li>
    );
  }
};

export default Items;
