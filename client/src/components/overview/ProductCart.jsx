import React, { useState } from 'react';
import Cart from './Cart.jsx';
import Like from './Like.jsx';
import ProductQuantity from './ProductQuantity.jsx';
import ProductSize from './ProductSize.jsx';

export default function ProductCart({selectedStyle}) {
  const [curSizeIdx, setCurSizeIdx] = useState(-1);

  return (
    <div className='po-product-cart'>
      {/* {console.log('data>>>', selectedStyle.skus)} */}
      {selectedStyle.skus &&
      <ProductSize
        setCurSizeIdx={setCurSizeIdx}
        selectedStyle={selectedStyle.skus}
      />}
      {selectedStyle.skus &&
      <ProductQuantity
        curSizeIdx={curSizeIdx}
        selectedStyle={selectedStyle.skus}
      />}
      <Cart />
      <Like />
    </div>
  );
}

