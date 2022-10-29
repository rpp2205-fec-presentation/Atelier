import React from 'react';

export default function ProductSize({setCurSizeIdx, selectedStyle}) {
  const changeHandler = (e) => {
    setCurSizeIdx(e.target.selectedIndex-1)
  }

  return (
    <select className='po-cart-button' onChange={changeHandler}>
      <option>select size</option>
      {Object.values(selectedStyle).map((res, idx) => (
        <option key={idx}>{res.size}</option>
      ))}
    </select>
  );
}

