import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();


export const AuthContextProvider = ({children}) => {
    const [authKey, setAuthKey] = useState(() => {
        const StoredAuthKey = localStorage.getItem('authKey');
        return StoredAuthKey !== null ? StoredAuthKey : "";
    });

    useEffect(() => {
        localStorage.setItem('authKey', authKey);
    }, [authKey]);

    return (
        <AuthContext.Provider value={{authKey, setAuthKey}}>
            {children}
        </AuthContext.Provider>
    )
}