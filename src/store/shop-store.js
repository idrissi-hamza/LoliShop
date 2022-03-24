import { createSlice } from "@reduxjs/toolkit";

const shopStateInit = {
  productsList: [
    {
      id: "p1",
      name: "Test",
      description: "This is a first product",
      price: 6,
    },
    {
      id: "p2",
      name: "Test2",
      description: "This is a second product",
      price: 16,
    },
  ],
  cartItems: [],
  totalCart: 0,
  refresh: true,
  //
};

const shopSlice = createSlice({
  name: "shopSlice",
  initialState: shopStateInit,
  reducers: {
    replaceCart: (state, action) => {
      state.cartItems = action.payload.cartItems;
      state.totalCart = action.payload.totalCart;
      state.refresh = false;

    },

    addItem: (state, action) => {
      const newItem = action.payload;

      const indexOfNewItem = state.cartItems
        .map((item) => item.id)
        .indexOf(newItem.id);
      if (indexOfNewItem === -1) {
        state.cartItems.push({ ...newItem, quantity: 1 });
        state.totalCart++;
      } else {
        state.cartItems[indexOfNewItem].quantity++;
        state.totalCart++;
      }
    },
    removeItem: (state, action) => {
      const itemToRemove = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (itemToRemove.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.totalCart--;
      } else {
        itemToRemove.quantity--;
        state.totalCart--;
      }
      state.refresh = false;

      // state.cartItems.filter(
      //   (item) =>
      //     item.id !== action.payload.id ||
      //     (item.quantity !== 1 && item.id === action.payload.id)
      // );
      // filter(
      //   (el) =>
      //     el.id !== action.payload.id ||
      //     (el.id === action.payload.id && el.quantity !== 1)
      // );
    },
  },
});

export const shopActions = shopSlice.actions;
export default shopSlice;
