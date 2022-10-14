import React from 'react';
import RatingsBD from './RatingsBD.jsx';
import ReviewsList from './ReviewsList.jsx';
import axios from 'axios';
import calculateAverageRating from '../helpers/calculateAverageRating.js';
import { RateBD, RList, ReviewsContainer, DivCent, InnerDiv } from './ReviewsStyles.jsx';


const RatingsReviews = ({ product_id, reviews, setReviews, metaData, ratings, filter, setFilter, sorted, setSorted }) => {

  return (
      <DivCent>
        <h2>Ratings & Reviews</h2>
        <InnerDiv>
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
                  setSorted={setSorted} />
              </RList>
          </ReviewsContainer>
        </InnerDiv>
      </DivCent>
  )
}

export default RatingsReviews;