import { createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';

import useAxiosPublic from "../../../Hook/useAxiosPublic";
import auth from "../../../Firebase/Firebase.config";











export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()

    const createUser = (email, password,firstName,lastName) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password,firstName,lastName)
       
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password,)
    }
  



    const logOut = () => {
        return signOut(auth)
    }

     const googleSignIn = () =>{
        setLoading(true)
        signInWithPopup(auth, googleProvider)
    
     }


     const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        });
    }
  





    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                try {
                    const res = await axiosPublic.post('/jwt', userInfo);
                    if (res.data.token) {
                        localStorage.setItem('access-token', res.data.token);
                    }
                } catch (error) {
                    console.error('Error generating JWT token:', error);
                } finally {
                    setLoading(false); 
                }
            } else {
                localStorage.removeItem('access-token');
                setLoading(false); 
            }
            console.log('observing current user', currentUser);
        });
        
        return () => {
            unSubscribe();
        };
    }, [axiosPublic]);
    




    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        signInUser,
        googleSignIn,
        updateUserProfile
      
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;
