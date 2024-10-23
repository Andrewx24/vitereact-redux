import { configureStore } from '@reduxjs/toolkit';
// Import the counter reducer from the correct file path
import counterReducer from '../lib/counter/counterSlice';
import listReducer from '../lib/counter/listSlice';
// Configure the store
export const store = configureStore({
  reducer: {
    counter: counterReducer, // Ensure the reducer is referenced correctly
    list: listReducer,
  },
});

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {counter: CounterState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
