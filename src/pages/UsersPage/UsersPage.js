import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {DataCard, DataLayout, User} from "../../components";
import {usersActions} from "../../redux";

const UsersPage = () => {
    const dispatch = useDispatch();
    const {users, error, loading, userFromAPI} = useSelector(state => state.usersReducer);

    useEffect(() => {
        // usersService.getAll().then(data=>dispatch(usersActions.getAll(data)))
        dispatch(usersActions.getAll());
// eslint-disable-next-line
    }, []);
    return (
        <DataLayout width="95%" columns="2" padding={'40px 0'}>
            <DataCard>
                <DataLayout width="5" columns="2" height={'85vh'}>
                    {loading&&<h1>Loading...</h1>}
                    {error&&<h1>Error</h1>}
                    {userFromAPI&&userFromAPI.email}
                    {Object.values(users).map((value, index) => <User key={index} user={value} />)}
                </DataLayout>
            </DataCard>
            <DataCard>
                <Outlet/>
            </DataCard>
        </DataLayout>
    );
}

export {UsersPage}