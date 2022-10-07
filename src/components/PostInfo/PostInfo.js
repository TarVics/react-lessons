import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {DataCard, DataRow} from "../DataCard";
import {commentsActions, usersActions} from "../../redux";
import {CommentInfo} from "../CommentInfo";

const PostInfo = ({post}) => {
    const dispatch = useDispatch();
    const {current: user} = useSelector(state => state.usersReducer);
    const {current: comments} = useSelector(state => state.commentsReducer);

    useEffect(() => {
        if (!user || user.id !== post.userId) {
            dispatch(usersActions.getById(post.userId));
        }

        dispatch(commentsActions.getByPostId(post.id));
// eslint-disable-next-line
    }, [post]);

    return (
        <>
            {post &&
                <DataCard header={'Post #' + post.id}>
                    {user && <DataRow caption={"user"}>{user ? user.name : ''}</DataRow>}
                    {user && <DataRow caption={"email"}>{user ? user.email : ''}</DataRow>}
                    <DataRow caption={"title"}>{post.title}</DataRow>
                    <DataRow caption={"body"}>{post.body}</DataRow>
                </DataCard>
            }

            {comments && comments.map(
                (value, index) => (<CommentInfo key={index} {...value}/>))
            }
        </>
    );
};

export {PostInfo}