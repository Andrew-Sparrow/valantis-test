import React , {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getIsAllProductIDsLoading, getIsFilterItemsLoading, getIsInitialItemsLoading} from '../../store/products/selectors';
import styles from './filter.module.scss';
import { fetchCurrentProducts } from '../../store/api-actions';
import { ITEMS_PER_PAGE } from '../../const';
import {
  setIsFilterItemsDisplayed,
  setIsFilterItemsLoading,
  setIsInitialItemsLoading
} from '../../store/actions';


const Filter = () => {
  const isAllProductIDsLoading = useSelector(getIsAllProductIDsLoading);
  const isInitialItemsLoading = useSelector(getIsInitialItemsLoading);
  const isFilteredItemsLoading = useSelector(getIsFilterItemsLoading);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('product');
  const [mistakeInfo, setMistakeInfo] = useState('');

  const verifyMistake = () => {
    if (selectedFilter === 'price' && isNaN(inputValue)) {
      setMistakeInfo('Input field should be a number');
    }

    if(inputValue === '') {
      setMistakeInfo('Input field should not be empty');
    }
  };

  const handleChangeInputValue = (evt) => {
    let inputValue = evt.target.value;
    setInputValue(inputValue);
    setMistakeInfo('');
  };

  const handleButtonResetClick = (evt) => {
      setMistakeInfo('');
      setInputValue('');

      dispatch(setIsInitialItemsLoading(true));
      dispatch(setIsFilterItemsLoading(true));
      dispatch(fetchCurrentProducts({
        "action": "get_ids",
        "params": {"offset": 0, "limit": ITEMS_PER_PAGE}
      }))
  };

  const handleButtonSubmitClick = (evt) => {
    verifyMistake();
    let inputData = inputValue;

    if (mistakeInfo === '') {
      console.log(mistakeInfo);
      console.log(inputValue);

      if (selectedFilter === 'price') {
        inputData = Number(inputValue);
      }

      dispatch(setIsFilterItemsDisplayed(true));
      dispatch(fetchCurrentProducts({
        "action": "filter",
        "params": {[selectedFilter]: inputData}
      }));
    }
  };

  const handleSelectChange = (evt) => {
    verifyMistake();
    setSelectedFilter(evt.target.value);
    setMistakeInfo('');
    setInputValue('');
  };

  if (isAllProductIDsLoading || isInitialItemsLoading) {
    return '';
  }

  return (
    <div className={styles.filter}>
      <p className={styles.mistake}>{mistakeInfo}</p>
      <section disabled={isFilteredItemsLoading} className={styles.row}>
        <select name="filters" className={styles.select} onChange={handleSelectChange} value={selectedFilter}>
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
            disabled={isFilteredItemsLoading}
          />
        </div>
      </section>
      <section>
        <button disabled={isFilteredItemsLoading} className={styles.button}
          onClick={handleButtonResetClick}>Reset filter</button>
        <button disabled={isFilteredItemsLoading} className={`${ styles.button } ${ styles.button_submit}`}
          onClick={handleButtonSubmitClick}>Submit filter</button>
      </section>
    </div>
  )
};

export {Filter};
