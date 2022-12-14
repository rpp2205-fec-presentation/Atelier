import React from "react";
import ProductInfo from "./ProductInfo.jsx";

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="po-container" onClick={e => this.props.clickTracking(e, 'Product Overview')}>
        <ProductInfo id={this.props.productId} />
      </div>
    )
  }
}

export default Overview;