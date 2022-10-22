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
    return (<div id='related-items-and-comparisons' onClick={e => this.props.clickTracking(e, 'Related Items')}>
      <h2>Related Items and Comparison</h2>
      <RelatedProducts productId={this.props.productId} setNewProductId={this.props.setNewProductId}/>
      <Outfits setNewProductId={this.props.setNewProductId}/>
    </div>)
  }
}

export default RelatedItems;