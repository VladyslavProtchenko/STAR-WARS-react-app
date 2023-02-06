import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "./variables";

async function getInfo(url) {
    const res = await fetch(url);
    const data = await res.json()
    return data;
}

export const fetchMovie = createAsyncThunk(
    "movie/fetchMovie",
    async function (id, { isRejectedWithValue }) {
        try {
            
            const film = await getInfo(`${API_URL}films/${id}`);
            const characters = film.characters;
            film.characters = [];

            for await (const character of characters) {
                const characterData = await getInfo(character);
                film.characters.push(characterData)
            }

            return film;
        } catch (error) {
            return isRejectedWithValue("server is wrong");
        }
    }
);

export const fetchCharacter = createAsyncThunk(
    "character/fetchMovie",
    async function (id, { isRejectedWithValue }) {
        try {
            const character = await getInfo(`${API_URL}people/${id}/`);
            return character;
        } catch (error) {
            return isRejectedWithValue("server is wrong");
        }
    }
);

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movie: [],
        character:{},
        status: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [fetchMovie.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchMovie.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.movie = action.payload;
        },
        [fetchMovie.rejected]: (state, action) => {
            state.status = "rejected";
        },
        [fetchCharacter.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchCharacter.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.character = action.payload;
        },
        [fetchCharacter.rejected]: (state, action) => {
            state.status = "rejected";
        },
    },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;