import React, { useState, useEffect } from 'react';
import RatingsBD from './RatingsBD.jsx';
import ReviewsList from './ReviewsList.jsx';
import axios from 'axios';
import calculateAverageRating from '../helpers/calculateAverageRating.js';
import { RateBD, RList, ReviewsContainer, DivCent, InnerDiv } from './ReviewsStyles.jsx';


const RatingsReviews = ({ product_id, reviews, setReviews, metaData, ratings, filter, setFilter, sorted, setSorted, clickTracking }) => {
  const [showMore, setShowMore] = useState(true);
  const [displayedReviews, setDisplayedReviews] = useState(2);

  useEffect(() => {
    setDisplayedReviews(2);
  }, [product_id])

  return (
      <DivCent onClick={e => clickTracking(e, 'Ratings and Reviews')}>
        <h2>Ratings & Reviews</h2>
          <ReviewsContainer>
            <RateBD>
                <RatingsBD
                  productId={product_id}
                  metaData={metaData}
                  ratings={ratings}
                  filter={filter}
                  setFilter={setFilter}
                  reviews={reviews}
                  setReviews={setReviews} />
              </RateBD>
              <RList>
                <ReviewsList
                  reviews={reviews}
                  productId={product_id}
                  setReviews={setReviews}
                  metaData={metaData}
                  sorted={sorted}
                  setSorted={setSorted}
                  showMore={showMore}
                  setShowMore={setShowMore}
                  displayedReviews={displayedReviews}
                  setDisplayedReviews={setDisplayedReviews}/>
              </RList>
          </ReviewsContainer>
      </DivCent>
  )
}

export default RatingsReviews;