import React from 'react';
import { useSelector } from 'react-redux';

import { getIsShipsLoading } from '../../store/ships/selectors';
import { Ship } from '../ship/ship';
import { LoadingScreen } from '../loading-screen/loading-screen';
import styles from './ship-list.module.scss';


const ShipList = ({ currentItems }) => {
  const isShipsLoading = useSelector(getIsShipsLoading);

  if (isShipsLoading) {
    return (
      <LoadingScreen />
    );
  };

  return (
    <ul className={styles.list}>
      {
        currentItems.length > 0
          ? currentItems.map((ship) =>
          <Ship
            id={ship.id}
            key={ship.id}
            type={ship.type}
            name={ship.name}
            port={ship.home_port}
            />)
          :
          <p style={{textAlign: 'center'}}>There are no ships to show</p>
      }
    </ul>
  )
}

export { ShipList };
