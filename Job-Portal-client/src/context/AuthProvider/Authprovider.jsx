import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { AuthContext } from "./AuthContext";
import axios from 'axios';

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    };
    const signInuser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const signOutuser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignin = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("state caPTURED", currentUser)

            setUser(currentUser)
            if (currentUser?.email) {
                const user1 = { email: currentUser.email }
                axios.post('http://localhost:3000/jwt', user1, { withCredentials: true })
                    .then(data => {
                        setLoading(false)
                        console.log(data.data)
                    })
            } else {
                axios.post('http://localhost:3000/logout', { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        setLoading(false)
                    })
            }

            return () => {
                unsubscribe()
            }
        })
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signInuser,
        googleSignin,
        signOutuser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
