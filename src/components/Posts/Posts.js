import React, {useEffect, useState} from "react";

import {DataCard, Post, PostForm} from "..";
import {userService} from "../../services";

function Posts({selected}) {
    const [user] = useState(selected);
    const [posts, setPosts] = useState([]);

    useEffect(
        () => {
            user && userService.getPosts(user.id).then(res => setPosts(res.data));
        }, []
    );

    const addPost = (post) => userService.addPost(user.id, post).then(res => setPosts(posts => {
        const id = posts.reduce((acc, val) => acc < val.id ? val.id : acc, 0) + 1;
        return posts.concat({...res.data, id})
    }));

    return (
        <DataCard header={"Posts" + (user ? " of " + user.name : "")}>
            {user && (<div><PostForm addPost={addPost}/></div>)}
            {posts.map((val,index) => (
                <div className={'layout-row layout-value'} key={index} >
                    <Post post={val}/>
                </div>
            ))}
        </DataCard>
    )
}

export { Posts }
