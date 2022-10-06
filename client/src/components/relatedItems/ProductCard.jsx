import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';
import stars from '../helpers/stars.js';
import calculateAverageRating from '../helpers/calculateAverageRating.js';

const axios = require('axios');

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 71697,
      productCategory: '',
      productName: '',
      originalPrice: 0,
      starRating: 0,
      isOnSale: false,
      salesPrice: 0,
      imgUrl: ''
    }
  }

  componentDidMount() {
    var productCategory, productName, originalPrice, isOnSale, imgUrl;
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
          imgUrl = style.photos[0].url;
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
        starRating,
        imgUrl
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (<div id='product-card'>
      <div id='ri-image-block'>
        <img id='ri-image' src={this.state.imgUrl} alt='product image'></img>
      </div>
      <div id='ri-product-info'>
        <div id='ri-category'>{this.state.productCategory}</div>
        <div id='ri-product-name'>{this.state.productName}</div>
        <div id='ri-original-price'>${this.state.originalPrice}</div>
        <div>{stars(this.state.starRating)}</div>
      </div>
    </div>)
  }
}

export default ProductCard;