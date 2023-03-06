import { NavLink } from "react-router-dom"

function Logo() {
    return(
        <NavLink to="/">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"
                alt="STAR-WARS-LOGO"
                className="w-20 p-3"
            ></img>
        </NavLink>
        
    )
}

export {Logo}
