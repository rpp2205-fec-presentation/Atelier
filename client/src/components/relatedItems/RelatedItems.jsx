import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import Outfits from './Outfits.jsx';
const axios = require('axios');

// does this affect main
class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div id='related-items-and-comparisons'>
      <h2>Related Items and Comparison</h2>
      <RelatedProducts />
      <Outfits />
    </div>)
  }
}

export default RelatedItems;