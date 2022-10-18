import React from 'react';
import reactDom from 'react-dom';
import App from './components/App.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';


const Atelier = () => {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
};

reactDom.render(<Atelier />, document.getElementById('root'));