import {useSelector} from 'react-redux';

import {ProductList} from '../product-list/product-list';
import {getProductItemsOnPage, getIsFilterItemsDisplayed} from '../../store/products/selectors';
import {Pagination} from '../pagination/pagination';
import {FilterPagination} from '../filter-pagination/filter-pagination';


const PaginatedItems = () => {
  const currentItems = useSelector(getProductItemsOnPage);
  const isFilterItemsDisplayed = useSelector(getIsFilterItemsDisplayed);

  return (
    <>
      <ProductList currentItems={currentItems} />
      { isFilterItemsDisplayed ? <FilterPagination /> : <Pagination /> }
    </>
  );
};

export {PaginatedItems};
