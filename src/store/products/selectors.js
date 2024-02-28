import { NameSpace } from '../root-reducer';

export const getAllProductIDs = (state) => state[NameSpace.PRODUCTS].allProductIDs;
export const getIsAllProductIDsLoading = (state) => state[NameSpace.PRODUCTS].isAllProductIDsLoading;

export const getProductItemsOnPage = (state) => state[NameSpace.PRODUCTS].productItemsOnPage;
export const getIsCurrentItemsLoading = (state) => state[NameSpace.PRODUCTS].isCurrentItemsLoading;
export const getIsInitialItemsLoading = (state) => state[NameSpace.PRODUCTS].isInitialItemsLoading;
