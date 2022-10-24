import React from 'react';
import ProductCard from './ProductCard.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
const axios = require('axios');

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [71697, 71698, 71699],
      showModal: false,
      comparisonProductId: 71697
    }

    this.getRelatedProducts = this.getRelatedProducts.bind(this);
    this.handleActionButton = this.handleActionButton.bind(this);
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);


  }

  getRelatedProducts(productId) {
    axios({
      method: 'get',
      url: `/products/${productId}/related`,
      params: {product_id: productId}
    })
    .then(result => {
      this.setState({relatedProducts: result.data})
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleActionButton(productId) {
    var newState = !this.state.showModal;
    this.setState({showModal: newState, comparisonProductId: productId});
  }

  slideLeft() {
    var scroller = document.getElementById('carousel-content');
    scroller.scrollLeft = scroller.scrollLeft - 260;
    console.log(scroller.scrollLeft);
  }

  slideRight() {
    var scroller = document.getElementById('carousel-content');
    scroller.scrollLeft = scroller.scrollLeft + 260;
    console.log(scroller.scrollLeft);
  }

  componentDidMount() {
    this.getRelatedProducts(this.props.productId);
  }

  render() {
    var modal = null;

    if (this.state.showModal) {
      modal = <ComparisonModal show={this.state.showModal} currentProductId={this.props.productId} comparisonProductId={this.state.comparisonProductId}/>
    }
    return (
    <div id='related-products'>
      <h3>Related Products</h3>
      <div id='carousel'>
        <FontAwesomeIcon size='2x' icon={faChevronLeft} className='carousel-button left' onClick={this.slideLeft}/>
        <div id='carousel-content'>
          {this.state.relatedProducts.map((productId) =>
            <ProductCard key={productId.toString()} productId={productId} setNewProductId={this.props.setNewProductId} actionButtonIcon={faStar} actionClick={this.handleActionButton}/>)}
        </div>
        <FontAwesomeIcon size='2x' icon={faChevronRight} className='carousel-button right' onClick={this.slideRight}/>
      </div>
      {modal}

    </div>)
  }
}

export default RelatedProducts;