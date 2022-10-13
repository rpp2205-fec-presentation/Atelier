import React from "react";

const ProductDetail = ({ slogan, description }) => {
  return (
    <div>
      <h2>{slogan}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProductDetail;