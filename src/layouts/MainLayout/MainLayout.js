import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useNavigate} from "react-router-dom";

import {usersService} from "../../services";
import {NavBar, NavBarLink} from "../../components";

function MainLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const [page, setPage] = useState(location.pathname.substring(1) || 'users');
    const [users, setUsers] = useState(null);

    useEffect(() => {
        usersService.getUsers().then(setUsers);
    }, []);

    useEffect(() => {
        navigate(page, {state: users});
        //eslint-disable-next-line
    }, [page]);

    return (
        <>
            <NavBar selected={page} onSelect={setPage}>
                <NavBarLink key={'users'}>users</NavBarLink>
                <NavBarLink key={'posts'}>posts</NavBarLink>
                <NavBarLink key={'comments'}>comments</NavBarLink>
            </NavBar>
            <Outlet/>
        </>
    );
}

export {MainLayout}