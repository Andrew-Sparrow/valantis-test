import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import styles from './not-found.module.scss';

function NotFound() {
  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.paragraph}>Page Not Found</h2>
        <Link className={styles.link} to={AppRoute.MAIN}>Return to main page</Link>
      </div>
    </div>
  );
}

export { NotFound };
