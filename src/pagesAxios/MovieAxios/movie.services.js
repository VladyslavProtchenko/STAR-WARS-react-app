import axios from "axios"
import { API_URL } from "../../services/constants"
import { Login } from '../../pages/Login/Login';



export async function getMovieInfo(id, setMovie){
    
    const res = await axios.get(`https://swapi.dev/api/films/${id}`)
    setMovie(res.data);
}




export async function getChatarcers(id, setCharacters){
    if(!id) return;
    const res = await axios.get(`https://swapi.dev/api/films/${id}`)

    async function getCharacters(list){
        const names = []
        for(let i=0; i<list.length;i++){
            names.push( await (await axios.get(list[i])).data)
        }
        return names;
    }
    setCharacters(await getCharacters(res.data.characters));
}