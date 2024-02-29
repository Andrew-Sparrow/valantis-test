import { createReducer } from '@reduxjs/toolkit';

import {
  loadAllProductIDs,
  loadCurrentItemsOnPage,
  setIsCurrentItemsLoading,
  setIsInitialItemsLoading
} from '../actions';

const initialState = {
  allProductIDs: [],
  productItemsOnPage: [],
  filteredItems: [],
  isAllProductIDsLoading: true,
  isCurrentItemsLoading: true,
  isInitialItemsLoading: true,
};

const products = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAllProductIDs, (state, action) => {
      state.allProductIDs = action.payload;
      state.isAllProductIDsLoading = false;
    })
    .addCase(loadCurrentItemsOnPage, (state, action) => {
      state.productItemsOnPage = [...action.payload];
      state.isCurrentItemsLoading = false;
      state.isInitialItemsLoading = false;
    })
    .addCase(setIsCurrentItemsLoading, (state, action) => {
      state.isCurrentItemsLoading = action.payload;
    })
    .addCase(setIsInitialItemsLoading, (state, action) => {
      state.isInitialItemsLoading = action.payload;
    })
  });

export { products };
