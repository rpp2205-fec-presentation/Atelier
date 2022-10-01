import React from 'react';
import RatingsBD from './RatingsBD.jsx';
import ReviewsList from './ReviewsList.jsx';

class RatingsReviews extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Ratings & Reviews</h2>
        <RatingsBD />
        <br></br>
        <ReviewsList />
      </div>
    )
  }
}

export default RatingsReviews;