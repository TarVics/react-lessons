import React, {useEffect, useState} from "react";

import {DataCard, User, UserForm} from "..";
import {userService} from "../../services";

function Users({selected, onSelect}) {
    const [user, setUser] = useState(selected);
    const [users, setUsers] = useState([]);

    useEffect(
        () => {
            userService.getAll().then(res => setUsers(res.data));
        }, []
    );

    const addUser = (user) => userService.addUser(user).then(res => {
        const id = users.reduce((acc, val) => acc < val.id ? val.id : acc, 0) + 1;
        setUsers(users => users.concat({...res.data, id}))
    });

    const selectUser = (user) => {
        setUser(user);
        if(typeof onSelect === 'function') onSelect(user)
    }

    return (
        <DataCard header="Users">
            <div>
                <UserForm addUser={addUser}/>
            </div>
            {users.map((val,index) => (
                <div className={'layout-row layout-value' + (user && val.id === user.id ? ' layout-selected' : '')} key={index} >
                    <User user={val}/>
                    <button className="layout-button" onClick={() => selectUser(val)}>posts ></button>
                </div>
            ))}
        </DataCard>
    )
}

export { Users }
