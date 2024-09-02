import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PizzaState {
    value: string; // assuming this is a typo, 'vale' should be 'value'
    types: Array<'pepperoni' | 'hawaiian' | 'meatlovers'>; // corrected the pizza types and made it an array
}

const initialState: PizzaState = {
    value: '',
    types: ['pepperoni', 'hawaiian', 'meatlovers'], // example initial state
};

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        addType: (state, action: PayloadAction<'pepperoni' | 'hawaiian' | 'meatlovers'>) => {
            state.types.push(action.payload);
        },
    },
});

export const { setValue, addType } = pizzaSlice.actions;

export default pizzaSlice.reducer;
