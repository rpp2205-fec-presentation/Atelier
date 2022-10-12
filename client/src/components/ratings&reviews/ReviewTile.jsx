import React from 'react';
import stars from '../helpers/stars.js';
import { Tile, Check, TextCent, ScaleText } from './ReviewsStyles.jsx';
import { format, parseISO } from 'date-fns';


const ReviewTile = ({ review }) => {
  let recommended;
  if (review.recommend) {
    recommended = <span><Check></Check><TextCent>I recommend this product</TextCent></span>
  } else {
    recommended = <span></span>
  };

  let reviewDate = format(parseISO(review.date), 'MMMM dd yyyy');

  return (
    <Tile>
      <br></br>
      <div>{stars(review.rating)}<ScaleText>{review.reviewer_name}, {reviewDate}</ScaleText>
      </div>
      <h3> {review.summary} </h3>
      <p> {review.body} </p>
      <h5>{recommended}</h5>
      <br></br>
      <span>Helpful? {review.helpfulness}</span>
    </Tile>
  )
}

export default ReviewTile;