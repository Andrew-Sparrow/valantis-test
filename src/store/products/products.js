import { createReducer } from '@reduxjs/toolkit';

import {
  loadAllProductIDs,
  loadCurrentItemsOnPage,
  setIsCurrentItemsLoading,
  setIsInitialItemsLoading,
  setIsFilterItemsLoading,
  setIsFilteredItemsDisplayed
} from '../actions';

const initialState = {
  allProductIDs: [],
  productItemsOnPage: [],
  filteredItems: [],
  isAllProductIDsLoading: true,
  isCurrentItemsLoading: true,
  isInitialItemsLoading: true,
  isFilterItemsLoading: false, // to Disable Filter Buttons
  isFilterItemsDisplayed: false // to switch between filtered items and another
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
      state.isFilterItemsLoading = false;
    })
    .addCase(setIsCurrentItemsLoading, (state, action) => {
      state.isCurrentItemsLoading = action.payload;
    })
    .addCase(setIsInitialItemsLoading, (state, action) => {
      state.isInitialItemsLoading = action.payload;
    })
    .addCase(setIsFilterItemsLoading, (state, action) => { // to Disable Filter Buttons
      state.isFilterItemsLoading = action.payload;
    })
    .addCase(setIsFilteredItemsDisplayed, (state, action) => {
      state.isFilterItemsDisplayed = action.payload;
    })
  });

export { products };
