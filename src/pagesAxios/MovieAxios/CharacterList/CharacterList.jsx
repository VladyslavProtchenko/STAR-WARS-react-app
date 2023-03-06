import React from 'react';
import { Link } from 'react-router-dom';

//stylre
const actors ='bg-neutral-200 w-screen flex flex-col justify-center items-center'
const title = 'px-[10%] text-left text-2xl font-bold self-start my-3'
const list ='flex max-w-6xl flex-wrap p-2'
const one ='hover:underline mr-2 text-xs'


const CharacterList = ({names}) => {
    console.log(names);
    
    return (
        <div className={actors}>
            <h2 className={title}>Actors:</h2>
            <ul className={list}>{
                names.map(item=>(
                    <li key={item.id}>    
                        <Link to={`/axios/character/${item.url.substr(29).slice(0,-1)}`} className={one}>{item.name}</Link>
                    </li>
                ))
            }
            </ul>
        </div>
    );
}

export default CharacterList;
