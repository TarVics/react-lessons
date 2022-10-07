import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {usersActions} from "../../redux";
import {UserInfo} from "../../components";

const UserPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {current: user} = useSelector(state => state.usersReducer);

    useEffect(() => {
        if (!user || user.id !== +id) {
            dispatch(usersActions.getById(id));
        }
// eslint-disable-next-line
    }, [id]);

    return (
        <>
            {user && <UserInfo user={user}/>}
        </>
    );
};

export {UserPage}