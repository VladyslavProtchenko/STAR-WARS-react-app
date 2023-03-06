import { defer } from "react-router-dom";
import { getCharacterInfo } from "../../services/characters.service";

export async function characterLoader({params}){
    
    return defer(await getCharacterInfo(params.id));
}