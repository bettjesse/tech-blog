import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfettiState {
    isOpen: boolean;
}

const initialState: ConfettiState = {
    isOpen: false
};

const confettiSlice = createSlice({
    name: "confetti",
    initialState,
    reducers: {
        openConfetti: (state) => {
            state.isOpen = true;
        },
        closeConfetti: (state) => {
            state.isOpen = false;
        }
    }
});

export const { openConfetti, closeConfetti } = confettiSlice.actions;
export default confettiSlice.reducer;
