import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup,updateProfile, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //SignWithGoogle
    const signInWithGoogle = () => {
       
       return signInWithPopup(auth, googleProvider)       
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            
          } else {
            // User is signed out
            // ...
          }
        });
      }, []);

      const logout = () => {
        signOut(auth)
        .then(() => {
          setUser({});
        })
        .catch((err) => {
          console.log(err);
        });
    }

    const handleUserRegister = (email, password,history) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
            // hanldeUserInfoRegister(result.user.email);
          })
          .catch((error) => {
            const errorMessage = error.message;
          });
          history.replace('/')
      };
      const loginUser = (email, password) => {
        
      return  signInWithEmailAndPassword(auth, email, password)
            // .then((userCredential) => {
            //     const destination = location?.state?.from || '/';
            //     history.replace(destination);
            //     setError('');
            // })
            // .catch((error) => {
            //   setError(error.message);
            // })
            
    }
    return {
        signInWithGoogle,
        user,
        logout,
        handleUserRegister,
        loginUser
    }
};

export default useFirebase;