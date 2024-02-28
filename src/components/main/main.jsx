import styles from './main.module.scss';
import {PaginatedItems} from '../paginated-items/paginated-items';


const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <a className={styles.author} href="https://github.com/Andrew-Sparrow" target='_blank' rel='noreferrer'>Produced by Andrew Pechersky</a>
        <h1 className={styles.title}>Products</h1>
        <main className={styles.main}>
          <PaginatedItems />
        </main>
      </div>
    </div>
  );
};

export {Main};
