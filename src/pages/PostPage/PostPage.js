import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {jsonPlaceholderService} from "../../services";
import {DataCard, DataRow} from "../../components/DataCard";
import {CommentDetail} from "../../components/CommentDetail";

function PostPage() {
    const location = useLocation();
    const {comments, users} = location.state || {};
    const [data, setData] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const load = async () => {
            const dUsers = users || await jsonPlaceholderService.getUsers();
            const dComments = comments || await jsonPlaceholderService.getCommentsByPostId(id);
            const dPost = await jsonPlaceholderService.getPostById(id);

            setData({...dPost, user: dUsers[dPost.id], comments: dComments});
        }

        load();
    }, [id, comments, users]);

    return (
        <>
            <DataCard header={'Post #' + data?.id}>
                <DataRow caption={"user"}>{data?.user?.name}</DataRow>
                <DataRow caption={"email"}>{data?.user?.email}</DataRow>
                <DataRow caption={"title"}>{data?.title}</DataRow>
                <DataRow caption={"body"}>{data?.body}</DataRow>
            </DataCard>
            {data?.comments.map(
                (value, index) => (<CommentDetail key={index} {...value}/>))
            }
        </>
    )
}

export {PostPage}