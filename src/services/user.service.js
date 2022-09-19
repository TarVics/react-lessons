import axios from "axios";

import {placeholder} from "../configs";

const axiosInstance = axios.create(placeholder.config);

const loadData = (uri, name) => {
    const data = sessionStorage.getItem(name);
    if (data) return Promise.resolve(JSON.parse(data));
    return axiosInstance.get(uri)
        .then(data => {
            sessionStorage.setItem(name, JSON.stringify(data));
            return data;
        }).catch(console.error);
}

const userService = {
    getAll: () => loadData(placeholder.uri.users(), 'users'),
    getUser: (id) => axiosInstance.get(placeholder.uri.user(id)),
    getPosts: (id) => axiosInstance.get(placeholder.uri.posts(id))
}

export {userService}

