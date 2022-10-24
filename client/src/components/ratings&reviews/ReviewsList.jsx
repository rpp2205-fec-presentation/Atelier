import React, { useState } from 'react';
import ReviewTile from './ReviewTile.jsx'
import axios from 'axios';
import Sort from './Sort.jsx';
import { ListButton, ReviewsListStyle } from './ReviewsStyles.jsx';
import NewReview from './newReview/NewReview.jsx';

const ReviewsList = ({
  reviews,
  productId,
  setReviews,
  metaData,
  sorted,
  setSorted,
  showMore,
  setShowMore,
  displayedReviews,
  setDisplayedReviews }) => {

  const [openModal, setOpenModal] = useState(false);

  const moreReviews = () => {
    let rvwsAmount = displayedReviews;
    rvwsAmount < reviews.length ? setDisplayedReviews(rvwsAmount + 2) : setShowMore(false);
  }



  return (
    <div>
      <Sort productId={productId} metaData={metaData} setReviews={setReviews} setSorted={setSorted} />
      <ReviewsListStyle>

        {reviews.slice(0, displayedReviews).map((review) => {
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
      </ReviewsListStyle>
      <div>
        {showMore ? <ListButton onClick={moreReviews}>More Reviews</ListButton> : <></>}
        <br/>
        <NewReview productId={productId} metaData={metaData} openModal={openModal} closeModal={() => setOpenModal(false)} />
      </div>

    </div>
  )
}





export default ReviewsList;
