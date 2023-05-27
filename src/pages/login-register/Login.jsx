import { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {

    const {login} = useContext(AuthContext)
    const nevigate = useNavigate()
    const location = useLocation()
    console.log(location.state.from.pathname)

    const from = location.state.from.pathname || '/'

    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;

        if(validateCaptcha(captcha)){
            login(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
                Swal.fire({
                    icon: 'success',
                    text: 'Login Successfull'
                })
                nevigate(from)
            })
            .catch(err => {

                Swal.fire({
                    icon: 'error',
                    text: `${err.message}`
                })
                form.reset()
            })
        }
        else{
            Swal.fire({
                icon: 'error',
                text: 'Wrong Captcha'
            })
            form.captcha.value = ''
            return
        }
       
    }

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse w-11/12 mx-auto">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" name="captcha" placeholder="captcha" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-slate-300 border-0 border-b border-b-orange-500 text-orange-600" type="submit" value="Login" />
                        </div>
                        <div>New here? <Link to='/register'><span>Sign Up</span></Link></div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;