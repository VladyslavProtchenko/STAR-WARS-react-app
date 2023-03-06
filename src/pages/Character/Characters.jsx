import { Await,Link, useLoaderData } from "react-router-dom";
import { Suspense } from 'react';



function Character (){
    const {hero, movies} = useLoaderData();
    
    return (
        <main className="flex flex-col pt-16 w-full max-w-5xl">
            <h1 className="font-bold text-5xl mb-10">{hero.name}</h1>
            <ul className="flex flex-col text-left px-[10%] pb-6">
                <li>Birth year: {hero.birth_year}</li>
                <li>Gender: {hero.gender}</li>
                <li>Height: {hero.height}</li>
                <li>Mass: {hero.mass}</li>
                <li>Skin color: {hero.skin_color}</li>
                <li>Hair color: {hero.hair_color}</li>
                <li>Eye color: {hero.eye_color}</li>
            </ul>
            <ul className='flex flex-col px-[10%] text-left pb-10'>
            <h1 className='text-3xl mb-2'>Movies:</h1>
            <Suspense fallback={<h4>waiting...</h4>}><Await resolve={movies}>
                {(movies)=>(
                    movies.map(item => {
                        return(
                            <li key={Date()}>
                            <Link to={`/movie/${item.url.substring(28).slice(0,-1)}`} className='hero-film-link'>{item.title}</Link>
                            </li>
                        )  
                    })
                )}
            </Await></Suspense>
                </ul>
        </main>
    )
}




export { Character}