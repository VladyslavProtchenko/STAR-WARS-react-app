import React from 'react';

//style 
const info ='w-screen flex flex-col max-w-5xl items-center py-10'
const title ='font-bold uppercase text-3xl text-neutral-700'
const release_date ='text-sm text-neutral-400 italic mb-3 self-end pr-20'
const employee ='self-start text-sm pl-20 text-black leading-4 mb-8'
const opening_crawl ='px-24 text-sm text-right text-black italic cursor-pointer'

const InfoMovie = ({movie}) => {
    return (
        <div className={info}>
            <h1 className={title}>{movie.title}</h1>
            <h6 className={release_date}>{movie.release_date}</h6>
            <ul className={employee}>
                <li>{movie.producer}</li>
                <li>{movie.director}</li>
            </ul>
            <p className={opening_crawl}>{movie.opening_crawl}</p>
        </div>
    );
}

export default InfoMovie;
