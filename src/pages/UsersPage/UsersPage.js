import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {jsonPlaceholderService} from "../../services";
import {DataLayout, User} from "../../components";
import {SET_USERS} from "../..";

function UsersPage() {
    const users = useSelector(state => state.usersReducer.users);
    const dispatch = useDispatch();

    useEffect(() => {
        jsonPlaceholderService.getUsers().then(res => dispatch({type: SET_USERS, payload: res}));
    },[dispatch]);

    return (
        <DataLayout width="4" columns="4" padding={'40px 0'}>
            {Object.values(users).map((value, index) => <User key={index} user={value}/>)}
        </DataLayout>
    );
}

export {UsersPage}