import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './commponents-styles/header.css'
import './commponents-styles/body.css';
import './commponents-styles/footer.css';
import './commponents-styles/responsive.css';
import './commponents-styles/responive2.css';
import './commponents-styles/responsive3.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
