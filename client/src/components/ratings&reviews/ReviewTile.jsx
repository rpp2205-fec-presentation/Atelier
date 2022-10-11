import React from 'react';
import stars from '../helpers/stars.js';
import { Tile, Check, TextR } from './ReviewsStyles.jsx';

const ReviewTile = ({ review }) => {
  let recommended;
  if (review.recommend) {
    recommended = <Check></Check>
  } else {
    recommended = <span></span>
  }

  return (
    <Tile>
      <br></br>
      <div>Rating:{stars(review.rating)}<TextR>{review.reviewer_name}, {review.date}</TextR>
      </div>
      <h3> {review.summary} </h3>
      <h4> {review.body} </h4>
      <h5>{recommended}</h5>
      <br></br>
    </Tile>
  )
}

export default ReviewTile;