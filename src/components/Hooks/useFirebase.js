import { useEffect, useState } from 'react';
import initializeAuthentication from '../../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup,updateProfile, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //SignWithGoogle
    const signInWithGoogle = (location, history) => {
       
     signInWithPopup(auth, googleProvider)
     .then((result) => {
      const user = result.user;
      saveUser(user.email, user.displayName, 'PUT');
      setError('');
      const destination = location?.state?.from || '/';
      history.replace(destination);
  }).catch((error) => {
    setError(error.message); 
             
    })
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

    const handleUserRegister = (email, password,name,history) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
            const newUser = { email, displayName: name };
            setUser(newUser);
            // hanldeUserInfoRegister(result.user.email);
             // save user to the database
             saveUser(email, name, 'POST');
             // send name to firebase after creation
             updateProfile(auth.currentUser, {
                 displayName: name
             }).then(() => {
             }).catch((error) => {
             });
          })
          .catch((error) => {
            const errorMessage = error.message;
          });
          history.replace('/')
      };
      const loginUser = (email, password) => {
        
      return  signInWithEmailAndPassword(auth, email, password)      
    }
    const saveUser = (email, displayName, method) => {
      const user = { email, displayName };
      fetch('https://sheltered-lake-09229.herokuapp.com/users', {
          method: method,
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
          .then()
  }

  useEffect(() => {
    fetch(`https://sheltered-lake-09229.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
}, [user.email])
    return {
        signInWithGoogle,
        user,
        admin,
        logout,
        handleUserRegister,
        loginUser
    }
};

export default useFirebase;