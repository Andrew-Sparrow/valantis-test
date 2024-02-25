import React from 'react';

import styles from './loading-screen.module.scss';


function LoadingScreen() {
  return (
    <p className={styles.loading}>Loading...</p>
  );
}

export { LoadingScreen };
