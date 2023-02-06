import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Error } from '../../components/Error/Error';
import { Loading } from '../../components/Loading/Loading';
import { fetchCharacter } from '../../store/movieSlice';

//styles
const box ='flex flex-col max-w-3xl w-full pt-24'
const name = 'uppercase font-bold text-7xl mb-10 text-center'
const info = 'flex flex-col text-left mb-8'

const films ='flex border-t-[0.5px] border-yellow-300 p-5'  
const movie =' uppercase font-bold mr-4 text-blackneutral-600 tracking-wide hover:text-yellow-400'

const Character = () => {
    const {id} = useParams()
    const {status, character} = useSelector(state=>state.movie);
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchCharacter(id));
    },[])

    return (
        <div className={box}>
            {status==='loading' && <Loading/>}
            {status==='rejected' && <Error/>}
            {status==='resolved' && 
                <>
                    <h1 className={name}>{character.name}</h1>
                    <ul className={info}>
                        <li>Gender: {character.gender}</li>
                        <li>Birth date:{character.birth_year}</li>
                        <li>Height: {character.height}</li>
                        <li>Mass: {character.mass}</li>
                        <li>Hair color: {character.hair_color}</li>
                        <li>Eye color: {character.eye_color}</li>
                    </ul>
                    <ul className={films}>
                        {character.name && character.films.map(item=>
                                <Link to={`/movie/${item.slice(28,-1)}`} className={movie} >Episode {item.slice(28,-1)}</Link>
                            )}
                    </ul>
                </>
            }
        </div>
    );
}

export  {Character};
