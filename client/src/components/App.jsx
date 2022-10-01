import React from 'react';
import Overview from './overview/Overview.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import RatingsReviews from './ratings&reviews/RatingsReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <Overview />
      <RelatedItems />
      <RatingsReviews />
    </div>)
  }
}

export default App;