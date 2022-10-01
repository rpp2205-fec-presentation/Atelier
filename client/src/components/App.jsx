import React from 'react';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import RatingsReviews from './ratings&reviews/RatingsReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <RelatedItems />
      <RatingsReviews />
    </div>)
  }
}

export default App;