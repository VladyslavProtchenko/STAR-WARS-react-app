import { Link } from "react-router-dom";

const Nav = () => {
    const item= "text-white text-xs hover:underline"

    return (
        <nav className="flex flex-col text-right justify-center w-1/3 px-5 border-l border-gray-600">
            <Link to="/" className={item}>home</Link>
            <Link to="/movie" className={item}>movie</Link>
            <Link to="/about-us" className={item}>about us</Link>
        </nav>
    );
}
 
export {Nav};