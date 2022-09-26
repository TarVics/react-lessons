import React from 'react';

import {DataCard, DataRow} from "../DataCard";

function CommentDetail({ id, name, email, body }) {

    return (
        <DataCard header={'Comment #' + id}>
            <DataRow caption={"name"}>{name}</DataRow>
            <DataRow caption={"email"}>{email}</DataRow>
            <DataRow caption={"body"}>{body}</DataRow>
        </DataCard>
    );
}

export {CommentDetail}