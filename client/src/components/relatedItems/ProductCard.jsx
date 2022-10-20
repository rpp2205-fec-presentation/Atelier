import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';
import stars from '../helpers/stars.js';
import calculateAverageRating from '../helpers/calculateAverageRating.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faStar } from '@fortawesome/free-solid-svg-icons'


const axios = require('axios');

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productCategory: '',
      productName: '',
      originalPrice: 0,
      starRating: 0,
      isOnSale: false,
      salesPrice: 0,
      imgUrl: ''
    }

    this.updateProduct = this.updateProduct.bind(this);
    this.takeAction = this.takeAction.bind(this);
  }

  updateProduct() {
    this.props.setNewProductId(this.props.productId);
  }

  takeAction(e) {
    e.stopPropagation();
    this.props.actionClick(this.props.productId);
  }

  componentDidMount() {
    var productCategory, productName, originalPrice, isOnSale, imgUrl;
    var salesPrice = 0;
    var starRating = 0;
    var numRatings = 0;

    axios({
      method: 'get',
      url: `/products/${this.props.productId}`,
      params: {product_id: this.props.productId}
    })
    .then(result => {
      productCategory = result.data.category;
      productName = result.data.name;

      return calculateAverageRating(this.props.productId)
    })
    .then(result => {
      starRating = result;

      return axios({
        method: 'get',
        url: `/products/${this.props.productId}/styles`,
        params: {product_id: this.props.productId}
      })
    })
    .then(result => {
      var haveFoundDefault = false;
      var styles = result.data.results;

      for (var style of styles) {
        if (style['default?']) {
          originalPrice = style.original_price;

          imgUrl = style.photos[0].url;
          if (imgUrl === null) {
            imgUrl = '../images/fullstar.jpeg';
          }

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
    return (<div className='product-card' onClick={() => {this.updateProduct()}}>
      <button className='ri-action-button' onClick={(e) => {this.takeAction(e)}}>
        <FontAwesomeIcon icon={this.props.actionButtonIcon} />
      </button>
      <div className='ri-image-block'>
        <img className='ri-image' src={this.state.imgUrl} alt='product image'></img>
      </div>
      <div className='ri-product-info'>
        <div className='ri-category'>{this.state.productCategory}</div>
        <div className='ri-product-name'>{this.state.productName}</div>
        <div className='ri-original-price'>${this.state.originalPrice}</div>
        <div>{stars(this.state.starRating)}</div>
      </div>
    </div>)
  }
}

export default ProductCard;