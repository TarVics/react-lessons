import React, {useEffect, useState} from "react";

import {DataCard, User} from "..";
import {userService} from "../../services";

function Users({selected, onSelect}) {
    const [user, setUser] = useState(selected || {});
    const [users, setUsers] = useState([]);

    useEffect(
        () => {
            userService.getAll().then(res => setUsers(res.data));
        }, []
    );

    const selectUser = (user) => {
        setUser(user);
        if(typeof onSelect === 'function') onSelect(user)
    }

    return (
        <>
            <h1 style={{textAlign:'center'}}>{users.length ? 'User Information' : 'Loading data...'}</h1>
            <div className="layout columns-2">
                <DataCard header="Users">
                    {users.map(val => (
                        <div className={'layout-row layout-value' + (val.id === user.id ? ' layout-selected' : '')} key={val.id} >
                            {val.id}. {val.name}
                            <button className="layout-button" onClick={() => selectUser(val)}>info ></button>
                        </div>
                    ))}
                </DataCard>
                {/*user &&*/ <User user={user}/>}
            </div>
        </>
    );
}

export { Users }
