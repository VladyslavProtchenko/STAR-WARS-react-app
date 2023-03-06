import { Suspense } from 'react';
import { useLoaderData, useSearchParams, Await } from 'react-router-dom';
import { MovieList } from '../../pagesAxios/MoviesAxios/MovieList/MovieList';

import { Search } from './Search/Search';

//styles
const box ='bg-[#1e1e1e] pt-20 px-[10%] divide-y divide-gray-600 w-full'


export function Movies(){

const {films} = useLoaderData();
const [searchParams, setSearchParams] = useSearchParams();
const episodeQuery = searchParams.get('search') || '';
const find=(event)=>{
    event.prevenDefault();
    const query = event.target.search.value.toLowerCase();
    setSearchParams({episode: query})
}

return (
    <main className={box}>
        <Search find={find}/>
        <Suspense fallback={<h2 className='w-full'>Loading...</h2>}>
        <Await resolve={films}>
            {
                (films)=><MovieList films={films} query={episodeQuery}/>
            }
        </Await>
        </Suspense>
            
    </main>
)    
};




