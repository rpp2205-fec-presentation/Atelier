import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
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

  generateComparisonInfo() {

    var comparisonInfo = {};

    // Grab current product features
    for (var feature of this.state.currentProductFeatures) {
      comparisonInfo[feature.feature] = [feature.value];
    }

    // Grab comparison product features
    for (var feature of this.state.comparisonProductFeatures) {
      if (comparisonInfo.hasOwnProperty(feature.feature)) {
        comparisonInfo[feature.feature].push(feature.value);
      } else {
        comparisonInfo[feature.feature] = [null, feature.value];
      }
    }

    // Generate table info for rendering
    var tempTableVals = [];

    for (var feature in comparisonInfo) {
      console.log(feature);
      if (comparisonInfo[feature].length === 1) {
        comparisonInfo[feature].push(null);
      }

      var tempDiv = <tr>
        <td>{comparisonInfo[feature][0] === true ? '✓' : comparisonInfo[feature][0]}</td>
        <td>{feature}</td>
        <td>{comparisonInfo[feature][1] === true ? '✓' : comparisonInfo[feature][1]}</td>
      </tr>

      tempTableVals.push(tempDiv);
    }

    return (
      <table className='ri-comparison-table'>
        <tbody>
          <tr>
            <th>{this.props.currentProductId}</th>
            <th></th>
            <th>{this.props.comparisonProductId}</th>
          </tr>
          {tempTableVals}
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
      this.setState(tempVal);
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    Promise.all([
      this.getProductFeatures(this.props.currentProductId, 'currentProductFeatures'),
      this.getProductFeatures(this.props.comparisonProductId, 'comparisonProductFeatures')
    ]).then(()=> {
      //console.log(this.state.currentProductFeatures);
      //console.log(this.state.comparisonProductFeatures);

      this.generateComparisonInfo();
    })

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