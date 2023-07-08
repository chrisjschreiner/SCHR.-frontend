import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    // addProduct: (state, action) => {
    //   return state.map((item) => {
    //     if (item.id !== action.payload.id) {
    //       return item;
    //     }

    //     return {
    //       ...item,
    //       added: true,
    //     };
    //   });
    // },
    // removeItem: (state, action) => {
    //   return state.map((item) => {
    //     if (item.id !== action.payload.id) {
    //       return item;
    //     }

    //     return {
    //       ...item,
    //       added: false,
    //     };
    //   });
    // },

    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      // state.total += action.payload.price * action.payload.quantity;
    },
    //From YT comment 3rd vid when searched for "Total": Update cart product qty. I got stuck on this hope it helps someone out.
    // You should be able to work out the remove, export imports and listeners but let me know if you get stuck.
    addProductQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product._id === action.payload
      );
      product.quantity++;
      state.total += product.price;
    },
    removeProduct: (state, action) => {
      // let index = state.products.indexOf(action.payload);
      // state.quantity -= action.payload;
      // state.products.splice(index, 1);
      // state.products = [...state.products];

      const itemId = action.payload;
      const products = state.products.filter((item) => item._id !== itemId);
      state.products = products;
      state.quantity -= 1;
    },
    calculateTotals: (state) => {
      let quantity = 0;
      let total = 0;
      state.products.forEach((item) => {
        quantity += item.quantity;
        total += item.quantity * item.price;
      });
      state.quantity = quantity;
      state.total = total;
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, clearCart, removeProduct, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
