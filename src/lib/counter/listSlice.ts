import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state interface
interface ListState {
  items: string[];
}

// Define the initial state
const initialState: ListState = {
  items: [],
};

// Create the list slice
const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload); // Add the new item to the list
    },
  },
});

// Export actions
export const { addItem } = listSlice.actions;

// Export the reducer
export default listSlice.reducer;
