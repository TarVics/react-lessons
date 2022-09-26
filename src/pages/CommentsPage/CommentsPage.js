import React, {useEffect, useState} from 'react';
import {Outlet, useLocation} from "react-router-dom";

import {jsonPlaceholderService} from "../../services";
import {CommentsBrief, DataCard, DataLayout} from "../../components";

function CommentsPage() {
    const location = useLocation();
    const [comments, setComments] = useState([]);
    let users = location.state;

    useEffect(() => {
        jsonPlaceholderService.getComments().then(setComments);
    }, []);

    return (
        <DataLayout width="95%" columns="2" padding={'40px 0'}>
            <DataCard>
                <DataLayout width="5" columns="2" height={'85vh'}>
                {comments.map((value, index) => <CommentsBrief key={index} { ...{...value, users} } />)}
                </DataLayout>
            </DataCard>
            <DataCard>
                <Outlet/>
            </DataCard>
        </DataLayout>
    );
}

export {CommentsPage}