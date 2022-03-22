import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const Cart = (props) => {
  const isShown = useSelector((state) => state.ui.isShown);
  const cartItems = useSelector((state) => state.shop.cartItems);

  return (
    isShown && (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      </Card>
    )
  );
};

export default Cart;
