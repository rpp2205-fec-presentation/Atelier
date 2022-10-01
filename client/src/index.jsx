import React from 'react';
import reactDom from 'react-dom';
import App from './components/App.jsx';

const Atelier = () => {
  return (
    <App />
  );
};

reactDom.render(<Atelier />, document.getElementById('root'));