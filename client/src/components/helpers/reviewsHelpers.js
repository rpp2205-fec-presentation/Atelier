import axios from 'axios';

export const reviewsCall = (id, sort = 'relevant') => {
  return axios.get('/reviews', {
    params: {
      product_id: id,
      count: 500,
      sort: sort
    }
  })
};

export const reviewsFilter = (reviews, filter = 0) => {
  if (filter === 0) {
    return reviews;
  }

  let returnFilter = reviews.filter(review => review.rating === filter);

  return returnFilter;
};