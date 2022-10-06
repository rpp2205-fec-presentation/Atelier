import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';
const axios = require('axios');

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 71698,
      productCategory: '',
      productName: '',
      originalPrice: 0,
      starRating: 0,
      numRatings: 0,
      isOnSale: false,
      salesPrice: 0
    }
  }

  componentDidMount() {
    var productCategory, productName, originalPrice, isOnSale, salesPrice;
    var starRating = 0;
    var numRatings = 0;

    axios({
      method: 'get',
      url: `/products/${this.state.productId}`,
      params: {product_id: this.state.productId}
    })
    .then(result => {
      productCategory = result.data.category;
      productName = result.data.name;
      originalPrice = result.data.default_price;

      return axios({
        method: 'get',
        url: `/reviews/meta`,
        params: {product_id: this.state.productId}
      })
    })
    .then(result => {
      var ratings = result.data.ratings;

      for(var i = 1; i <= 5; i++) {
        starRating += i * parseInt(ratings[i], 10);
        numRatings += parseInt(ratings[i], 10)
      }

      starRating = starRating / numRatings;

    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (<div className='product-card'>
      <h3>Product Card</h3>
    </div>)
  }
}

export default ProductCard;