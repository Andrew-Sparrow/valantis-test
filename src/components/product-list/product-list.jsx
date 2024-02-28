import React from 'react';
import {useSelector} from 'react-redux';

import {Product} from '../product/product';
import {LoadingScreen} from '../loading-screen/loading-screen';
import styles from './product-list.module.scss';
import {getIsAllProductIDsLoading, getIsInitialItemsLoading, getIsCurrentItemsLoading} from '../../store/products/selectors';


const ProductList = ({currentItems}) => {
  const isAllProductIDsLoading = useSelector(getIsAllProductIDsLoading);
  const isInitialItemsLoading = useSelector(getIsInitialItemsLoading);
  const isLoading = useSelector(getIsCurrentItemsLoading);

  if (isAllProductIDsLoading || isInitialItemsLoading) {
    return (
      <LoadingScreen />
    );
  };

  return (
    <ul className={ isLoading ? `${styles.loading} ${styles.list}` : `${styles.list}`}>
      {
        currentItems.length > 0
          ? currentItems.map((product) =>
            <Product
              id={product.id}
              key={product.id}
              name={product.name}
              brand={product.brand}
              price={product.price}
            />)
          :
          <p style={{textAlign: 'center'}}>There are no products to show</p>
      }
    </ul>
  )
}

export {ProductList};
