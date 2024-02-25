import React from 'react';
import { useSelector } from 'react-redux';

// import { getIsproductsLoading } from '../../store/products/selectors';
import { Product } from '../product/product';
import { LoadingScreen } from '../loading-screen/loading-screen';
import styles from './product-list.module.scss';


const ProductList = ({ currentItems }) => {
  // const isproductsLoading = useSelector(getIsproductsLoading);
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
            type={product.type}
            name={product.name}
            port={product.home_port}
            />)
          :
          <p style={{textAlign: 'center'}}>There are no products to show</p>
      }
    </ul>
  )
}

export { ProductList };
