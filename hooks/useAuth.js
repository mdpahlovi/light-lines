import { createContext, useContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import app from "@/config/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

export const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Create User & Update Profile
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Signin & Signin With Social
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    const loginWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    // Sign Out User & Remove JWT Token
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setEmail(currentUser?.email);
        });
        return () => unSubscribe();
    }, []);

    useEffect(() => {
        if (!user?._id && email) {
            axios
                .get(`/api/user/${email}`)
                .then((res) => {
                    setLoading(false);
                    setUser(res.data);
                })
                .catch(({ message }) => {
                    setLoading(false);
                    console.error(message);
                });
        } else {
            setLoading(false);
        }
    }, [user?._id, email]);

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        login,
        loginWithGoogle,
        loginWithGithub,
        logout,
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};
