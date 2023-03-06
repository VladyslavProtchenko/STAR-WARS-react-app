import { defer } from "react-router-dom";
import { getCharacters, getMovieInfo } from "../../services/movie.service";

export const filmLoader = async ({params}) => {    
    const id = params.id;

    return defer({
        film: getMovieInfo(id), id,characters:getCharacters(id),
    })
}