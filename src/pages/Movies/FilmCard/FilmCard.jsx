import { Link } from "react-router-dom";

//style 
const card = 'flex'
const content ='w-3/4 flex flex-col  px-5 text-left py-4'
const title = 'text-3xl font-bold text-white'
const text = 'text-sm text-zinc-700 px-5 my-3'
const info = 'text-sm text-zinc-500 flex flex-col'
const more = 'text-sm text-white'

const FilmCard = ({film}) => {
    return (
        <div  className={card} key={film.episode_id}>
            <Link  key={film.episode_id} to={`${film.episode_id}`} className={`w-1/4 item${film.episode_id}`}></Link>
            <article className={content}>
            <Link  key={film.episode_id} to={`${film.episode_id}`} className={title}>{film.title}</Link>
                
                <p className={text}>{film.opening_crawl}</p>
                <ul className={info}>
                    <li>Director: {film.director}</li>
                    <li>Producers: {film.producer}</li>
                    <li className=" justify-between flex"><div>Release date: {film.release_date} </div> <Link key={film.episode_id} to={`${film.episode_id}`} className={more}>more info...</Link></li>
                    
                </ul>
            </article>
        </div>
    );
}

export  { FilmCard };

