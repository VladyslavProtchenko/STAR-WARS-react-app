import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../useAuth/useAuth";


const RequireAuth = ({children}) => {
    const location = useLocation()
    const {user} = useAuth();

    if(!user) {
        return <Navigate to='/authorization' state={{from: location, }}/>
    }

    return children;
}

export { RequireAuth };