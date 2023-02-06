import React from 'react';
import { NavLink } from 'react-router-dom';

//style
const box =' flex w-full px-20 py-10 rounded hover:bg-yellow-200 hover:text-white'
const title ='uppercase font-bold  text-2xl'
const release_date ='text-xs text-neutral-400 pl-3 italic mb-4'
const info ='text-sm pl-2'
const opening_crawl ='text-sm pt-4 pl-4 text-neutral-500 w-3/5'


const MovieCard = ({movie}) => {
    const id = movie.episode_id
    
    return (
        <NavLink to={`/movie/${id}`} className={box}>
            <div className='w-2/5'>
                <div className={title}>{movie.title}</div>
                <div className={release_date}>{movie.release_date}</div>
                
                <div className={info}>{movie.director}</div>
                <div className={info}>{movie.producer}</div>
            </div>
            <p className={opening_crawl}>{movie.opening_crawl}</p>
        </NavLink>
    );
}

export default MovieCard;
