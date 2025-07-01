import Lottie from "lottie-react";
import animationLogin from "../../src/assets/Lottie/register.json"
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthContext";
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleUser = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

        if (!passwordRegex.test(password)) {
            alert(
                "Password must be at least 6 characters long, contain at least one uppercase letter and one number."
            );
            return;
        }
        createUser(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.error(error);

                throw error;
            });
        console.log(email, password);

    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={animationLogin} className="w-80" loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold ml-8 mt-4">Register now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleUser}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <input type="submit" className="btn btn-neutral mt-4" value="Sign Up"></input>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;