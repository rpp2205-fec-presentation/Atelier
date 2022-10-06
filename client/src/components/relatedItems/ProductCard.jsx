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
        starRating,
        numRatings
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (<div className='product-card'>
      <h3>Product Card</h3>
      <div>Product Information
        <ul>
          <li>{this.state.productCategory}</li>
          <li>{this.state.productName}</li>
          <li>{this.state.starRating}</li>
          <li>{this.state.numRatings}</li>
          <li>{this.state.originalPrice}</li>
          <li>{this.state.isOnSale}</li>
          <li>{this.state.salesPrice}</li>
        </ul>
      </div>
    </div>)
  }
}

export default ProductCard;