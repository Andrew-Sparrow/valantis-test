import {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import {useSelector, useDispatch} from 'react-redux';
import {HandySvg} from 'handy-svg';

import './paginated-items.scss';
import iconChevronRightSVG from '../../img/icons/Chevron_Right.svg';
import iconChevronLeftSVG from '../../img/icons/Chevron_Left.svg';

import {ProductList} from '../product-list/product-list';
import {getAllProductIDs, getProductItemsOnPage} from '../../store/products/selectors';
import {fetchCurrentProducts} from '../../store/api-actions';
import {ITEMS_PER_PAGE} from '../../const';
import {setIsCurrentItemsLoading, setOffset} from '../../store/actions';


const IconChevronLeft = () => (
  <HandySvg
    className="prev-icon"
    src={iconChevronLeftSVG}
    width="24"
    height="24"
  />
);

const IconChevronRight = () => (
  <HandySvg
    className="next-icon"
    src={iconChevronRightSVG}
    width="24"
    height="24"
  />
);


const PaginatedItems = () => {
  const allProductIds = useSelector(getAllProductIDs);
  const currentItems = useSelector(getProductItemsOnPage);
  const dispatch = useDispatch();

  // const [currentItemsOnPage, setCurrentItemsOnPage] = useState([]);
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);

  // let itemOffset = 0;

  // dispatch(fetchCurrentProducts({
  //   "action": "get_ids",
  //   "params": {"offset": itemOffset, "limit": ITEMS_PER_PAGE}
  // }));

  // useEffect(() => {
  //   const endOffset = itemOffset + ITEMS_PER_PAGE;
  //   setCurrentItemsOnPage(items.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(items.length / ITEMS_PER_PAGE));
  // }, [items, itemOffset]);

  // useEffect(() => {
  //   dispatch(fetchCurrentProducts({
  //     "action": "get_ids",
  //     "params": {"offset": itemOffset, "limit": ITEMS_PER_PAGE}
  // }));
  // }, [itemOffset]);

  // const endOffset = itemOffset + ITEMS_PER_PAGE;
  // const currentItemsOnPage = items.slice(itemOffset, endOffset);
  const pageTotalAmount = Math.ceil(allProductIds.length / ITEMS_PER_PAGE);

  const handlePageClick = (event) => {
    dispatch(setIsCurrentItemsLoading(true));
    // const newItemOffset = (event.selected * ITEMS_PER_PAGE) % allProductIds.length;
    const newOffset = event.selected * (ITEMS_PER_PAGE % allProductIds.length);
    // setItemOffset(newItemOffset);
    dispatch(fetchCurrentProducts({
      "action": "get_ids",
      "params": {"offset": newOffset, "limit": ITEMS_PER_PAGE}
    }));

    dispatch(setOffset(newOffset));
  };

  return (
    <>
      <ProductList currentItems={currentItems} />
      {allProductIds.length > ITEMS_PER_PAGE &&
        <ReactPaginate
          previousLabel={<IconChevronLeft />}
          nextLabel={<IconChevronRight />}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          pageRangeDisplayed={0}
          marginPagesDisplayed={1}
          pageCount={pageTotalAmount}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="previous"
          previousLinkClassName="previous-link"
          nextClassName="next"
          nextLinkClassName="next-link"
          activeClassName="active"
          renderOnZeroPageCount={null}
          disabledClassName="disabled"
          disabledLinkClassName="disabled-link"
        />
      }
    </>
  );
};

export {PaginatedItems};
