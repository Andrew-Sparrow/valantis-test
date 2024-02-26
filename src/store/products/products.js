import { createReducer } from '@reduxjs/toolkit';

import {
  loadAllProductIDs,
} from '../actions';

const initialState = {
  allProductIDs: [],
  productIDsOnPage: [],
  productItemsOnPage: [],
  isAllProductIDsLoading: true,
  isProductItemsLoading: true,
};

const products = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAllProductIDs, (state, action) => {
      state.allProductIDs = action.payload;
      state.isAllProductIDsLoading = false;
    })
  });

export { products };
