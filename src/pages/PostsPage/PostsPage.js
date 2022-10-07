import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {postsActions} from "../../redux";
import {DataCard, DataLayout, Post} from "../../components";

const PostsPage = () => {
    const dispatch = useDispatch();
    const {posts, error, loading} = useSelector(state => state.postsReducer);

    useEffect(() => {
        dispatch(postsActions.getAll());
// eslint-disable-next-line
    }, []);

    return (
        <DataLayout width="95%" columns="2" padding={'40px 0'}>
            <DataCard>
                <DataLayout width="5" columns="2" height={'85vh'}>
                    {loading&&<h1>Loading...</h1>}
                    {error&&<h1>Error</h1>}
                    {Object.values(posts).flat().map(value => <Post key={value.id} post={value} />)}
                </DataLayout>
            </DataCard>
            <DataCard>
                <Outlet/>
            </DataCard>
        </DataLayout>
    );
};

export {PostsPage}