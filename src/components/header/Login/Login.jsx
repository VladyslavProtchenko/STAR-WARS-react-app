import { NavLink } from "react-router-dom"

function Login() {
    return(
        <li className="flex items-center px-5">
            <NavLink to="/login" className="w-full h-full items-center flex px-2">
                login
            </NavLink>
            <img
                src="https://icon-library.com/images/darth-vader-icon/darth-vader-icon-27.jpg"
                alt="Login-icon"
                className="h-6"
            ></img>
        </li>
    )
}

export {Login}