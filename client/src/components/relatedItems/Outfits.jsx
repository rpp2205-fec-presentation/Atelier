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

    this.handleActionButton = this.handleActionButton.bind(this);
  }

  handleActionButton(productId) {
    console.log(productId);
    var tempOutfits = [];

    for (var outfit of this.state.outfits) {
      if (outfit !== productId) {
        tempOutfits.push(outfit);
      }
    }

    this.setState({outfits: tempOutfits});
  }

  render() {
    return (<div id='outfits'>
      <h3>Outfits</h3>
      {this.state.outfits.map((productId) =>
        <ProductCard key={productId.toString()} productId={productId} setNewProductId={this.props.setNewProductId} actionButtonIcon={faX} actionClick={this.handleActionButton}/>)}
    </div>)
  }
}

export default Outfits;