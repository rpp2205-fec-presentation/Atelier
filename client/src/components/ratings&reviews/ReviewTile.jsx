import React from 'react';
import stars from '../helpers/stars.js';
import axios from 'axios';

const ReviewTile = ({ review }) => {
  return (
    <div className="tile">
      <br></br>
      <div>{stars(review.rating)}</div>
      <h3> {review.summary} </h3>
      <h4> {review.body} </h4>
      <br></br>
  </div>
  )
}

export default ReviewTile;