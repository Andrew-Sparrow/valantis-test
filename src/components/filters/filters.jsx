import React from 'react';
import { HandySvg } from 'handy-svg';
import { useMediaQuery } from 'react-responsive';

import styles from './filters.module.scss';
import iconArrowLeftSVG from '../../img/icons/Arrow_Left.svg';
import { MultiSelect } from '../multi-select/multi-select';
import { RadioBlock } from '../radio-block/radio-block.jsx';


const IconArrowLeft = ({ onClick }) => (
  <HandySvg
    className={styles.button}
    src={iconArrowLeftSVG}
    width="24"
    height="24"
    onClick={onClick}
  />
);

const Filters = (props) => {
  const {
    onClick,
    handleChangeInputShipName,
    handleChangeCheckedPorts,
    handleChangeCheckedShipType,
    inputValue,
    selectedShipPorts,
    checkedShipType
  } = props;

  const isDesktop = useMediaQuery({
    query: '(min-width: 1920px)'
  });

  return (
    <aside className={styles.filters} >
      <div className={styles.title_container}>
        {!isDesktop && <IconArrowLeft onClick={onClick} />}
        <h2 className={styles.title}>Фильтры</h2>
      </div>
      <section className={styles.filters_box}>
        <h3 className={styles.name}>Название</h3>
        <div className={styles.input_wrapper}>
          <input
            className={styles.input} // TODO add styles for active and inactive state for string style
            type="text"
            onChange={handleChangeInputShipName}
            value={inputValue}
          />
        </div>
        <MultiSelect
          handleChangeCheckedPorts={handleChangeCheckedPorts}
          selectedShipPorts={selectedShipPorts}
        />
        <RadioBlock
          checkedShipType={checkedShipType}
          handleChangeCheckedShipType={handleChangeCheckedShipType}
        />
      </section>
    </aside>
  )
};

export { Filters };
