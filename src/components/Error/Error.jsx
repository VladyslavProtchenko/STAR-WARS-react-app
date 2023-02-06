import React from 'react';
//style
const loading ="bg-contain bg-center bg-[url('https://flyclipart.com/thumb2/star-wars-kawaii-saga-15796.png')] flex animate-bounce w-28 h-28 shadow text-black justify-center items-center font-bold rounded-full"
const Error = () => {
    return (
            <div className='flex w-full justify-center items-center h-full'>
                <div className={loading}>
                    {/* <i className='fas fa-long-arrow-alt-down text-yellow-400'></i> */}
                </div>   
            </div>
    );
}

export  {Error};
