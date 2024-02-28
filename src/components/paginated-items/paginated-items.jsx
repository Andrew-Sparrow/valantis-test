import {useSelector} from 'react-redux';

import {ProductList} from '../product-list/product-list';
import {getProductItemsOnPage} from '../../store/products/selectors';
import { Pagination } from '../pagination/pagination';


const PaginatedItems = () => {
  const currentItems = useSelector(getProductItemsOnPage);

  return (
    <>
      <ProductList currentItems={currentItems}/>
      <Pagination/>
    </>
  );
};

export {PaginatedItems};
