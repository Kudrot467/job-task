import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

 export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    const googleProvider=new GoogleAuthProvider();

    const setProfilePicture = (userName,image_url) => {
        return updateProfile(auth.currentUser, {
          displayName:userName,
          photoURL: image_url,
        });
      };

    const googleSignIn=()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
                // console.log(currentUser);
                const userEmail=currentUser?.email||user?.email;
                const loggedUser={email:userEmail};
                console.log(loggedUser)
                setUser(currentUser);
                setLoading(false);
                 if(currentUser){
                    const userInfo={email: currentUser.email};
                    useAxiosPublic.post('/jwt',userInfo)
                    .then(res=>{
                        if(res.data.token)
                        {
                            localStorage.setItem('access-token',res.data.token)
                            setLoading(false);
                        }
                       
                    })
                 }
                 else{
                    localStorage.removeItem('access-token');
                    setLoading(false)
                }
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo={
        user,
        loading,
        setProfilePicture,
        googleSignIn,
        createUser,
        signIn,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

    

};
AuthProvider.propTypes={
    children:PropTypes.node
}


export default AuthProvider;