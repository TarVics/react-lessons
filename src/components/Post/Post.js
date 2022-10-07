import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from "./Post.module.css";
import {DataCard, DataFooter, DataRow} from "../DataCard";
import {postsActions} from "../../redux";

function Post({post}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(postsActions.setCurrentPost(post));
        navigate(post.id.toString());
    }

    return (
        <DataCard header={'Post #' + post.id}>
            <DataRow>{post.title}</DataRow>
            <DataFooter>
                <button className={css.buttonStyle} onClick={onClick}>Details...</button>
            </DataFooter>
        </DataCard>
    );
}

export {Post}