import React from 'react';
import stars from '../Stars.jsx';
import axios from 'axios';

class ReviewTile extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="stars">{stars(3.75)}</div>
        <h3> Review Summary </h3>
        <h4> Review Body </h4>
      </div>
    )
  }
}

export default ReviewTile;