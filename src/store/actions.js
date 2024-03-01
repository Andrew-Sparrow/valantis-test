import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_ALL_PRODUCT_IDS: 'products/loadAllProductIDs',
  LOAD_CURRENT_ITEMS_ON_PAGE: 'products/loadCurrentItemsOnPage',
  SET_IS_CURRENT_ITEMS_LOADING: 'products/isCurrentItemsLoading',
  SET_IS_INITIAL_ITEMS_LOADING: 'products/isInitialItemsLoading',
  SET_IS_FILTER_ITEMS_LOADING: 'products/isFilterItemsLoading',
  SET_IS_FILTER_ITEMS_DISPLAYED: 'products/setIsFilterItemsDisplayed',
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

export const setIsFilterItemsLoading = createAction( // to Disable Filter Buttons
  ActionType.SET_IS_FILTER_ITEMS_LOADING,
  (isLoading) => ({ payload: isLoading }),
);

export const setIsFilterItemsDisplayed = createAction(
  ActionType.SET_IS_FILTER_ITEMS_DISPLAYED,
  (isDisplayed) => ({ payload: isDisplayed }),
);

export const loadFilterItems = createAction(
  ActionType.LOAD_FILTER_ITEMS,
  (filterItems) => ({ payload: filterItems }),
);
