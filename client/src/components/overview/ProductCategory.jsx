import React from "react";

const ProductCategory = ({ category, name }) => {
  return (
    <section>
      <section id="po-product-categoty" >
        {`Category > ${category}`}
      </section>
      <section id="po-product-name">
        {name}
      </section>
    </section>
  )
}

export default ProductCategory;
