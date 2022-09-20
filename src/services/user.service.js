import {axiosInstance} from "./axios.service";

import {placeholder} from "../configs";

const userService = {
    getAll: () => axiosInstance.get(placeholder.uri.users()),
    getUser: (id) => axiosInstance.get(placeholder.uri.user(id)),
    addUser: (user) => axiosInstance.post(placeholder.uri.users(), user),
    getPosts: (id) => axiosInstance.get(placeholder.uri.posts(id)),
    addPost: (userId, post) => axiosInstance.post(placeholder.uri.posts(userId), post)
}

export {userService}

