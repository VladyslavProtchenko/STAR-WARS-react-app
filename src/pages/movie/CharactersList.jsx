import React from 'react';
import { Link } from 'react-router-dom';

//style
const characters ='flex bg-neutral-800 text-xs text-white wrap py-4 w-screen justify-center'
const characters_list ='max-w-3xl flex-wrap flex justify-left h-auto'
const link ='mr-2 hover:underline'

const CharactersList = ({movie}) => {
    return (
        <div className={characters}>
            <ul className={characters_list}>
                {movie.characters && movie.characters.map(item=>
                    <Link to={`/character/${item.url.substr(29).slice(0,-1)}`} key={item.name} className={link}>{item.name}</Link>
                )}
            </ul>
        </div>
    );
}

export default CharactersList;
