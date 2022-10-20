import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class ComparisonModal extends React.Component {
  constructor(props) {
    super(props);

    this.generateComparisonInfo = this.generateComparisonInfo.bind(this);
  }

  generateComparisonInfo(currentProductId, comparisonProductId) {
    return (
      <table className='comparison-table'>
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
      </table>
    )
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