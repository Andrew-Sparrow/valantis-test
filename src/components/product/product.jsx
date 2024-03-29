import React from 'react';
import styles from './product.module.scss';


const Product = (props) => {
  const {
    id,
    name,
    brand,
    price,
  } = props;

  return (
    <li className={styles.product__item}>
      <h2 className={styles.product__title}>{name}</h2>
      <div className={styles.product__wrapper}>
        <p className={styles.product__id}><span className={styles.product__detail}>id</span><span className={styles.product__info}>{id}</span></p>
        <p className={styles.product__paragraph}><span className={styles.product__detail}>Price</span><span className={styles.product__info}>{price}</span></p>
        <p className={styles.product__paragraph}><span className={styles.product__detail}>Brand</span><span className={styles.product__info}>{brand}</span></p>
      </div>
    </li>
  )
}

export { Product };
