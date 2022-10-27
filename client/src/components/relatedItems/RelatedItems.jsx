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
      <RelatedProducts productId={this.props.productId} setNewProductId={this.props.setNewProductId}/>
      <Outfits
        productId={this.props.productId}
        setNewProductId={this.props.setNewProductId}
        addNewOutfit={this.props.addNewOutfit}
        removeOutfit={this.props.removeOutfit}
        outfits={this.props.outfits}/>
    </div>)
  }
}

export default RelatedItems;