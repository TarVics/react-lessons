import React from "react";
import {Link} from "react-router-dom";

import css from './ComponentsBrief.module.css';
import {DataCard, DataFooter, DataRow} from "../DataCard";

function CommentsBrief({post, comments, users}) {
    return (
        <DataCard header={'Comments for post #' + post?.id}>
            {comments?.map(val => <DataRow key={val.id} caption={"#" + val.id}>{val.name}</DataRow>)}
            <DataFooter>
                <Link to={post?.id.toString()}
                      state={{comments, users}}
                      className={css.LinkStyle}>Details...</Link>
            </DataFooter>
        </DataCard>
    )
}

export {CommentsBrief}