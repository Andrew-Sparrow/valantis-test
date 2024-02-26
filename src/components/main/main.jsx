import styles from './main.module.scss';
import { PaginatedItems } from '../paginated-items/paginated-items';



const Main = () => {
  return (
    <div className={styles.app__wrapper}>
    <div>
      <h1 className={styles.title}>SpaceX Ships</h1>
      <main className={styles.main}>
        <PaginatedItems />
      </main>
    </div>
  </div>
  );
};

export { Main };
