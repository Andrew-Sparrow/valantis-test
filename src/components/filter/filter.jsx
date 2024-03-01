import React , {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getIsAllProductIDsLoading, getIsFilterItemsLoading, getIsInitialItemsLoading} from '../../store/products/selectors';
import styles from './filter.module.scss';
import { fetchCurrentProducts } from '../../store/api-actions';
import { ITEMS_PER_PAGE } from '../../const';
import {
  setIsCurrentItemsLoading,
  setIsFilterItemsDisplayed,
  setIsFilterItemsLoading,
  setIsInitialItemsLoading
} from '../../store/actions';


const Filter = () => {
  const isAllProductIDsLoading = useSelector(getIsAllProductIDsLoading);
  const isInitialItemsLoading = useSelector(getIsInitialItemsLoading);
  const isFilterItemsLoading = useSelector(getIsFilterItemsLoading);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('product');
  const [mistakeInfo, setMistakeInfo] = useState(null);

  const verifyMistake = () => {
    if(inputValue === '') {
      setMistakeInfo('Input field should not be empty');
      return true;
    } else if (selectedFilter === 'price' && isNaN(inputValue)) {
      setMistakeInfo('Input field should be a number');
      return true;
    } else {
      return false;
    }
  };

  const handleChangeInputValue = (evt) => {
    let inputValue = evt.target.value;

    setInputValue(inputValue);
    setMistakeInfo(null);
  };

  const handleButtonResetClick = (evt) => {
      setMistakeInfo(null);
      setInputValue('');
      setSelectedFilter('product');

      dispatch(setIsInitialItemsLoading(true));
      dispatch(setIsFilterItemsDisplayed(false));
      dispatch(fetchCurrentProducts({
        "action": "get_ids",
        "params": {"offset": 0, "limit": ITEMS_PER_PAGE}
      }))
  };

  const handleButtonSubmitClick = (evt) => {
    const isMistake = verifyMistake();
    let inputData = inputValue;

    if (!isMistake) {
      if (selectedFilter === 'price' && mistakeInfo === null) {
        inputData = Number(inputValue);
      }

      dispatch(setIsFilterItemsDisplayed(true));
      dispatch(setIsFilterItemsLoading(true)); // to disable filter buttons
      dispatch(setIsCurrentItemsLoading(true));
      dispatch(fetchCurrentProducts({
        "action": "filter",
        "params": {[selectedFilter]: inputData}
      }));
    }
  };

  const handleSelectChange = (evt) => {
    verifyMistake();
    setSelectedFilter(evt.target.value);
    setMistakeInfo(null);
    setInputValue('');
  };

  if (isAllProductIDsLoading || isInitialItemsLoading) {
    return '';
  }

  return (
    <div className={styles.filter}>
      <p className={styles.mistake}>{mistakeInfo}</p>
      <section className={styles.row}>
        <select disabled={isFilterItemsLoading} name="filters" className={styles.select} onChange={handleSelectChange} value={selectedFilter}>
          <option value="product">Name</option>
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
            disabled={isFilterItemsLoading}
          />
        </div>
      </section>
      <section>
        <button className={styles.button}
          onClick={handleButtonResetClick}>Reset filter</button>
        <button disabled={isFilterItemsLoading} className={`${ styles.button } ${ styles.button_submit}`}
          onClick={handleButtonSubmitClick}>{isFilterItemsLoading ? 'Loading...' : 'Submit filter'}</button>
      </section>
    </div>
  )
};

export {Filter};
