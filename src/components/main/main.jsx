import styles from './main.module.scss';
import {PaginatedItems} from '../paginated-items/paginated-items';
import {Filter} from '../filter/filter';
import {getIsFilterItemsDisplayed} from '../../store/products/selectors';
import {FilterItems} from '../filter-items/filter-items';
import {useSelector} from 'react-redux';


const Main = () => {
  const isFilterItemsDisplayed = useSelector(getIsFilterItemsDisplayed);

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
          {isFilterItemsDisplayed ? <FilterItems/> : <PaginatedItems />}
        </main>
      </div>
    </div>
  );
};

export {Main};
