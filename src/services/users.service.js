import {axiosService} from "./axios.service";
import {usersUrl} from "../configs";

const usersService = {

    getAlbums: id => axiosService.get(usersUrl.uri.albums(id))
        .catch(console.error)
        .then(({data}) => id ? {[data.userId]: data} : data.reduce((acc, val) => {
            // {
            //     [userId]: [{}]
            // }
            let items = acc[val.userId];
            if (!items) {
                items = [];
                acc[val.userId] = items;
            }

            items.push(val);

            return acc;
        }, {})),

    getComments: id => axiosService.get(usersUrl.uri.comments(id))
        .catch(console.error)
        .then(({data}) => id ? {[id]: data} : data.reduce((acc, val) => {
            // {
            //     [postId]: [{}]
            // }
            let items = acc[val.postId];
            if (!items) {
                items = [];
                acc[val.postId] = items;
            }
            items.push(val);

            return acc;
        }, {})),

    getPosts: id => axiosService.get(usersUrl.uri.posts(id))
        .catch(console.error)
        .then(({data}) => id ? {[data.id]: data} : data.reduce((acc, val) => {
            // {
            //     [id]: [{}]
            // }
            let items = acc[val.id];
            if (!items) {
                items = [];
                acc[val.id] = items;
            }

            items.push(val);
            return acc;
        }, {})),

    getTodos: id => axiosService.get(usersUrl.uri.todos(id))
        .catch(console.error)
        .then(({data}) => id ? {[data.userId]: data} : data.reduce((acc, val) => {
            // {
            //     [userId]: {
            //         uncompleted: [{}],
            //         completed: [{}]
            //     }
            // }

            let userData = acc[val.userId];
            if (!userData) {
                userData = {};
                acc[val.userId] = userData;
            }

            const key = val.completed ? 'completed' : 'uncompleted';
            let items = userData[key];
            if (!items) {
                items = [];
                userData[key] = items;
            }

            items.push(val);

            return acc;
        }, [])),

    getUsers: id => axiosService.get(usersUrl.uri.users(id))
        .catch(console.error)
        .then(({data}) => id ? {[data.id]: data} : data.reduce((acc, val) => (acc[val.id] = val) && acc, {})),
}

export {usersService}
