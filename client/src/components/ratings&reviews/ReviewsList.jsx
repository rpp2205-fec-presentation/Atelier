import React from 'react';
import ReviewTile from './ReviewTile.jsx'
import axios from 'axios';
import Sort from './Sort.jsx';

const ReviewsList = ({ reviews, productId, setReviews, metaData }) => {

  return (
    <div>
      <Sort productId={productId} metaData={metaData} setReviews={setReviews} />
      {reviews.map((review) => {
        return (
          <ReviewTile review={review} key={review.review_id} reviews={reviews} productId={productId}/>
        )
      })}
    </div>
  )
}





export default ReviewsList;
