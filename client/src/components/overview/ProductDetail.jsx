import React from "react";

const ProductDetail = ({ slogan, description }) => {
  return (
    <div>
      <h2 className="po-product-slogan">{slogan}</h2>
      <p className="po-product-description">{description}</p>
    </div>
  );
}

export default ProductDetail;