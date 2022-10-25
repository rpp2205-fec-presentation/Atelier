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
      imgUrl: '../images/fullstar.jpeg'
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

    if (this.props.productId === 'newOutfit') { return; }

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
      var defaultIndex = 0;
      var haveFoundDefault = false;
      var styles = result.data.results;

      // Determine if there's a default style
      while (!haveFoundDefault && defaultIndex < styles.length) {
        if (styles[defaultIndex]['default?']) {
          haveFoundDefault = true;
        } else {
          defaultIndex++;
        }
      }

      // If no default, choose first style
      if (!haveFoundDefault) {
        defaultIndex = 0;
      }

      // Save values of default style
      var style = styles[defaultIndex];

      originalPrice = style.original_price;

      imgUrl = style.photos[0].url;

      if (imgUrl === null) {
        imgUrl = this.state.imgUrl;
      }

      if (style.sale_price !== null) {
        isOnSale = true;
        salesPrice = style.sale_price;
      }

      //Update state from default style
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
    var price = null;
    if (!this.state.isOnSale) {
      price = <div className='ri-original-price'>${this.state.originalPrice}</div>
    } else {
      price = (<div>
        <b className='ri-discount-price'>{this.state.salesPrice}</b><s className='ri-old-price'>${this.state.originalPrice}</s>
      </div>)
    }

    if (this.props.productId === 'newOutfit') {
      var productDiv = <div className='product-card' onClick={(e) => {this.takeAction(e)}}>
        New Outfit +
        <div className='ri-image-block' style={{backgroundImage:`url(${this.state.imgUrl})`, backgroundSize:'cover'}}></div>
        <div className='ri-product-info'></div>
      </div>
    } else {
      var productDiv = <div className='product-card' onClick={() => {this.updateProduct()}}>
        <button className='ri-action-button' onClick={(e) => {this.takeAction(e)}}>
          <FontAwesomeIcon icon={this.props.actionButtonIcon} />
        </button>
        <div className='ri-image-block' style={{backgroundImage:`url(${this.state.imgUrl})`, backgroundSize:'cover'}}></div>
        <div className='ri-product-info'>
          <div className='ri-category'>{this.state.productCategory}</div>
          <div className='ri-product-name'>{this.state.productName}</div>
          {price}
          <div>{stars(this.state.starRating)}</div>
        </div>
      </div>
    }

    return (<React.Fragment>
      {productDiv}
    </React.Fragment>

    )
  }
}

export default ProductCard;