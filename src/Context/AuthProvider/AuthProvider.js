import { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const AuthContext =createContext(null);

const AuthProvider = ({children}) => {
   const AllContext=useFirebase();
    return (
        <AuthContext.Provider value={AllContext}>
            {children}           
        </AuthContext.Provider>
    );
};

export default AuthProvider;