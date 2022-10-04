import React from 'react';
import stars from '../Stars.jsx';

class ReviewTile extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>{stars(4.5)}</span>
        <h3> Review Summary </h3>
        <h4> Review Body </h4>
      </div>
    )
  }
}

export default ReviewTile;