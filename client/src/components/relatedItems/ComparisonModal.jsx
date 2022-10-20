import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const axios = require('axios');


class ComparisonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductFeatures: [],
      comparisonProductFeatures: []
    }

    this.generateComparisonInfo = this.generateComparisonInfo.bind(this);
    this.getProductFeatures = this.getProductFeatures.bind(this);
  }

  generateComparisonInfo(currentProductId, comparisonProductId) {
    this.getProductFeatures(currentProductId, 'currentProductFeatures');
    this.getProductFeatures(comparisonProductFeatures, 'comparisonProductFeatures');

    return (
      <table className='comparison-table'>
        <tbody>
          <tr>
            <th>{currentProductId}</th>
            <th>CHECKS</th>
            <th>{comparisonProductId}</th>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faCheck} /></td>
            <td>Some parameter that I want to compare!</td>
            <td><FontAwesomeIcon icon={faCheck} /></td>
          </tr>
        </tbody>
      </table>
    )
  }

  getProductFeatures(productId, stateParam) {
    return axios({
      method: 'get',
      url: `/products/${productId}`,
      params: {product_id: productId}
    })
    .then(result => {
      var tempVal = {};
      tempVal[stateParam] = result.data.features;
      this.setState({tempVal});
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidUpdate() {

  }

  render() {

    if (this.props.show === false) {
      return null;
    } else {
      return (
      <div id='comparison-modal'>
        <div>
          {this.generateComparisonInfo(this.props.currentProductId, this.props.comparisonProductId)}
        </div>
      </div>)
    }

  }
}

export default ComparisonModal;