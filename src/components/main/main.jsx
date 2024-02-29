import styles from './main.module.scss';
import {PaginatedItems} from '../paginated-items/paginated-items';
import {Filter} from '../filter/filter';


const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <p>
          <a className={styles.author} href="https://github.com/Andrew-Sparrow" target='_blank' rel='noreferrer'>Produced by Andrew Pechersky</a>
        </p>
        <p>
          <a className={styles.author} href="https://github.com/Andrew-Sparrow/valantis-test" target='_blank' rel='noreferrer'>Project description</a>
        </p>
        <h1 className={styles.title}>Products</h1>
        <Filter />
        <main className={styles.main}>
          <PaginatedItems />
        </main>
      </div>
    </div>
  );
};

export {Main};
