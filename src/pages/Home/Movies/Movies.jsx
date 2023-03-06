import { List } from "./List/List";
import { Posters } from "./Posters/Posters";

const Movies = () => {
    return (
        <article className='flex min-h-[500px]'>
            <Posters/>
            <List/>
        </article>
    );
}

export {Movies};