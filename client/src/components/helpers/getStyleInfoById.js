const axios = require('axios');

const getStyleInfoById = (id) => {
  return axios({
    method: 'get',
    url: `/products/${id}/styles`,
    params: {product_id: id}
  })
  .then(({ data }) => {
    console.log('getStyleInfoById>>', data.results)
    return data.results;
  })
}

export default getStyleInfoById;

