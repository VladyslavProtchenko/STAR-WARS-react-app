import { NavLink } from "react-router-dom"

function Menu() {

    return(
        <li className="flex">
            <NavLink to="/" className={item}>Home</NavLink>
            <NavLink to="/movie" className={item}>Movie</NavLink>
            <NavLink to="/axios" className={item}>Axios</NavLink>
            <NavLink to="/about-us" className={item}>About us</NavLink>
        </li>
    )
}

export {Menu}

const item = "px-5 flex items-center"
