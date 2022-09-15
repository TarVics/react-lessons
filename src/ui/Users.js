import {useEffect, useState} from "react";

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
            <DataCard header="Users">
                {users.map(val => (
                    <div className={'layout-row layout-value' + (val === user ? ' layout-selected' : '')} key={val.id} >
                        {val.id}. {val.name}
                        <button className="layout-button" onClick={() => setUser(val)}>info ></button>
                    </div>
                ))}
            </DataCard>
            {user && <User user={user}/>}
        </>
    );
}



export default Users;
