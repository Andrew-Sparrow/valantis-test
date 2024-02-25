import React from 'react';
import styles from './ship.module.scss';
import { Link } from 'react-router-dom';


const Ship = (props) => {
  const {
    id,
    name,
    type,
    port,
  } = props;

  return (
    <Link to={`/ship/${ id }`} className={styles.ship}>
      <li className={styles.ship__item}>
        <h2 className={styles.ship__title}>{name}</h2>
        <div className={styles.ship__wrapper}>
          <p className={styles.ship__paragraph}><span className={styles.ship__detail}>Тип</span>{type}</p>
          <p className={styles.ship__paragraph}><span className={styles.ship__detail}>Порт</span>{port}</p>
        </div>
      </li>
    </Link >
  )
}

export { Ship };
