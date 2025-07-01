import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthContext";

const SocialLogin = () => {
    const { googleSignin } = useContext(AuthContext)
    const handleGoogleSignin = () => {
        googleSignin()
            .then(result => {
                console.log(result)
            })
            .catch(er => console.error(er))
    };
    return (
        <div className="w-full m-auto text-center">
            <button onClick={handleGoogleSignin} className="btn w-full btn-secondary   ">Google</button>
        </div>
    );
};

export default SocialLogin;