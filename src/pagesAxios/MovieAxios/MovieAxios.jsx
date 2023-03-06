// import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { useParams,  } from 'react-router-dom'
import Loading from '../Loading/Loading';
import CharacterList from './CharacterList/CharacterList';
import { getChatarcers, getMovieInfo } from './movie.services';
import {style} from './styles'




const  MovieAxios =  () => {
    const [movie, setMovie] = useState('')
    const {id} = useParams();
    const [characters, setCharacters] = useState([])
    
    useEffect(()=>getChatarcers(id, setCharacters),[])
    useEffect(()=>getMovieInfo(id, setMovie),[])
    
    if(movie==='') { return<main className={style.loading}><Loading/></main>}
    return (
        <main className={style.box}>
            <article className={style.info}>
                <h1 className={style.title}>{movie.title}</h1>
                <h2 className={style.year}>{movie.release_date}</h2>
                <h3 className={style.director}> Main Director: {movie.director}</h3>
                <h3 className={style.producer}> Main Producer: {movie.producer}</h3>
                <p className={style.text}>{movie.opening_crawl}</p>
            </article>

            {characters.length===0
            ? <div className='flex bg-neutral-200 w-screen justify-center items-center min-h-[60px]'><Loading/></div>
            : <CharacterList names={characters}/>
            }
        </main>
    );
};

export { MovieAxios };