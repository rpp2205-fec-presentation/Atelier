import React from 'react';
import ProductCard from './ProductCard.jsx';

class Outfits extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className='outfits'>
      <h2>My Outfits</h2>
      <ProductCard />
      <ProductCard />
    </div>)
  }
}

export default Outfits;