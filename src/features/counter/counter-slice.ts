//DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice( {
    name: 'counter',
    initialState,
    reducers : {
        incremented(state) {
            // This is enabled by immer, which manages its immutable states under the hood.
            state.value ++;
        },

        amountAdded(state, action: PayloadAction<number>) {
            state.value += action.payload;
        }
    }
})


export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;