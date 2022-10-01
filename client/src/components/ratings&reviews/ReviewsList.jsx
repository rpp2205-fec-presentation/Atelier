import React from 'react';
import ReviewTile from './ReviewTile.jsx'


class ReviewsList extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>An amount of reviews to be sorted</h3>
        <ReviewTile />
      </div>
    )
  }
}


export default ReviewsList;
