import React from "react";

const ProductCategory = ({ category, name }) => {
  return (
    <div id="po-product-categoty">
      <h4>{category}</h4>
      <h4>{name}</h4>
    </div>
  )
}

export default ProductCategory;
