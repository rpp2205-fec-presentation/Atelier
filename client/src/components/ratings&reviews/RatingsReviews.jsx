import React from 'react';
import RatingsBD from './RatingsBD.jsx';
import ReviewsList from './ReviewsList.jsx';
import axios from 'axios';

class RatingsReviews extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }

    // this.getReviews = this.getReviews.bind(this);
  }

  // componentDidMount() {
  //   this.getReviews();
  // }

  // getReviews() {
  //   axios({
  //     method: 'get',
  //     url: '/reviews',
  //     params: {product_id: 2, count: 10},
  //   })
  //   .then(result => {
  //     console.log(result);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }

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