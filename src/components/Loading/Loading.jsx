import React from 'react';
//style
const loading ="bg-contain bg-center bg-[url('https://freepngimg.com/download/star_wars/87241-star-luke-skywalker-wars-yellow-clothing-yoda.png')] flex animate-bounce w-28 h-28 shadow text-black justify-center items-center font-bold rounded-full"
const Loading = () => {
    return (
            <div className='flex w-full justify-center items-center h-full'>
                <div className={loading}>
                    {/* <i className='fas fa-long-arrow-alt-down text-yellow-400'></i> */}
                </div>   
            </div>
    );
}

export  {Loading};
