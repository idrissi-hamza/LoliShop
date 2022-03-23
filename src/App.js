import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-store";

import Notification from "./components/UI/Notification";
let isInitial = true;

function App() {
  const data = useSelector((state) => state.shop);
  // const totalCart = useSelector((state) => state.shop.totalCart);
  // const data = { cartItems, totalCart };

  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "sending ...",
          message: "sending cart data",
        })
      );

      const res = await fetch(process.env.REACT_APP_KEY, {
        method: "PUT",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("error");
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "success",
          message: "send cart data successefully",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch((err) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "error",
          message: "sending  cart data failed",
        })
      );
    });
  }, [data, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </>
  );
}

export default App;
