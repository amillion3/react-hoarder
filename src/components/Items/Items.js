import React from 'react';

import './Items.css';

class Items extends React.Component {
  addClickEvent = () => {
    this.props.gimmeItem(this.props.details.id);
  }
  render () {
    const {details} = this.props;
    return (
      <div className="col-xs-3 panel panel-primary Items">
        <div className="panel-body">
          <img src={details.itemImage} alt='An item.' className='img-responsive' />
        </div>
        <div className="panel-footer">
          <h4>{details.itemName}</h4>
          <p className='small-text'>{details.itemDescription}</p>
          <div className='col-xs-12'>
            <button
              className='btn btn-warning'
              onClick={this.addClickEvent}
            >
              GIMME
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Items;
