import React from "react";
import {useNavigate} from "react-router-dom";

import css from './Comments.module.css';
import {DataCard, DataFooter, DataRow} from "../DataCard";

function Comments({postId, comments}) {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(postId);
    }

    return (
        <DataCard header={'Comments for post #' + postId}>
            {comments?.map(val => <DataRow key={val.id} caption={"#" + val.id}>{val.name}</DataRow>)}
            <DataFooter>
                <button className={css.buttonStyle} onClick={onClick}>Details...</button>
            </DataFooter>

        </DataCard>
    )
}

export {Comments}