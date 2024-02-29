import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_ALL_PRODUCT_IDS: 'products/loadAllProductIDs',
  LOAD_CURRENT_ITEMS_ON_PAGE: 'products/loadCurrentItemsOnPage',
  SET_IS_CURRENT_ITEMS_LOADING: 'products/isCurrentItemsLoading',
  SET_IS_INITIAL_ITEMS_LOADING: 'products/isInitialItemsLoading',
  LOAD_FILTERED_ITEMS: 'products/loadFilteredItems',
};

export const loadAllProductIDs = createAction(
  ActionType.LOAD_ALL_PRODUCT_IDS,
  (ids) => ({ payload: ids }),
);

export const loadCurrentItemsOnPage = createAction(
  ActionType.LOAD_CURRENT_ITEMS_ON_PAGE,
  (currentItems) => ({ payload: currentItems }),
);

export const setIsCurrentItemsLoading = createAction(
  ActionType.SET_IS_CURRENT_ITEMS_LOADING,
  (isLoading) => ({ payload: isLoading }),
);

export const setIsInitialItemsLoading = createAction(
  ActionType.SET_IS_INITIAL_ITEMS_LOADING,
  (isLoading) => ({ payload: isLoading }),
);

export const loadFilteredItems = createAction(
  ActionType.LOAD_FILTERED_ITEMS,
  (filteredItems) => ({ payload: filteredItems }),
);
