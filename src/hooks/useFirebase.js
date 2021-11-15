import initalizeFirebase from '../pages/Login/firebase/firebase.init';

import {useEffect, useState} from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  ,signOut,onAuthStateChanged ,updateProfile,getIdToken} from "firebase/auth";


// initializing 
initalizeFirebase();
const useFirebase=()=>{

    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const [authError,setAuthError]=useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();

    // register 
    const registerUser=(email,password,name,history)=>
    {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = { email, displayName: name };
            setUser(newUser);
            // save user to the database
            saveUser(email, name, 'POST');
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('/');
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
              getIdToken(user)
              .then(idToken => {
                  setToken(idToken);
              })
    
            } else {
              setUser({});

            }
            setIsLoading(false);
          });
          return ()=>unSubscribe;
    },[]);

//setAdmin 
useEffect(() => {
  fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
}, [user.email])


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

    //save users
    const saveUser = (email, displayName, method) => {
      const user = { email, displayName };
      fetch('http://localhost:5000/users', {
          method: method,
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
          .then()
  }



    return {
        user,
        admin,
        token,
        registerUser,LogIn,logOut,isLoading,authError
    }

}

export default useFirebase;