import {useEffect, useState} from "react";
import Character from "./Character";

function RickAndMorty() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const ids = [];
        for (let i = 0; i < 6; i++) {
            let id;
            do {
                id = 1 + Math.round(Math.random() * 825);
            } while (ids.includes(id))
            ids.push(id);
        }
        fetch('https://rickandmortyapi.com/api/character/' + ids.join())
            .then(response => response.json())
            .then(json => setUsers(json));
    }, []);

    return (
        <>
            <h1 style={{textAlign: 'center'}}>Rick and Morty</h1>
            <div className={'RickAndMorty'}>
                {users.map((info, key) => (<Character key={key} info={info}/>))}
            </div>
        </>
    );
}

export default RickAndMorty;