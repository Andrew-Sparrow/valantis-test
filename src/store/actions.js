import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_ALL_PRODUCT_IDS: 'products/loadAllProductIDs',
  LOAD_CURRENT_ITEMS_ON_PAGE: 'products/loadCurrentItemsOnPage',
  SET_IS_CURRENT_ITEMS_LOADING: 'products/isCurrentItemsLoading'
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
