import React from 'react';
import Carousel from './Carousel.jsx';
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
      <Carousel products={this.state.relatedProducts} setNewProductId={this.props.setNewProductId} actionButtonIcon={faStar} actionClick={this.handleActionButton}/>
      {modal}

    </div>)
  }
}

export default RelatedProducts;