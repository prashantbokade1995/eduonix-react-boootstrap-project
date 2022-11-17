import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './Bootstrap/App';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// React Bootstrap Configratution 
import "../node_modules/react-bootstrap/dist/react-bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
// import App from './input table/App';
import App from './Project/Components/App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();