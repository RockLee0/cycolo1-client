import initalizeFirebase from '../pages/Login/firebase/firebase.init';

import {useEffect, useState} from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  ,signOut,onAuthStateChanged } from "firebase/auth";


// initializing 
initalizeFirebase();
const useFirebase=()=>{

    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const [authError,setAuthError]=useState('');
    const auth = getAuth();

    // register 
    const registerUser=(email,password)=>
    {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
    })
        .catch((error) => {
        setAuthError(error.message);
        console.log(error.message);
        // ..
    })
    .finally(()=>setIsLoading(false))
    ;

    }

    //sign In

    const LogIn =(email,password,location,history )=>
    {
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => { 
      const destination = location?.state?.from||'/';  
      history.replace(destination);
    setAuthError('');
  })
  .catch((error) => {
    setAuthError(error.message);

  })
  .finally(()=>{setIsLoading(false)  
})
  ;

    }

    //manage user 

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
    
            } else {
              setUser({});

            }
            setIsLoading(false);
          });
          return ()=>unSubscribe;
    },[]);



    //signOut

    const logOut=()=>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));
    }




    return {
        user,registerUser,LogIn,logOut,isLoading,authError
    }

}

export default useFirebase;