import React from 'react';

export default function ProductQuantity({curSizeIdx, selectedStyle}) {
  let quant = 0;
  if (curSizeIdx >= 0) {
    quant = Object.values(selectedStyle)[curSizeIdx].quantity;
  }

  return (
    <select className='po-cart-button'>
      <option> - </option>
      {Array.from({length : quant}, (_, i) => i).map((n, idx) => (
        <option key={idx}>{n}</option>
      ))}
    </select>
  );
}
