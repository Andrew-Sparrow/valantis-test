import {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import {useSelector} from 'react-redux';

import styles from'../pagination/pagination.module.scss';

import {getProductItemsOnPage} from '../../store/products/selectors';
import {ProductList} from '../product-list/product-list';
import {ITEMS_PER_PAGE} from '../../const';
import { IconChevronLeft, IconChevronRight } from '../icon-chevron/icon-chevron';


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
        <ReactPaginate
          previousLabel={<IconChevronLeft />}
          nextLabel={<IconChevronRight />}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          pageRangeDisplayed={0}
          marginPagesDisplayed={1}
          pageCount={pageTotalAmount}
          pageClassName={styles.page_item}
          pageLinkClassName={styles.page_link}
          previousClassName={styles.previous}
          previousLinkClassName={styles.previous_link}
          nextClassName={styles.next}
          nextLinkClassName={styles.next_link}
          activeClassName={styles.active}
          renderOnZeroPageCount={null}
          disabledClassName={styles.disabled}
          disabledLinkClassName={styles.disabled_link}
          disableInitialCallback={false}
        />
      }
    </>
  );
};

export {FilterItems};