import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { shopActions } from "../../store/shop-store";

const CartItem = (props) => {
  const { title, quantity, price, id } = props.item;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(shopActions.addItem({ title, quantity, price, id }));
  };

  const removeItemHandler = () => {
    dispatch(shopActions.removeItem({ id }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(price * quantity).toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
