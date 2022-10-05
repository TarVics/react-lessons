import {axiosService} from "./axios.service";
import {jsonplaceholder} from "../configs";

const jsonPlaceholderService = {

    getAlbums: () => axiosService.get(jsonplaceholder.uri.albums())
        .catch(console.error)
        .then(({data}) => data.reduce((acc, val) => {
            // [
            //     {
            //         user: {id: 1},
            //         albums: [{}]
            //     }
            // ]

            let userData = acc.find(value => value.user.id === val.userId);
            if (!userData) {
                userData = {user: {id: val.userId}};
                acc.push(userData);
            }

            let items = userData['albums'];
            if (!items) {
                items = [];
                userData['albums'] = items;
            }

            items.push(val);

            return acc;
        }, [])),

    getComments: () => axiosService.get(jsonplaceholder.uri.comments())
        .catch(console.error)
        .then(({data}) => data.reduce((acc, val) => {
            // [
            //     {
            //         post: {id: 1},
            //         comments: [{}]
            //     }
            // ]

            let postData = acc.find(value => value.post.id === val.postId);
            if (!postData) {
                postData = {post: {id: val.postId}};
                acc.push(postData);
            }

            let items = postData['comments'];
            if (!items) {
                items = [];
                postData['comments'] = items;
            }

            items.push(val);

            return acc;
        }, [])),

    getCommentsByPostId: id => axiosService.get(jsonplaceholder.uri.comments(id))
        .catch(console.error)
        // .then(({data}) => data),
        .then(({data}) => {
            // [
            //     {
            //         post: {id: 1},
            //         comments: [{}]
            //     }
            // ]

            return {post: {id: id}, comments: data}
        }),
    getPosts: id => axiosService.get(jsonplaceholder.uri.posts(id))
        .catch(console.error)
        .then(({data}) => id ? data : data.reduce((acc, val) => (acc[val.id] = val) && acc, {})),

    getTodos: () => axiosService.get(jsonplaceholder.uri.todos())
        .catch(console.error)
        .then(({data}) => data.reduce((acc, val) => {
            // [
            //     {
            //         user: {id: 1},
            //         uncompleted: [{}],
            //         completed: [{}]
            //     }
            // ]

            let userData = acc.find(value => value.user.id === val.userId);
            if (!userData) {
                userData = {user: {id: val.userId}};
                acc.push(userData);
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

    getUsers: id => axiosService.get(jsonplaceholder.uri.users(id))
        .catch(console.error)
        .then(({data}) => id ? data : data.reduce((acc, val) => (acc[val.id] = val) && acc, {})),
}

export {jsonPlaceholderService}
