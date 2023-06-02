import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from "react-ga4";
import { hotjar } from 'react-hotjar';

ReactGA.initialize("G-R0Q539XKFD");


hotjar.initialize(hjid, hjsv);

// Identify the user
hotjar.identify('USER_ID', { userProperty: 'value' });

// Add an event
hotjar.event('button-click');

// Update SPA state
hotjar.stateChange('/my/page');

// Check if Hotjar has been initialized before calling its methods
if (hotjar.initialized()) {
  hotjar.identify('USER_ID', { userProperty: 'value' });
}

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
