// import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Link, useLoaderData, Await } from 'react-router-dom'
import style from './style.module.css'

const  Movie =  () => {
    const {film, characters} = useLoaderData();

    

    return (
        <main className={style.box}>
        <Suspense fallback={<h3>loading...</h3>}><Await resolve={film}>
        {(film) => (<>
            <article className={style.info}>
                <h1 className={style.title}>{film.title}</h1>
                <h2 className={style.year}>{film.release_date}</h2>
                <h3 className={style.director}> Main Director: {film.director}</h3>
                <h3 className={style.producer}> Main Producer: {film.producer}</h3>
                <p className={style.text}>{film.opening_crawl}</p>
            </article>
    
            <div className={style.actors}>
                <h2 className='px-[10%]'>Actors:</h2>
                <ul className={style.list}>
                <Suspense fallback={<h3>waiting this silly idiots....</h3>}><Await resolve={characters}>
                {(characters)=> (
                    
                    characters.map(item=>(
                        <li key={item.id} >    
                            <Link to={`/movie/character/${item.url.substr(29).slice(0,-1)}`} className={style.one}>{item.name}</Link>
                        </li>
                    )
                        
                    )
                )} 
                </Await></Suspense>
                    
                </ul>
            </div>
        </>)}
        </Await></Suspense>
        </main>
    );
};

export { Movie };
