
import {useEffect, useState} from "react";

import './App.css';
import {getUsers, getUserPosts} from "./ds/jsonplaceholder.axios";
import UserCard from "./ui/UserCard";
import UserInfo from "./ui/UserInfo";
import UserPost from "./ui/UserPost";

function App() {
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
        <div className="App layout columns-2">
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

export default App;
