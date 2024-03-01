import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import styles from './pagination.module.scss';
import {getAllProductIDs, getIsAllProductIDsLoading, getIsCurrentItemsLoading, getIsInitialItemsLoading} from '../../store/products/selectors';
import {fetchCurrentProducts} from '../../store/api-actions';
import {ITEMS_PER_PAGE} from '../../const';
import {setIsCurrentItemsLoading} from '../../store/actions';
import {ReactPagination} from '../react-pagination/react-pagination';


const Pagination = () => {
  const allProductIds = useSelector(getAllProductIDs);
  const isAllProductIDsLoading = useSelector(getIsAllProductIDsLoading);
  const isInitialItemsLoading = useSelector(getIsInitialItemsLoading);

  const [itemOffset, setItemOffset] = useState(0);

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
    <div className={ isCurrentItemsLoading ? styles.loading : ``}>
      {isAllProductIDsLoading || isInitialItemsLoading ? '' :
      <ReactPagination
        handlePageClick={handlePageClick}
        pageTotalAmount={pageTotalAmount}
        isCurrentItemsLoading={isCurrentItemsLoading}
      />}
    </div>
  );
};

export {Pagination};
