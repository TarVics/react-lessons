import React, {useEffect, useState} from "react";

import {getUsers} from "../ds/jsonplaceholder.fetch";
import DataCard from "./DataCard";
import User from "./User";

function Users() {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(
        () => {
            getUsers().then(data => setUsers(data));
        }, []
    );

    return (
        <>
            <h1 style={{textAlign:'center'}}>User Information</h1>
            <div className="layout columns-2">
                <DataCard header="Users">
                    {users.map(val => (
                        <div className={'layout-row layout-value' + (val === user ? ' layout-selected' : '')} key={val.id} >
                            {val.id}. {val.name}
                            <button className="layout-button" onClick={() => setUser(val)}>info ></button>
                        </div>
                    ))}
                </DataCard>
                {user && <User user={user}/>}
            </div>
        </>
    );
}



export default Users;
