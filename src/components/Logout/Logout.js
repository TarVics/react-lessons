import React from 'react';
import {useAuth} from "../../hooks";

const Logout = () => {
    const {user, logout} = useAuth();
    return (
        <div>
            <button onClick={() => logout(() => user && console.log('User %s logged out', user))}>Logout</button>
        </div>
    );
};

export {Logout}