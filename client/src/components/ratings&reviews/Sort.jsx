import React from 'react';
import { reviewsCall } from '../helpers/reviewsCall.js';

const Sort = ({ productId, reviews, setReviews }) => {
  const sortChange = (e, productId) => {
    reviewsCall(productId, e.target.value)
      .then(results => setReviews(results.data.results));
  }




  return (
    <h3>
    Sorted by &nbsp;
    <select onChange={ (e) => sortChange(e, productId)}>
      <option value="helpful">Helpful</option>
      <option value="newest">Newest</option>
      <option value="relevant">Relevance</option>
    </select>
  </h3>
  )

}

export default Sort;