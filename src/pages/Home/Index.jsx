import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '../../services/constants';
import { Awards } from './Awards/Awards';
import { Comments } from './Comments/Comments';
import { Enjoy } from './Enjoy/Enjoy';
import { Info } from './Info/Info';
import { Movies } from './Movies/Movies';
import { Title } from './Title/Title';

const Home = () => {
    
    return (
        <main className={main}>

            <Title/>
            <Info/>
            <Movies/>
            
            <Comments/>
            <Awards/>
            <Enjoy/>
            
            
        </main>
    );
};

export { Home };

const main = "flex flex-col max-w-6xl pt-14"
