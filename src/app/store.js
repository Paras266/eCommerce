import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/product-list/productSlice';
import loginReducer from '../features/auth/loginSlice';

  export const store = configureStore({
    reducer: {
      counter: counterReducer,
      product : productReducer,
      login : loginReducer
    },
  });
