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

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => { setModalOpen((prev) => !prev); };

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
        {' '}
        <ListButton onClick={openModal}>Add A Review +</ListButton>
      </div>
      {modalOpen && <NewReview productId={productId} metaData={metaData} openModal={openModal} sorted={sorted} />}
    </div>
  )
}

{/* <div>
{showMore ? <ListButton onClick={moreReviews}>More Reviews</ListButton> : <></>}
<ListButton onClick={openModal}>Add A Review +</ListButton>
</div>
{modalOpen && <NewReview openModal={openModal} metaData={metaData} productId={productId} sorted={sorted} setReviews={setReviews} />}
</div> */}

export default ReviewsList;
