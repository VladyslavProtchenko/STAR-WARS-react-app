import { Link } from "react-router-dom";

const List = () => {
    return (
        <ul className={box}>
            <h1 className={title}>Movies</h1>
            <Link to='/movie/1' className={item}>Episode IV – A New Hope</Link>
            <Link to='/movie/2' className={item}>Episode V – The Empire Strikes Back</Link>
            <Link to='/movie/3' className={item}>Episode VI – Return of the Jedi</Link> 
            <Link to='/movie/4' className={item}>Episode I – The Phantom Menace</Link>
            <Link to='/movie/5' className={item}>Episode II – Attack of the Clones</Link>
            <Link to='/movie/6' className={item}>Episode III – Revenge of the Sith</Link>
        </ul>
    );
}
export {List};

const box = 'w-1/2 flex flex-col text-left px-[10%] justify-center'
const title = 'text-5xl font-bold mb-4'
const item = 'text-xl hover:font-bold'