import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Import global styles if necessary

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Ensure this matches the element in your public/index.html
);
