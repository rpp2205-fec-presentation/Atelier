import React from "react";

const ProductCategory = ({ category, name }) => {
  return (
    <div>
      <section id="po-product-categoty" >
        {category}
      </section>
      <section id="po-product-name">
        {name}
      </section>
    </div>
  )
}

export default ProductCategory;
