import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ProductCard from './ProductCard.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  slideLeft() {
    var scroller = document.getElementById('carousel-content');
    console.log(scroller.scrollLeft);

    scroller.scrollLeft = scroller.scrollLeft - 260;
    console.log(scroller.scrollLeft);

  }

  slideRight() {
    var scroller = document.getElementById('carousel-content');
    scroller.scrollLeft = scroller.scrollLeft + 260;
    console.log(scroller.scrollLeft);
  }

  render() {

    return (
      <div id='carousel'>
        <FontAwesomeIcon size='2x' icon={faChevronLeft} className='carousel-button left' onClick={this.slideLeft}/>
        <div id='carousel-content'>
          {this.props.products.map((productId) =>
            <ProductCard key={productId.toString()} productId={productId} setNewProductId={this.props.setNewProductId} actionButtonIcon={this.props.actionButtonIcon} actionClick={this.props.actionClick}/>)}
        </div>
        <FontAwesomeIcon size='2x' icon={faChevronRight} className='carousel-button right' onClick={this.slideRight}/>
      </div>
    )
  }

}

export default Carousel;