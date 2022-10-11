import React from 'react';
import stars from '../helpers/stars.js';
import { Tile, Check, TextCent, ScaleText } from './ReviewsStyles.jsx';

const ReviewTile = ({ review }) => {
  let recommended;
  if (review.recommend) {
    recommended = <span><Check></Check><TextCent>I recommend this product</TextCent></span>
  } else {
    recommended = <span></span>
  }

  return (
    <Tile>
      <br></br>
      <div>Rating:{stars(review.rating)}<ScaleText>{review.reviewer_name}, {review.date}</ScaleText>
      </div>
      <h3> {review.summary} </h3>
      <h4> {review.body} </h4>
      <h5>{recommended}</h5>
      <br></br>
      <span>Helpful? {review.helpfulness}</span>
    </Tile>
  )
}

export default ReviewTile;