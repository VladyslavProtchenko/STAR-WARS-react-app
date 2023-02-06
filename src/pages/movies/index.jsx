import React from 'react';
import { useSelector } from 'react-redux';
import { Error } from '../../components/Error/Error';
import { Loading } from '../../components/Loading/Loading';
import MovieList from './movieList/MovieList';

//style 
const box = 'flex w-screen h-screen justify-center items-center py-10 w-5xl'
const container = 'flex flex-col max-w-5xl w-full h-full items-center'

const Movies = () => {
    const {status, movies} = useSelector(state => state.movies)
    console.log(status);
    
    return (
        <div className={box}>
            <section className={container}>
                
                {status==='rejected' && <Error/>}
                {status==='loading' && <Loading/>}
                {status==='resolved' && <MovieList movies={movies.results} /> }
            </section>
        </div>
    );
}

export default Movies;
