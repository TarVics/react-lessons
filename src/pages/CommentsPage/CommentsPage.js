import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {commentsActions} from "../../redux";
import {DataCard, DataLayout, Comments} from "../../components";

const CommentsPage = () => {
    const dispatch = useDispatch();
    const {comments, error, loading} = useSelector(state => state.commentsReducer);

    useEffect(() => {
        dispatch(commentsActions.getAll());
// eslint-disable-next-line
    }, []);

    return (
        <DataLayout width="95%" columns="2" padding={'40px 0'}>
            <DataCard>
                <DataLayout width="5" columns="2" height={'85vh'}>
                    {loading&&<h1>Loading...</h1>}
                    {error&&<h1>Error</h1>}
                    {Object.entries(comments).map(([key, value], index) => <Comments key={index} postId={key} comments={value} />)}
                </DataLayout>
            </DataCard>
            <DataCard>
                <Outlet/>
            </DataCard>
        </DataLayout>
    );
};

export {CommentsPage}