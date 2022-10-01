import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import Outfits from './Outfits.jsx';


class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h1>Related Items and Comparison</h1>
      <RelatedProducts />
      <Outfits />
    </div>)
  }
}

export default RelatedItems;