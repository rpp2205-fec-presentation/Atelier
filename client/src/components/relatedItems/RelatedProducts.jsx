import React from 'react';
import ProductCard from './ProductCard.jsx';
const axios = require('axios');

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 71697,
      relatedProducts: [71697, 71698, 71699]
    }

    this.getRelatedProducts = this.getRelatedProducts.bind(this);
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

  componentDidMount() {
    this.getRelatedProducts(this.props.productId);
  }

  render() {
    return (<div id='related-products'>
      <h3>Related Products</h3>
      {this.state.relatedProducts.map((productId) =>
        <ProductCard key={productId.toString()} productId={productId} setNewProductId={this.props.setNewProductId}/>)}
    </div>)
  }
}

export default RelatedProducts;