import React, {useRef} from 'react';
import {useAuth} from "../../hooks";
import {useLocation, useNavigate} from "react-router-dom";

const Login = () => {
    const {login} = useAuth();
    const {state} = useLocation();
    const name = useRef();
    const navigate = useNavigate();

    const loginFunc = () => {
        const userName = name.current.value;
        if(!userName) return;
        login(userName, () => {
            console.log('User %s logged in', userName);
            navigate(state.pathname, {replace: true});
        });
    }

    return (
        <div>
            <input type="text" ref={name}/>
            <button onClick={() => loginFunc()}>Login</button>
        </div>
    );
};

export {Login}