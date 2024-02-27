import {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import {useSelector, useDispatch} from 'react-redux';
import {HandySvg} from 'handy-svg';

import './paginated-items.scss';
import iconChevronRightSVG from '../../img/icons/Chevron_Right.svg';
import iconChevronLeftSVG from '../../img/icons/Chevron_Left.svg';

import {ProductList} from '../product-list/product-list';
import {getAllProductIDs, getIsProductItemsLoading, getProductItemsOnPage} from '../../store/products/selectors';
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
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)

  const currentItems = useSelector(getProductItemsOnPage);
  const dispatch = useDispatch();

  const pageTotalAmount = Math.ceil(allProductIds.length / ITEMS_PER_PAGE);

  useEffect(() => {
    dispatch(fetchCurrentProducts({
      "action": "get_ids",
      "params": {"offset": itemOffset, "limit": ITEMS_PER_PAGE}
    }))
  }, [itemOffset]);

  const handlePageClick = (event) => {
    dispatch(setIsCurrentItemsLoading(true));
    const newOffset = event.selected * (ITEMS_PER_PAGE % allProductIds.length);
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    // dispatch(fetchCurrentProducts({
    //   "action": "get_ids",
    //   "params": {"offset": newOffset, "limit": ITEMS_PER_PAGE}
    // }))
    setItemOffset(newOffset);
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
