import React from 'react';
import { useSelector } from 'react-redux';

// import { getIsProductsLoading } from '../../store/products/selectors';
import { Product } from '../product/product';
import { LoadingScreen } from '../loading-screen/loading-screen';
import styles from './product-list.module.scss';


const ProductList = ({ currentItems }) => {
  // const isProductsLoading = useSelector(getIsProductsLoading);
  const isProductsLoading = false;

  if (isProductsLoading) {
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
