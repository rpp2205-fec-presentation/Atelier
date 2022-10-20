import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import calculateAverageRating from '../helpers/calculateAverageRating.js';
import stars from '../helpers/stars.js';
import { PrctScaleChar, RatingsAvgByStar } from './PrctScaleChar.jsx';
// import RatingsAvgByStar from './RatingsAvgByStar.jsx';
import { ScaleText, RateVal, BDContainer, RateRight, AvgRatingStyle } from './ReviewsStyles.jsx';
import { reviewsFilter } from '../helpers/reviewsHelpers.js';

const RatingsBD = ({ productId, metaData, ratings, filter, setFilter, reviews, setReviews }) => {

  let theRatings = ratings || { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0};

  let avgRating = (ratingObj) => {
    let count = 0;
    let total = 0;

    for(let rating in ratingObj) {
      count += Number(ratingObj[rating]);
      total += rating * ratingObj[rating];
    }
    return (count === 0) ? 5 : (total / count).toFixed(1);
  };

  let char = metaData.characteristics;
  if (char !== undefined) {
    var size = char.Size || '';
    var width = char.Width || '';
    var comfort = char.Comfort || '';
    var quality = char.Quality || '';
    var length = char.Length || '';
    var fit = char.Fit || '';
  }

  let charBreakdown = (
    char !== undefined ?
      <>
        {!!size && (
          <div>
            <span><b>Size </b></span> <br />
            <PrctScaleChar value={Number(size.value).toFixed(1)} />
            <span>a size too small</span><ScaleText>a size too big</ScaleText> <br/>
          </div>
        )}
          <br></br>
        {!!width && (
          <div>
            <span><b>Width </b></span> <br />
            <PrctScaleChar value={Number(width.value).toFixed(1)} />
            <span>too narrow</span><ScaleText>too wide</ScaleText> <br/>
          </div>
        )}
        <br></br>
        {!!comfort && (
          <div>
            <span><b>Comfort </b></span> <br />
            <PrctScaleChar value={Number(comfort.value).toFixed(1)} />
            <span>uncomfortable</span><ScaleText>perfect</ScaleText> <br/>
          </div>
        )}
        <br></br>
        {!!quality && (
          <div>
            <span><b>Quality </b></span> <br />
            <PrctScaleChar value={Number(quality.value).toFixed(1)} />
            <span>poor</span><ScaleText>perfect</ScaleText> <br/>
          </div>
        )}
        <br></br>
        {!!length && (
          <div>
            <span><b>Length </b></span> <br />
            <PrctScaleChar value={Number(length.value).toFixed(1)} />
            <span>runs short</span><ScaleText>runs long</ScaleText> <br/>
          </div>
        )}
        <br></br>
        {!!fit && (
          <div>
            <span><b>Fit </b></span> <br />
            <PrctScaleChar value={Number(fit.value).toFixed(1)} />
            <span>runs tight</span><ScaleText>runs big</ScaleText> <br/>
          </div>)}
      </> :
      <></>
  );

  const handleFilterClick = (e) => {
    e.preventDefault();
    let filterClicked = parseInt(e.target.id);
    if (filter === filterClicked) {
      filterClicked = 0;
      }
    setFilter(filterClicked);
  };

  const percentRecommend = (metaData) => {
    let percent = 0;
    let total = parseInt(metaData.recommended.true) + parseInt(metaData.recommended.false);
    if (total > 0) {
      percent = Math.round((metaData.recommended.true / total) * 100);
    }
    return percent;
  }

  return (
    <BDContainer>
      <AvgRatingStyle>{avgRating(ratings)} {stars(avgRating(ratings))}</AvgRatingStyle>
      <p>{percentRecommend(metaData)}% of reviews recommend this product</p>
      <div>{Object.keys(theRatings).slice(0).reverse().map(rating => {
            return <RateVal key={rating}><span id={rating} onClick={handleFilterClick}>{rating} Stars:</span>
            <RateRight><RatingsAvgByStar value={theRatings[rating]} /></RateRight>
            </RateVal>;
          })}
      </div>
      {charBreakdown}
    </BDContainer>
  )

}

export default RatingsBD;