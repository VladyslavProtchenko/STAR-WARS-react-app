import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { API_URL } from '../../services/constants';
import { MovieList } from './MovieList/MovieList';

//style 
const list ='flex min-h-screen pt-14 flex-col items-center bg-slate-600 max-w-6xl w-full'
const MoviesAxios = () => {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        getMoviesAxios()
    },[])
    
    async function getMoviesAxios(){
        const res = await axios.get(`${API_URL}/films/`)
        setMovies(res.data.results)
    }

    return (
        <div className={list}>
            <MovieList key='007' movies={movies} setMovies={setMovies}/>
        </div>
    );
}

export  {MoviesAxios};
