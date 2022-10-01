import React from 'react';
import ProductCard from './ProductCard.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className='related-products'>
      <h2>Related Products</h2>
      <ProductCard />
      <ProductCard />
    </div>)
  }
}

export default RelatedProducts;