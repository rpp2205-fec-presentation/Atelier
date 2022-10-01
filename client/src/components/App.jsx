import React from 'react';
import RelatedItems from './relatedItems/RelatedItems.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <RelatedItems />
    </div>)
  }
}

export default App;