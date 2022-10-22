import React from 'react';
const axios = require('axios');


class ComparisonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductFeatures: [],
      comparisonProductFeatures: [],
      currentProductName: '',
      comparisonProductName: ''
    }

    this.generateComparisonInfo = this.generateComparisonInfo.bind(this);
    this.getProductFeatures = this.getProductFeatures.bind(this);
  }

  generateComparisonInfo(currentProductName, comparisonProductName) {

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
      if (comparisonInfo[feature].length === 1) {
        comparisonInfo[feature].push(null);
      }

      var tempDiv = <tr key={feature}>
        <td>{comparisonInfo[feature][0] === true ? '✓' : comparisonInfo[feature][0]}</td>
        <td>{feature}</td>
        <td>{comparisonInfo[feature][1] === true ? '✓' : comparisonInfo[feature][1]}</td>
      </tr>

      tempTableVals.push(tempDiv);
    }

    return (
      <table className='ri-comparison-table'>
        <thead>
          <tr>
            <th>{currentProductName}</th>
            <th></th>
            <th>{comparisonProductName}</th>
          </tr>
        </thead>
        <tbody>
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
      this.getProductFeatures(this.props.comparisonProductId, 'comparisonProductFeatures'),
      axios({
        method: 'get',
        url: `/products/${this.props.currentProductId}`,
        params: {product_id: this.props.currentProductId}
      }),
      axios({
        method: 'get',
        url: `/products/${this.props.comparisonProductId}`,
        params: {product_id: this.props.procomparisonProductIdductId}
      })
    ]).then((results)=> {

      this.setState({
        currentProductName: results[2].data.name,
        comparisonProductName: results[3].data.name
      });

    }).catch(err => {
      console.log(err);
    })

  }

  render() {

    if (this.props.show === false) {
      return null;
    } else {
      return (
      <div id='comparison-modal'>
        {this.generateComparisonInfo(this.state.currentProductName, this.state.comparisonProductName)}
      </div>)
    }

  }
}

export default ComparisonModal;