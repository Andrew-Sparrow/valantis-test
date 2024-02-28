import React from 'react';

import styles from './filter.module.scss';


const Filter = () => {
  return (
    <div className={styles.filter}>
      <section className={styles.row}>
        <select name="filters" className={styles.select}>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="brand">Brand</option>
        </select>
        <input type="text" className={styles.input}/>
      </section>
      <section>
        <button className={styles.button}>Submit filter</button>
        <button className={`${styles.button} ${styles.button_reset}`}>Reset filter</button>
      </section>
    </div>


  )
};

export {Filter};
