import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import pizzaReducer from './counter/pizzaSlice';
import nameReducer from './counter/nameSlice';

export const store = configureStore({
    
reducer: {
    counter: counterReducer,
    pizza: pizzaReducer,
    name: nameReducer,
} 

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;