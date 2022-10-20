import React from 'react';

class ComparisonModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.show === false) {
      return null;
    } else {
      return (
      <div id='comparison-modal'>
        <div>Comparison Modal</div>
      </div>)
    }

  }
}

export default ComparisonModal;