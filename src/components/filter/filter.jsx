import React from 'react';
import {useSelector} from 'react-redux';

import {getIsAllProductIDsLoading, getIsInitialItemsLoading} from '../../store/products/selectors';
import styles from './filter.module.scss';


const Filter = () => {
  const isAllProductIDsLoading = useSelector(getIsAllProductIDsLoading);
  const isInitialItemsLoading = useSelector(getIsInitialItemsLoading);

  if (isAllProductIDsLoading || isInitialItemsLoading) {
    return ''
  }

  return (
    <div className={styles.filter}>
      <section className={styles.row}>
        <select name="filters" className={styles.select}>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="brand">Brand</option>
        </select>
        <div className={styles.input_wrapper}>
          <input
            className={styles.input} // TODO add styles for active and inactive state for string style
            type="text"
            // onChange={handleChangeInputShipName}
            // value={inputValue}
          />
        </div>
      </section>
      <section>
        <button className={styles.button}>Reset filter</button>
        <button className={`${ styles.button } ${ styles.button_submit}`}>Submit filter</button>
      </section>
    </div>
  )
};

export {Filter};
