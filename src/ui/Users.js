import {useEffect, useState} from "react";

import {getUsers, getUserPosts} from "../ds/jsonplaceholder.axios";
import UserCard from "./UserCard";
import UserInfo from "./UserInfo";
import UserPost from "./UserPost";

function Users() {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [userPosts, setUserPosts] = useState([]);

    useEffect(
        () => {
            getUsers().then(res => setUsers(res.data));
        }, []
    );

    useEffect(
        () => {
            user && getUserPosts(user.id).then(res => setUserPosts(res.data));
        }, [user]
    );

    return (
        <div className="layout columns-2">
            <UserCard caption={'Users'}>
                {users.map(val => (
                    <UserInfo user={val} selected={val === user} onActivate={u => setUser(u)} key={val.id}/>
                ))}
            </UserCard>
            <UserCard caption={'Posts' + (user ? ' of ' + user.name : '')}>
                {userPosts.map(post => <UserPost post={post} key={post.id}/>)}
            </UserCard>
        </div>
    );
}

export default Users;
