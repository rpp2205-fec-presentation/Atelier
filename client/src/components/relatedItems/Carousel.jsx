import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ProductCard from './ProductCard.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLeftButton: false,
      showRightButton: false
    }

    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
    this.checkSliders = this.checkSliders.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  slideLeft() {
    var scroller = document.getElementById(this.props.sliderComp);
    var currentLocation = scroller.scrollLeft;
    scroller.scrollLeft -= 250;

    this.checkSliders(currentLocation - 250);
  }

  slideRight() {
    var scroller = document.getElementById(this.props.sliderComp);
    var currentLocation = scroller.scrollLeft;
    scroller.scrollLeft += 250;

    this.checkSliders(currentLocation + 250);
  }

  checkSliders(location) {
    var scroller = document.getElementById(this.props.sliderComp);
    var productPixelLength = this.props.products.length * 250;

    console.log(this.props.sliderComp);
    console.log(window.innerWidth);
    console.log(productPixelLength - location);

    if (this.state.showLeftButton && location <= 0) {
      this.setState({showLeftButton: false});
    } else if (!this.state.showLeftButton && location > 0){
      this.setState({showLeftButton: true});
    }

    if (this.state.showRightButton && productPixelLength - location < window.innerWidth) {
      this.setState({showRightButton: false});
    } else if (!this.state.showRightButton && productPixelLength - location >= window.innerWidth) {
      this.setState({showRightButton: true});
    }
  }

  handleWindowResize() {
    var scroller = document.getElementById(this.props.sliderComp);

    this.checkSliders(scroller.scrollLeft);
  }

  componentDidMount() {
    //window.addEventListener('resize', this.handleWindowResize);
    this.checkSliders(0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.products !== prevProps.products) {
      var scroller = document.getElementById(this.props.sliderComp);

      this.checkSliders(scroller.scrollLeft);
    }
  }

  render() {
    var leftButton = null;
    var rightButton = null;

    if (this.state.showLeftButton) {
      leftButton = <FontAwesomeIcon size='2x' icon={faChevronLeft} className='carousel-button left' onClick={this.slideLeft}/>
    }

    if (this.state.showRightButton) {
      rightButton = <FontAwesomeIcon size='2x' icon={faChevronRight} className='carousel-button right' onClick={this.slideRight}/>

    }

    return (
      <div className='carousel'>
        {leftButton}
        <div id={this.props.sliderComp}>
          {this.props.products.map((productId) =>
            <ProductCard key={productId.toString()} productId={productId} setNewProductId={this.props.setNewProductId} actionButtonIcon={this.props.actionButtonIcon} actionClick={this.props.actionClick}/>)}
        </div>
        {rightButton}
      </div>
    )
  }

}

export default Carousel;