import styles from './main.module.scss';
import { ProductList } from '../product-list/product-list';


const product_list = [
  {
    id: 1,
    name: 'product_name',
    brand: 'product_brand',
    price: 100
  },
  {
    id: 2,
    name: 'product_name',
    brand: 'product_brand',
    price: 100
  },
  {
    id: 3,
    name: 'product_name',
    brand: 'product_brand',
    price: 100
  },
  {
    id: 4,
    name: 'product_name',
    brand: 'product_brand',
    price: 100
  },
  {
    id: 5,
    name: 'product_name',
    brand: 'product_brand',
    price: 100
  },
  {
    id: 6,
    name: 'product_name',
    brand: 'product_brand',
    price: 100
  },
  {
    id: 7,
    name: 'product_name',
    brand: 'product_brand',
    price: 100
  },
]

const Main = () => {
  return (
    <div className={styles.app}>
      <ProductList currentItems={product_list}/>
    </div>
  );
};

export { Main };
