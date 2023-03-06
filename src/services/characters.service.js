import { API_URL } from "./constants";




async function getCharacterInfo(id) {
    const films =[];
    
    const hero = await fetch(`${API_URL}people/${id}/`).then(res=>res.json());

    async function getFilm(data){
        return await fetch(data).then(res=>res.json());
    }
    for (let i = 0; i < hero.films.length; i++) films.push(await getFilm(hero.films[i]))

    return {hero: hero, movies:films}
}
export { getCharacterInfo }