import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {jsonPlaceholderService} from "../../services";
import {CommentDetail, DataCard, DataRow} from "../../components";
import {GET_POST, GET_POST_COMMENTS, GET_USER, SET_POST, SET_POST_COMMENTS, SET_USER} from "../..";

function PostPage() {
    const {id} = useParams();
    const user = useSelector(state => state.usersReducer.user);
    const post = useSelector(state => state.postsReducer.post);
    const comments = useSelector(state => state.commentsReducer.postComments);
    const dispatch = useDispatch();

    useEffect(() => {
        const load = async () => {
            dispatch({type: GET_POST_COMMENTS, payload: id});
            console.log('1.1: comments=', comments);
            if(!comments) {
                const dComments = await jsonPlaceholderService.getCommentsByPostId(id);
                console.log('RETURN', dComments);
                dispatch({type: SET_POST_COMMENTS, payload: dComments});
                console.log('1.2: comments=', comments);
            }

            dispatch({type: GET_POST, payload: id});
            console.log('2.1: post=', post);
            if(!post) {
                const dPost = await jsonPlaceholderService.getPosts(id);
                dispatch({type: SET_POST, payload: dPost});
                console.log('2.2: post=', dPost, post);
            }

            if(post) {
                dispatch({type: GET_USER, payload: post.userId});
                console.log('3.1: user=', user);
                if (!user) {
                    const dUser = await jsonPlaceholderService.getUsers(post.userId);
                    dispatch({type: SET_USER, payload: dUser});
                    console.log('3.2: user=', user);
                }
            }
        }

        id && load();
    }, [id, comments, post, user, dispatch]);

    return (
        <>
            {console.log('DRAW COMMENTS', comments)}
            {console.log('DRAW POST', post)}
            {console.log('DRAW USER', user)}
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