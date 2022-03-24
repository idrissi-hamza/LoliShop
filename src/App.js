import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Notification from "./components/UI/Notification";
import { shopActions } from "./store/shop-store";
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shop.cartItems);
  const totalCart = useSelector((state) => state.shop.totalCart);
  const refresh = useSelector((state) => state.shop.refresh);

  const data = useMemo(() => {
    return { cartItems, totalCart };
  }, [cartItems, totalCart]);

  const initialNotif = useMemo(
    () => ({
      show: false,
      status: "",
      title: "",
      message: "",
    }),
    []
  );
  const [notification, setNotification] = useState(initialNotif);
  useEffect(() => {
    fetch(process.env.REACT_APP_KEY)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(shopActions.replaceCart(data));
      });
  }, [dispatch]);
  useEffect(() => {
    if (refresh) {
      return;
    }
    const sendCartData = async () => {
      setNotification({
        show: true,
        status: "pending",
        title: "sending ...",
        message: "sending cart data",
      });

      const res = await fetch(process.env.REACT_APP_KEY, {
        method: "PUT",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("error");
      }
      setNotification({
        show: true,
        status: "success",
        title: "success",
        message: "send cart data successefully",
      });
    };
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch((err) => {
      setNotification({
        show: true,
        status: "error",
        title: "error",
        message: "sending  cart data failed",
      });
    });

    const timer = setTimeout(() => setNotification(initialNotif), 1000);
    return () => clearTimeout(timer);
  }, [data, initialNotif, refresh]);

  return (
    <>
      {notification.show && (
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
