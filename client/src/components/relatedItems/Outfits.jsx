import React from 'react';
import Carousel from './Carousel.jsx';
import { faX } from '@fortawesome/free-solid-svg-icons'


class Outfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfits: ['newOutfit'].concat(this.props.outfits)
    }

    this.handleActionButton = this.handleActionButton.bind(this);
  }

  handleActionButton(productId) {
    if (productId === 'newOutfit') {
      this.props.addNewOutfit(this.props.productId);
    } else {
      this.props.removeOutfit(productId);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.outfits !== prevProps.outfits) {
      var tempOutfits = ['newOutfit'].concat(this.props.outfits);
      this.setState({outfits: tempOutfits});
    }
  }
  componentDidMount() {
    if (localStorage.getItem('myOutfits') === null) {
      localStorage.setItem('myOutfits', '');
    } else {
      var tempOutfits = ['newOutfit'].concat(this.props.outfits);
      this.setState({outfits: tempOutfits});
    }
  }

  render() {
    return (<div id='outfits'>
      <h3>YOUR OUTFIT</h3>
      <Carousel key='outfit-carousel' products={this.state.outfits} setNewProductId={this.props.setNewProductId} actionButtonIcon={faX} actionClick={this.handleActionButton} sliderComp='carousel-outfit'/>
    </div>)
  }
}

export default Outfits;