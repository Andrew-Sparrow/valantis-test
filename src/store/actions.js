import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_ALL_PRODUCT_IDS: 'products/loadAllProductIDs',
};

export const loadAllProductIDs = createAction(
  ActionType.LOAD_ALL_PRODUCT_IDS,
  (ids) => ({ payload: ids }),
);
