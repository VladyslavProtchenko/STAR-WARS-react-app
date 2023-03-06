import { API_URL } from './constants';

//____________________________Movies_________________________________________

async function getAllMovies(){
    
    const res = await fetch(API_URL+'films/').then(res=>res.json())
    return res.results;
}

//_____________________________Movie__________________________________

async function getMovieInfo(id) {
    const film = await fetch(`${API_URL}/films/${id}/`).then(res=>res.json())
    return film
}
//_____________________________CHARACTERS_______________________________

async function getCharacters(id) {
    const charactersLinks = await fetch(`${API_URL}films/${id}/`).then(res=>res.json()).then(data=>data.characters)
    async function  taker(list) {
        const arr = [];
        for (let i = 0; i < list.length; i++) {
            arr.push(await fetch(list[i]).then(res=>res.json()).then(data=>{
                data.id = i+1;
                return data;   
            }))
        }    
        return arr;
    }
    const characters = await taker(charactersLinks);
    return characters;
}

export { getAllMovies, getMovieInfo, getCharacters}

