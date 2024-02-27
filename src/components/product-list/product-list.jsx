import React from 'react';
import { useSelector } from 'react-redux';

import { Product } from '../product/product';
import { LoadingScreen } from '../loading-screen/loading-screen';
import styles from './product-list.module.scss';
import {getIsAllProductIDsLoading} from '../../store/products/selectors';


const ProductList = ({ currentItems }) => {
  const isAllProductIDsLoading = useSelector(getIsAllProductIDsLoading);

  if (isAllProductIDsLoading) {
    return (
      <LoadingScreen />
    );
  };

  return (
    <ul className={styles.list}>
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

export { ProductList };
