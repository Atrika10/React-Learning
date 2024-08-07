import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import moviesReducer from '../slices/moviesSlice';
import gptReducer from '../slices/gptSlice';
import configReducer from '../slices/configSlice';

const store = configureStore({
    reducer: {
        user : userReducer,
        movies : moviesReducer,
        gpt : gptReducer,
        config : configReducer,
    }

});
export default store;