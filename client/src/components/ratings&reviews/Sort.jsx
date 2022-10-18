import React from 'react';

const Sort = ({ productId, reviews, setReviews, setSorted }) => {

  return (
    <h3>
    Sorted by &nbsp;
    <select onChange={ (e) => setSorted(e.target.value)}>
    <option value="relevant">Relevance</option>
      <option value="helpful">Helpful</option>
      <option value="newest">Newest</option>
    </select>
  </h3>
  )
}

export default Sort;