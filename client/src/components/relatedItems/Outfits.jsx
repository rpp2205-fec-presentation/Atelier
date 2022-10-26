import React from 'react';
import Carousel from './Carousel.jsx';
import { faX } from '@fortawesome/free-solid-svg-icons'


class Outfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfits: ['newOutfit'].concat(localStorage.getItem('myOutfits').split(","))
    }

    this.handleActionButton = this.handleActionButton.bind(this);
    this.updateLocalOutfitStorage = this.updateLocalOutfitStorage.bind(this);
  }

  handleActionButton(productId) {
    if (productId === 'newOutfit') {
      this.handleNewOutfit();
    } else {
      var tempOutfits = [];

      for (var outfit of this.state.outfits) {
        if (outfit !== productId) {
          tempOutfits.push(outfit);
        }
      }

      this.setState({outfits: tempOutfits});
      this.updateLocalOutfitStorage(tempOutfits);
    }

  }

  updateLocalOutfitStorage(outfits) {
    var localStorageOutfits = outfits.slice();
    //Remove the "newOutfit" field
    localStorageOutfits.shift();
    localStorage.setItem('myOutfits', localStorageOutfits);
  }

  handleNewOutfit() {

    if (!this.state.outfits.includes(this.props.productId)) {
      var tempOutfits = this.state.outfits.slice();
      tempOutfits.splice(1, 0, this.props.productId);
      this.setState({outfits: tempOutfits});
      this.updateLocalOutfitStorage(tempOutfits);
    }
  }

  componentDidMount() {
    console.log(this.state.outfits);
    console.log()
  }

  render() {
    return (<div id='outfits'>
      <h3>YOUR OUTFIT</h3>
      <Carousel key='outfit-carousel' products={this.state.outfits} setNewProductId={this.props.setNewProductId} actionButtonIcon={faX} actionClick={this.handleActionButton} sliderComp='carousel-outfit'/>
    </div>)
  }
}

export default Outfits;