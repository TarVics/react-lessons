import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {usersService} from "../../services";
import {CommentsBrief, DataCard, DataLayout} from "../../components";
import {SET_COMMENTS} from "../../redux";

function CommentsPage() {
    const comments = useSelector(state => state.commentsReducer.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        usersService.getComments()
            .then(res => dispatch({type: SET_COMMENTS, payload: res}));
// eslint-disable-next-line
    }, []);

    return (
        <DataLayout width="95%" columns="2" padding={'40px 0'}>
            <DataCard>
                <DataLayout width="5" columns="2" height={'85vh'}>
                {comments.map((value, index) => <CommentsBrief key={index} {...value} />)}
                </DataLayout>
            </DataCard>
            <DataCard>
                <Outlet/>
            </DataCard>
        </DataLayout>
    );
}

export {CommentsPage}