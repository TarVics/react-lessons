import React from 'react';

import {DataCard, DataRow} from "../DataCard";

function User({ user }) {
    return (
        <DataCard header={user.name}>
            <DataRow caption={"user"}>{user.name}</DataRow>
            <DataRow caption={"email"}>{user.email}</DataRow>
        </DataCard>
    );
}

export {User}
