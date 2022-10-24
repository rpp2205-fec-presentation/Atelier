import React from 'react';
import { createRoot } from'react-dom/client';
import App from './components/App.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';


const Atelier = () => {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Atelier />);

// reactDom.render(<Atelier />, document.getElementById('root'));

