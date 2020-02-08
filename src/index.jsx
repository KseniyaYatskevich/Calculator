import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { hot } from 'react-hot-loader';
import './index.scss';
import '@babel/polyfill';

ReactDOM.render(
  <App className="app_container"/>,
  document.getElementById('root')
);