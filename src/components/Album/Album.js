import React from 'react';

import {DataCard, DataRow} from "../DataCard";

function Album({ user, albums }) {
    return (
        <DataCard header={user?.name}>
            <DataRow caption={"user"}>{user?.name}</DataRow>
            <DataRow caption={"email"}>{user?.email}</DataRow>

            {albums.length && <DataRow header={"albums"}/> }
            {albums.map(val => <DataRow key={val.id} caption={"#" + val.id}>{val.title}</DataRow>)}
        </DataCard>
    );
}

export {Album}
