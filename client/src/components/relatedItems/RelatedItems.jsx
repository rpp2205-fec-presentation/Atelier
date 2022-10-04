import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import Outfits from './Outfits.jsx';
const axios = require('axios');


class RelatedItems extends React.Component {
  constructor(props) {
    super(props);

    this.testClick = this.testClick.bind(this);
  }

  testClick() {
    axios.get('/products')
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (<div>
      <h1>Related Items and Comparison</h1>
      <button onClick={this.testClick}>SAMPLE API CALL TO PRODUCTS</button>
      <RelatedProducts />
      <Outfits />
    </div>)
  }
}

export default RelatedItems;