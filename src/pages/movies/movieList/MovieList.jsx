import React from 'react';
import { FilmCard } from '../FilmCard/FilmCard';

const MovieList = ({films, query}) => {

    console.log(films);
    return (
        <div className=''>
            {
                films.filter(
                    item => item.title.toLowerCase().includes(query)
                    ).map(film=> (<FilmCard film={film} key={new Date()}/>))
            }
        </div>
    );
}

export default MovieList;
