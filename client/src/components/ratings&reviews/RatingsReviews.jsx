import React from 'react';
import RatingsBD from './RatingsBD.jsx';
import ReviewsList from './ReviewsList.jsx';
import axios from 'axios';
import calculateAverageRating from '../helpers/calculateAverageRating.js';
import { RateBD } from './ReviewsStyles.jsx';

class RatingsReviews extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      product_id: '',
      rating: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
      },
      metaData: '',
      reviews: []
    }

    this.getReviews = this.getReviews.bind(this);
    this.getMetaData = this.getMetaData.bind(this);
  }

  componentDidMount() {
    this.getReviews();
    this.getMetaData();
  }

  getReviews() {
    axios({
      method: 'get',
      url: '/reviews/',
      params: {product_id: 71697, count: 100},
    })
    .then(reviews => {
      this.setState({
        reviews: reviews.data.results
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

    getMetaData() {
    axios({
      method: 'get',
      url: '/reviews/meta',
      params: {product_id: 71697},
    })
    .then(meta => {
      this.setState({
        metaData: meta.data,
        ratings: meta.data.ratings
      })

    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <h2>Ratings & Reviews</h2>

        <RatingsBD product_id={this.state.product_id} metaData={this.state.metaData} ratings={this.state.ratings} />

        <br></br>
        <ReviewsList reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default RatingsReviews;