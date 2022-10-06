import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {usersService} from "../../services";
import {CommentDetail, DataCard, DataRow} from "../../components";
import {GET_POST, GET_POST_COMMENTS, GET_USER, SET_POST, SET_POST_COMMENTS, SET_USER} from "../../redux";

function PostPage() {
    const {id} = useParams();
    const user = useSelector(state => state.usersReducer.user);
    const post = useSelector(state => state.postsReducer.post);
    const comments = useSelector(state => state.commentsReducer.postComments);
    const dispatch = useDispatch();

    useEffect(() => {
        const load = async () => {
            dispatch({type: GET_POST_COMMENTS, payload: id});
            if(!comments) {
                const dComments = await usersService.getCommentsByPostId(id);
                dispatch({type: SET_POST_COMMENTS, payload: dComments});
            }

            dispatch({type: GET_POST, payload: id});
            if(!post) {
                const dPost = await usersService.getPosts(id);
                dispatch({type: SET_POST, payload: dPost});
            }

            if(post) {
                dispatch({type: GET_USER, payload: post['userId']});
                if (!user) {
                    const dUser = await usersService.getUsers(post['userId']);
                    dispatch({type: SET_USER, payload: dUser});
                }
            }
        }

        id && load();
// eslint-disable-next-line
    }, [id, comments, post]);

    return (
        <>
            {post &&
                <DataCard header={'Post #' + post.id}>
                    <DataRow caption={"user"}>{user ? user.name : ''}</DataRow>
                    <DataRow caption={"email"}>{user ? user.email : ''}</DataRow>
                    <DataRow caption={"title"}>{post.title}</DataRow>
                    <DataRow caption={"body"}>{post.body}</DataRow>
                </DataCard>
            }

            {comments && comments?.comments.map(
                (value, index) => (<CommentDetail key={index} {...value}/>))
            }
        </>
    )
}

export {PostPage}