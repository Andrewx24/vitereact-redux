import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import pizzaReducer from './counter/pizzaSlice';

export const store = configureStore({
    
reducer: {
    counter: counterReducer,
    pizza: pizzaReducer,
} 

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;