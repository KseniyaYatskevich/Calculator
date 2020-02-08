import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { hot } from 'react-hot-loader';
import './index.scss';
import '@babel/polyfill';

ReactDOM.render(
  <App name="Taylor" />,
  document.getElementById('root')
);