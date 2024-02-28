import {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import {useSelector, useDispatch} from 'react-redux';
import {HandySvg} from 'handy-svg';

import './pagination.scss';
import iconChevronRightSVG from '../../img/icons/Chevron_Right.svg';
import iconChevronLeftSVG from '../../img/icons/Chevron_Left.svg';

import {getAllProductIDs, getIsAllProductIDsLoading, getIsCurrentItemsLoading} from '../../store/products/selectors';
import {fetchCurrentProducts} from '../../store/api-actions';
import {ITEMS_PER_PAGE} from '../../const';
import {setIsCurrentItemsLoading} from '../../store/actions';


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


const Pagination = () => {
  const allProductIds = useSelector(getAllProductIDs);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  const isCurrentItemsLoading = useSelector(getIsCurrentItemsLoading);
  const dispatch = useDispatch();

  const pageTotalAmount = Math.ceil(allProductIds.length / ITEMS_PER_PAGE);

  useEffect(() => {
    dispatch(fetchCurrentProducts({
      "action": "get_ids",
      "params": {"offset": itemOffset, "limit": ITEMS_PER_PAGE}
    }))
  }, [itemOffset, isCurrentItemsLoading]);

  // example https://www.npmjs.com/package/react-paginate
  const handlePageClick = (event) => {
    const newOffset = event.selected * (ITEMS_PER_PAGE % allProductIds.length);
    setItemOffset(newOffset);
    dispatch(setIsCurrentItemsLoading(true));
  };

  return (
    <>
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
          disableInitialCallback={isCurrentItemsLoading}
        />
    </>
  );
};

export {Pagination};
