import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.js';
import reportWebVitals from './reportWebVitals';
import UnderConstruction from './components/UnderConstruction.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <UnderConstruction />
  </React.StrictMode>
);


reportWebVitals(console.log);
