import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const cartItems = useSelector((state) => state.shop.cartItems);
  const totalCart = useSelector((state) => state.shop.totalCart);
  const data = { cartItems, totalCart };

  useEffect(() => {
    fetch(process.env.REACT_APP_KEY, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }, [data]);
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
