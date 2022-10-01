import React from 'react';

class ReviewTile extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3> Rating: 0/5 </h3>
        <h3> Review Summary </h3>
        <h4> Review Body </h4>
      </div>
    )
  }
}

export default ReviewTile;