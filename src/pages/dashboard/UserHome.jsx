import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const UserHome = () => {
    const {user} = useContext(AuthContext)

    return (
        <div className="w-full p-12">
            <h3 className="text-3xl">Welcome Back, {user.displayName}</h3>
        </div>
    );
};

export default UserHome;