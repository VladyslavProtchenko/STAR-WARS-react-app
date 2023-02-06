import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "./variables";

async function getInfo(link){
    const res = await fetch(link);
    return res.json();
}

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async function(_,{isRejectedWithValue}) {
        try {
            const res = await getInfo(`${API_URL}films/`);
            return res;
        } catch (error) {
            return isRejectedWithValue('server is wrong')
        }
    }
);


const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies:[],
        status: null,
        error:null,
    },
    reducers: {
        getMovies(state, action){

        },
    },
    extraReducers: {
        [fetchMovies.pending]: (state)=>{
            state.status = 'loading';
            state.error = null;
        },
        [fetchMovies.fulfilled]: (state,action)=>{
            state.status = 'resolved';
            state.movies = action.payload;
        },
        [fetchMovies.rejected]: (state,action)=>{
            state.status = 'rejected';
        },
    }
})

export const {getMovies} = moviesSlice.actions;
export default  moviesSlice.reducer;