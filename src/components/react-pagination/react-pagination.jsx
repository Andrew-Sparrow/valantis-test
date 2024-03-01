import React from 'react';
import ReactPaginate from 'react-paginate';

import { IconChevronLeft, IconChevronRight } from '../icon-chevron/icon-chevron';
import styles from './react-pagination.module.scss';

const ReactPagination = ({handlePageClick, pageTotalAmount, isCurrentItemsLoading}) => {
  return (
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
    disableInitialCallback={isCurrentItemsLoading}
  />
  )
};

export {ReactPagination};