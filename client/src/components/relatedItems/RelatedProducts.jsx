import React from 'react';
import ProductCard from './ProductCard.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div id='related-products'>
      <h3>Related Products</h3>
      <ProductCard />
      <ProductCard />
    </div>)
  }
}

export default RelatedProducts;