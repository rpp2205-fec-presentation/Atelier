import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';
import stars from '../helpers/stars.js';
import calculateAverageRating from '../helpers/calculateAverageRating.js';

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
    var productCategory, productName, originalPrice, isOnSale;
    var salesPrice = 0;
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

      return calculateAverageRating(this.state.productId)
    })
    .then(result => {
      starRating = result;

      return axios({
        method: 'get',
        url: `/products/${this.state.productId}/styles`,
        params: {product_id: this.state.productId}
      })
    })
    .then(result => {
      var haveFoundDefault = false;
      var styles = result.data.results;

      for (var style of styles) {
        if (style['default?']) {
          originalPrice = style.original_price;
          if (style.sale_price !== null) {
            isOnSale = true;
            salesPrice = style.sale_price;
            break;
          }
        }
      }

      this.setState({
        productCategory,
        productName,
        originalPrice,
        isOnSale,
        salesPrice,
        starRating
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (<div className='product-card'>
      <h3>Product Information</h3>
      <div>
        <ul>
          <li>{this.state.productCategory}</li>
          <li>{this.state.productName}</li>
          <li>{this.state.originalPrice}</li>
          <li>{this.state.isOnSale}</li>
          <li>{this.state.salesPrice}</li>
        </ul>
        RATING: {stars(this.state.starRating)}
      </div>
    </div>)
  }
}

export default ProductCard;