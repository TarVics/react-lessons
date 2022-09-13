import User from "./User";
import {useEffect, useState} from "react";

function Users () {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6')
            .then(response => response.json())
            .then(json => setUsers(json));
    }, []);

    return (
        <div className={'layout width-4 columns-2'}>
            {users.map((info, key) => (<User key={key} info={info}/>))}
        </div>
    );
}

export default Users;