const axios = require('axios');

// A function that returns a promise which will resolve to the average rating
const calculateAverageRating = (productId) => {
  var starRating = 0;
  var numRatings = 0;

  return axios({
    method: 'get',
    url: `/reviews/meta`,
    params: {product_id: productId}
  })
  .then(result => {
    var ratings = result.data.ratings;



    for(var i = 1; i <= 5; i++) {
      starRating += i * parseInt(ratings[i], 10);
      numRatings += parseInt(ratings[i], 10)
    }

    if (numRatings === 0) {
      return 0;
    } else {
      starRating = starRating / numRatings;
      return starRating;
    }
  })
  .catch(err => {
    console.log(err);
    return starRating;

  })

  return something;
}

export default calculateAverageRating;