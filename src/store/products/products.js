import { createReducer } from '@reduxjs/toolkit';

import {
  loadAllProductIDs,
  loadCurrentItemsOnPage,
  setIsCurrentItemsLoading
} from '../actions';

const initialState = {
  allProductIDs: [],
  productItemsOnPage: [],
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
    .addCase(setIsCurrentItemsLoading, (state, action) => {
      state.setIsCurrentItemsLoading = action.payload;
    })
  });

export { products };