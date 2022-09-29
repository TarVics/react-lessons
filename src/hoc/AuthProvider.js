import React, {createContext, useState} from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    const login = (newUser, fnCallback) => {
        setUser(newUser);
        fnCallback();
    }

    const logout = (fnCallback) => {
        setUser(null);
        fnCallback();
    }

    const value = {user, login, logout}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthProvider, AuthContext}