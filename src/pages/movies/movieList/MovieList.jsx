import React from 'react';
import MovieCard from '../movieCard/MovieCard';
//styles 
const box = 'flex flex-col w-full items-center wrap'
const header = 'mb-6 uppercase font-black text-5xl text-neutral-700'

const MovieList = ({movies}) => {
    return (
        <nav className={box}>
            <h1 className={header}>REDUX WARS</h1>
            {movies.map(movie=> <MovieCard key={movie.episode_id} movie={movie}/>)}
        </nav>
    );
}

export default MovieList;
