import { createReducer } from '@reduxjs/toolkit';

import {
  loadAllProductIDs,
  loadCurrentItemsOnPage,
  setIsCurrentItemsLoading,
  setIsInitialItemsLoading,
  setIsFilteredItemsLoading
} from '../actions';

const initialState = {
  allProductIDs: [],
  productItemsOnPage: [],
  filteredItems: [],
  isAllProductIDsLoading: true,
  isCurrentItemsLoading: true,
  isInitialItemsLoading: true,
  isFilteredItemsLoading: false, // to Disable Filter Buttons
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
      state.isFilteredItemsLoading = false;
    })
    .addCase(setIsCurrentItemsLoading, (state, action) => {
      state.isCurrentItemsLoading = action.payload;
    })
    .addCase(setIsInitialItemsLoading, (state, action) => {
      state.isInitialItemsLoading = action.payload;
    })
    .addCase(setIsFilteredItemsLoading, (state, action) => { // to Disable Filter Buttons
      state.isFilteredItemsLoading = action.payload;
    })
  });

export { products };
