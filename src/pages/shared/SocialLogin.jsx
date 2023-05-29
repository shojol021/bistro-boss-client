import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const { googleLogin } = useContext(AuthContext)

    const nevigate = useNavigate()
    const location = useLocation()

    const from = location?.state?.from?.pathname || '/'

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        nevigate(from, { replace: true })

                    })
            })
    }
    return (
        <div className="">
            <div className='divider '></div>
            <button onClick={handleGoogleLogin} className='btn btn-outline btn-success'>Login with Google</button>
        </div>
    );
};

export default SocialLogin;