import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from "./User.module.css";
import {DataCard, DataFooter, DataRow} from "../DataCard";
import {usersActions} from "../../redux";

function User({ user }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(usersActions.setCurrentUser(user));
        navigate(user.id.toString());
    }

    return (
        <DataCard header={user.name}>
            <DataRow caption={"user"}>{user.name}</DataRow>
            <DataRow caption={"email"}>{user.email}</DataRow>
            <DataFooter>
                <button className={css.buttonStyle} onClick={onClick}>Details...</button>
            </DataFooter>
        </DataCard>
    );
}

export {User}
