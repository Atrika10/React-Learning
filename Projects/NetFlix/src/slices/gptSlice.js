import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        isGptSearchOpen: false,
        gptMovies: [],
        tmdbMovies: [],
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.isGptSearchOpen = !state.isGptSearchOpen;

        },
        setGptMovies: (state, action) => {
            state.gptMovies = action.payload;
        },
        setTmdbMovies: (state, action) => {
            state.tmdbMovies = action.payload;
        }

    }
})

export const { toggleGptSearch, setGptMovies, setTmdbMovies } = gptSlice.actions;
export default gptSlice.reducer;