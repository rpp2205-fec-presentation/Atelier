import React from 'react';
import stars from '../helpers/stars.js';
import axios from 'axios';

class ReviewTile extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>{stars(71698)}</div>
        <h3> Review Summary </h3>
        <h4> Review Body </h4>
      </div>
    )
  }
}

export default ReviewTile;