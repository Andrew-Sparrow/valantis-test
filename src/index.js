import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {Normalize} from 'styled-normalize'; // https://www.npmjs.com/package/styled-normalize

import {App} from './components/app/app';
import './styles/index.scss';
import {getAxiosInstance} from './services/api';
import rootReducer from './store/root-reducer';

import {fetchAllProductIDs} from './store/api-actions';


const api = getAxiosInstance();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});

store.dispatch(fetchAllProductIDs());


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Normalize />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
