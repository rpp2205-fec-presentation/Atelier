import React from 'react';
import ProductCard from './ProductCard.jsx';
import { faX } from '@fortawesome/free-solid-svg-icons'


class Outfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 71697,
      outfits: [71697, 71698, 71699]
    }
  }

  render() {
    return (<div id='outfits'>
      <h3>Outfits</h3>
      {this.state.outfits.map((productId) =>
        <ProductCard key={productId.toString()} productId={productId} setNewProductId={this.props.setNewProductId} actionButtonIcon={faX}/>)}
    </div>)
  }
}

export default Outfits;