import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        isGptSearchOpen : false,
    },
    reducers : {
       toggleGptSearch : (state) => {
           state.isGptSearchOpen = !state.isGptSearchOpen;
           
       }
    }
})

export const { toggleGptSearch } = gptSlice.actions;
export default gptSlice.reducer;