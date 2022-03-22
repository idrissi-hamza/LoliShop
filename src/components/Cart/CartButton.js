import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-store";

const CartButton = (props) => {
  const totalItems = useSelector((state) => state.shop.totalCart);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggle}>
      <span>My Cart</span>
      <span className={classes.badge}> {totalItems}</span>
    </button>
  );
};

export default CartButton;
