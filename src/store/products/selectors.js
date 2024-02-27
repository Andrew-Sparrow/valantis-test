import { NameSpace } from '../root-reducer';

export const getAllProductIDs = (state) => state[NameSpace.PRODUCTS].allProductIDs;
export const getProductIDsOnPage = (state) => state[NameSpace.PRODUCTS].productIDsOnPage;
export const getProductItemsOnPage = (state) => state[NameSpace.PRODUCTS].productItemsOnPage;
export const getIsAllProductIDsLoading = (state) => state[NameSpace.PRODUCTS].isAllProductIDsLoading;
export const getIsProductItemsLoading = (state) => state[NameSpace.PRODUCTS].isProductItemsLoading;
