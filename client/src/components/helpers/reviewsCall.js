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