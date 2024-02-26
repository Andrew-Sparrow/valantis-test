import { combineReducers } from 'redux';
import { products } from './products/products';

export const NameSpace = {
  PRODUCTS: 'PRODUCTS',
};

export default combineReducers({
  [NameSpace.PRODUCTS]: products,
});
