import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {jsonPlaceholderService} from "../../services";
import {Album, DataLayout} from "../../components";

function AlbumsPage() {
    const location = useLocation();
    const [albums, setAlbums] = useState([]);
    const { state: users } = location;

    useEffect(() => {

        const load = async() => {
            const dUsers = users || await jsonPlaceholderService.getUsers();
            const dAlbums = await jsonPlaceholderService.getAlbums();

            setAlbums(value => dAlbums.map(item => ({...item, user: dUsers[item.user.id]})));
        }

        load();

    }, []);

    return (
        <DataLayout width="4" columns="2" padding={'40px 0'}>
            {albums.map((value, index) => <Album key={index} {...value}/>)}
        </DataLayout>
    );
}

export {AlbumsPage}