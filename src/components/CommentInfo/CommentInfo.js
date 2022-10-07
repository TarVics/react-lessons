import React from 'react';

import {DataCard, DataRow} from "../DataCard";

function CommentInfo({ id, name, email, body }) {

    return (
        <DataCard header={'Comments #' + id}>
            <DataRow caption={"name"}>{name}</DataRow>
            <DataRow caption={"email"}>{email}</DataRow>
            <DataRow caption={"body"}>{body}</DataRow>
        </DataCard>
    );
}

export {CommentInfo}