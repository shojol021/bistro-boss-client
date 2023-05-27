import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(res => {
            const loggedUser = res.user;
            console.log(loggedUser) 
        })
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse w-11/12">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/
                            })} name="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === "required" && <span className="text-red-600">Please enter password</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">At least 6 characters</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">At least one lowercase and one uppercase and one digit</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn" type="submit" value='Register' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;