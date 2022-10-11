import React from "react";
import ProductInfo from "./ProductInfo.jsx";

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h2>Overview</h2>
        <ProductInfo />
      </div>
    )
  }
}

export default Overview;