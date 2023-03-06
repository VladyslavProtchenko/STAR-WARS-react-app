import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../../services/constants';
import Loading from '../Loading/Loading';

const CharacterAxios = () => {
    
    const {id} = useParams()
    const [character,setCharacter] = useState(undefined)

    async function getCharacterInfo(id) {
        const res = await axios.get(`${API_URL}/people/${id}`)
        setCharacter(res.data)
    }
    
    useEffect(()=>{
        getCharacterInfo(id)
    },[])
    console.log(character);
    
    if(character === undefined)return <div className='flex h-screen justify-center items-center'><Loading/></div>
    
    return (
        <main className="flex flex-col pt-16 w-full max-w-5xl">
            <h1 className="font-bold text-5xl mb-10">{character.name}</h1>
            <ul className="flex flex-col text-left px-[10%] pb-6">
                <li>Birth year: {character.birth_year}</li>
                <li>Gender: {character.gender}</li>
                <li>Height: {character.height}</li>
                <li>Mass: {character.mass}</li>
                <li>Skin color: {character.skin_color}</li>
                <li>Hair color: {character.hair_color}</li>
                <li>Eye color: {character.eye_color}</li>
            </ul>
                <ul className='flex flex-col px-[10%] text-left pb-10'>
                    <h1 className='text-3xl mb-2'>Movies:</h1>
                    {
                        character.films.map(item=>(
                            <li>
                                <Link key={item}to={`/movie/${item.substring(28).slice(0,-1)}`}>{`Movie: ${item.substring(28).slice(0,-1)}`}</Link>
                            </li>
                        ))
                    }
                </ul>
        </main>
    )
}

export default CharacterAxios;

//to={`/movie/${item.substring(28).slice(0,-1)}`}