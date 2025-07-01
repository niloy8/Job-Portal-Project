import Lottie from "lottie-react";
import animationLogin from "../../assets/Lottie/register.json"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthContext";
import SocialLogin from "../shared/SocialLogin";
const Signin = () => {
    const { signInuser } = useContext(AuthContext)
    const handleSignin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signInuser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(er => {
                console.error(er)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={animationLogin} className="w-80" loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold ml-8 mt-4">Log In</h1>
                    <div className="card-body">
                        <form onSubmit={handleSignin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <input type="submit" className="btn btn-neutral mt-4" value="Login"></input>
                            </fieldset>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;