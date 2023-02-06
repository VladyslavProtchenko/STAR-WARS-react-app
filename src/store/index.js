
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import movieReducer from './movieSlice';

export default configureStore({
    reducer:{
        movies: moviesReducer,
        movie:movieReducer,
    }
})