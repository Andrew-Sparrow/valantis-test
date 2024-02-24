import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { Normalize } from 'styled-normalize'; // https://www.npmjs.com/package/styled-normalize

import App from './App';
import './styles/index.scss';
import { getAxiosInstance } from './services/api';
import { getHashMD5 } from './util/util';


const api = getAxiosInstance();


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Normalize />
    <App />
  </React.StrictMode>
);
