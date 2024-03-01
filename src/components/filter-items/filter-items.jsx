import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {getProductItemsOnPage} from '../../store/products/selectors';
import {ProductList} from '../product-list/product-list';
import {ITEMS_PER_PAGE} from '../../const';
import {ReactPagination} from '../react-pagination/react-pagination';


const FilterItems = () => {
  const items = useSelector(getProductItemsOnPage);

  const [currentItemsOnPage, setCurrentItemsOnPage] = useState([]);
  const currentItems = useSelector(getProductItemsOnPage);
  const [itemOffset, setItemOffset] = useState(0);

  const pageTotalAmount = Math.ceil(currentItems.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const endOffset = itemOffset + ITEMS_PER_PAGE;
    setCurrentItemsOnPage(items.slice(itemOffset, endOffset));
  }, [items, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * (ITEMS_PER_PAGE % items.length);
    setItemOffset(newOffset);
  };

  return (
    <>
      <ProductList currentItems={currentItemsOnPage} />
      {items.length > ITEMS_PER_PAGE &&
        <ReactPagination
          handlePageClick={handlePageClick}
          pageTotalAmount={pageTotalAmount}
          isCurrentItemsLoading={false}
        />
      }
    </>
  );
};

export {FilterItems};