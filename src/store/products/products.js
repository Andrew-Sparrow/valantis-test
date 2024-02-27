import { createReducer } from '@reduxjs/toolkit';

import {
  loadAllProductIDs, loadCurrentItemsOnPage,
} from '../actions';

const initialState = {
  allProductIDs: [],
  productItemsOnPage: [],
  offset: 0,
  isAllProductIDsLoading: true,
  isProductItemsOnPageLoading: true,
};

const products = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAllProductIDs, (state, action) => {
      state.allProductIDs = action.payload;
      state.isAllProductIDsLoading = false;
    })
    .addCase(loadCurrentItemsOnPage, (state, action) => {
      state.productItemsOnPage = [...action.payload];
      state.isProductItemsOnPageLoading = false;
    })
  });

export { products };
