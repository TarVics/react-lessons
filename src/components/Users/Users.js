import React, {useEffect, useState} from "react";

import {DataCard, User} from "..";
import {userService} from "../../services";

function Users() {
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);

    useEffect(
        () => {
            userService.getAll().then(res => setUsers(res.data));
        }, []
    );

    return (
        <>
            <h1 style={{textAlign:'center'}}>User Information</h1>
            {!users.length && <h2 style={{textAlign:'center'}}>Loading data...</h2>}
            <div className="layout columns-2">
                <DataCard header="Users">
                    {users.map(val => (
                        <div className={'layout-row layout-value' + (val === user ? ' layout-selected' : '')} key={val.id} >
                            {val.id}. {val.name}
                            <button className="layout-button" onClick={() => setUser(val)}>info ></button>
                        </div>
                    ))}
                </DataCard>
                {/*user &&*/ <User user={user}/>}
            </div>
        </>
    );
}

export { Users }
