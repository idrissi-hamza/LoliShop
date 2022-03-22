import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

import { useSelector } from "react-redux";

const Products = (props) => {
  const productsList = useSelector((state) => state.shop.productsList);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsList.map(({id,name,price,description}) => (
          <ProductItem
            key={id}
            id={id}
            title={name}
            price={price}
            description={description}
          />
        ))}
    
      </ul>
    </section>
  );
};

export default Products;
