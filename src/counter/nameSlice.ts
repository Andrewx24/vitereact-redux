import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface nameState {
    value: string;
    types: string[];
}

const initialState: nameState = {
    value: '',
    types: [], // Start with an empty list
};

const nameSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        addType: (state, action: PayloadAction<string>) => {
            state.types.push(action.payload);
        },
    },
});

export const { setValue, addType } = nameSlice.actions;

export default nameSlice.reducer;
