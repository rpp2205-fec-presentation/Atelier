import React from "react";
import ProductInfo from "./ProductInfo.jsx";

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="po-container">
        <ProductInfo id={this.props.productId} />
      </div>
    )
  }
}

export default Overview;