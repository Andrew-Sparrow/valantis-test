import React , {useState} from 'react';
import {useSelector} from 'react-redux';

import {getIsAllProductIDsLoading, getIsInitialItemsLoading} from '../../store/products/selectors';
import styles from './filter.module.scss';


const Filter = () => {
  const isAllProductIDsLoading = useSelector(getIsAllProductIDsLoading);
  const isInitialItemsLoading = useSelector(getIsInitialItemsLoading);

  const [inputValue, setInputValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('name');

  const handleChangeInputValue = (evt) => {
    const value = evt.target.value;
    setInputValue(value);
  };

  const handleButtonResetClick = (evt) => {
      console.log('click');
  };

  const handleButtonSubmitClick = (evt) => {
      console.log('click');
  };

  const handleSelectChange = (evt) => {
    setSelectedFilter(evt.target.value);
  };

  if (isAllProductIDsLoading || isInitialItemsLoading) {
    return '';
  }

  return (
    <div className={styles.filter}>
      <section className={styles.row}>
        <select name="filters" className={styles.select} onChange={handleSelectChange} value={selectedFilter}>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="brand">Brand</option>
        </select>
        <div className={styles.input_wrapper}>
          <input
            className={styles.input} // TODO add styles for active and inactive state for string style
            type="text"
            onChange={handleChangeInputValue}
            value={inputValue}
            required={true}
          />
        </div>
      </section>
      <section>
        <button className={styles.button}
          onClick={handleButtonResetClick}>Reset filter</button>
        <button className={`${ styles.button } ${ styles.button_submit}`}
          onClick={handleButtonSubmitClick}>Submit filter</button>
      </section>
    </div>
  )
};

export {Filter};
