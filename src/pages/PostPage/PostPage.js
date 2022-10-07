import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {postsActions} from "../../redux";
import {PostInfo} from "../../components";

const PostPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {current: post} = useSelector(state => state.postsReducer);

    useEffect(() => {
        if (!post || post.id !== +id) {
            dispatch(postsActions.getById(id));
        }
// eslint-disable-next-line
    }, [id]);

    return (
        <>
            {post && <PostInfo post={post}/>}
        </>
    );
};

export {PostPage}