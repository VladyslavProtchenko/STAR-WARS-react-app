import React from 'react';
import { FilmCard } from '../../../pages/Movies/FilmCard/FilmCard';
import Loading from '../../Loading/Loading';

const MovieList = ({movies}) => {

    if(movies.length ===0) {return <div className='flex mt-[50%] justify-center items-center'><Loading/></div> }
    return (
        <div>
            {movies.map(film=>(
                <FilmCard film={film} key={film.id}/>
            ))
            }
        </div>
    );
}

export  {MovieList};
