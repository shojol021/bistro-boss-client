import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
       return <div className="h-screen flex justify-center items-center text-4xl">Loading...</div>
    }
    if(user){
        return children
    }

    return <Navigate to="/login" state={{from: location}}></Navigate>
    
};

export default PrivateRoute;