import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {usersService} from "../../services";
import {DataCard, DataLayout, Post} from "../../components";
import {SET_POSTS} from "../../redux";

function PostsPage() {
    const posts = useSelector(state => state.postsReducer.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        usersService.getPosts().then(res => {
            dispatch({type: SET_POSTS, payload: res})
        });
    }, [dispatch]);

    return (
        <DataLayout width="95%" columns="2" padding={'40px 0'}>
            <DataCard>
                <DataLayout width="5" columns="2" height={'85vh'}>
                    {Object.values(posts).map((value, index) => <Post key={index} {...value} />)}
                </DataLayout>
            </DataCard>
            <DataCard>
                <Outlet/>
            </DataCard>
        </DataLayout>
    )
}

export {PostsPage}