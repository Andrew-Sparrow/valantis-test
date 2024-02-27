import styles from './main.module.scss';
import {PaginatedItems} from '../paginated-items/paginated-items';


const Main = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Products</h1>
      <main className={styles.main}>
        <PaginatedItems />
      </main>
    </div>
  );
};

export {Main};
