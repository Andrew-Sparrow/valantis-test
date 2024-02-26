import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
// import { getFilteredShips } from '../../store/ships/selectors';
import { HandySvg } from 'handy-svg';


import { ProductList } from '../product-list/product-list';
import './paginated-items.scss';
import iconChevronLeftSVG from '../../img/icons/Chevron_Left.svg';
import iconChevronRightSVG from '../../img/icons/Chevron_Right.svg';


// TODO css class names modules
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

const products = [
  {
    id: 1,
    name: 'product_name',
    brand: 'product_brand',
    price: 100
  },
  {
    id: 2,
    name: 'product_name',
    brand: 'product_brand',
    price: 100
  },
  {
    id: 3,
    name: 'product_name',
    brand: 'product_brand',
    price: 100
  },
  {
    id: 4,
    name: 'product_name',
    brand: 'product_brand',
    price: 100
  },
  {
    id: 5,
    name: 'product_name',
    brand: 'product_brand',
    price: 100
  },
  {
    id: 6,
    name: 'product_name',
    brand: 'product_brand',
    price: 100
  },
  {
    id: 7,
    name: 'product_name',
    brand: 'product_brand',
    price: 100
  },
];

const ITEMS_PER_PAGE = 3;

const PaginatedItems = () => {
  // const items = useSelector(getFilteredShips);
  const items = products;

  const [currentItemsOnPage, setCurrentItemsOnPage] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + ITEMS_PER_PAGE;
    setCurrentItemsOnPage(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / ITEMS_PER_PAGE));
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
          previousLabel={<IconChevronLeft/>}
          nextLabel={<IconChevronRight />}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          pageRangeDisplayed={0}
          marginPagesDisplayed={0}
          pageCount={pageCount}
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

export { PaginatedItems };
