import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-store";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggle}>
      <span>My Cart</span>
      <span className={classes.badge}> 1 </span>
    </button>
  );
};

export default CartButton;
