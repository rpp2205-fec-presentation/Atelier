import React from 'react';
import ReviewTile from './ReviewTile.jsx'
import axios from 'axios';
import Sort from './Sort.jsx';

const ReviewsList = ({ reviews, productId, setReviews, metaData, sorted, setSorted }) => {

  return (
    <div>
      <Sort productId={productId} metaData={metaData} setReviews={setReviews} setSorted={setSorted} />
      {reviews.map((review) => {
        return (
          <ReviewTile
            review={review}
            key={review.review_id}
            reviews={reviews}
            setReviews={setReviews}
            productId={productId}
            sorted={sorted} />
        )
      })}
    </div>
  )
}





export default ReviewsList;
