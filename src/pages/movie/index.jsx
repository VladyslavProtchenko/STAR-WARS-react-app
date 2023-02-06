import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Error } from '../../components/Error/Error';
import { Loading } from '../../components/Loading/Loading';
import { fetchMovie } from '../../store/movieSlice';
import CharactersList from './CharactersList';
import InfoMovie from './InfoMovie';

//style 
const box = 'min-h-screen w-screen flex flex-col items-center bg-yellow-200'
const poster ='h-full bg-white w-screen bg-[url("https://imgix.bustle.com/uploads/image/2021/5/17/1eb54488-e3a6-41bb-8115-cc085f281e9a-guardians-galaxy-2-full-team-header.jpeg?w=2000&h=640&fit=crop&crop=faces&auto=format%2Ccompress")] bg-no-repeat bg-cover'

const Movie = () => {
    const {id} = useParams()
    const {status, movie} = useSelector(state=>state.movie);
    const dispatch = useDispatch()
    console.log(status);

    useEffect(()=>{
        dispatch(fetchMovie(id));
    },[])

    return (
        
        <div className={box}>
            {status==='loading' && <Loading/>}
            {status==='rejectd' && <Error/>}
            {status==='resolved' && 
                <>
                    <InfoMovie movie={movie}/>
                    <div className={poster}></div>
                    <CharactersList movie={movie}/>
                </>
            }
        </div>
    );
}

export default Movie;
