import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Get the initial value from localStorage, or default to 0
const initialValue = localStorage.getItem('counterValue')
  ? Number(localStorage.getItem('counterValue'))
  : 0;

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: initialValue, // Initialize from localStorage
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;
