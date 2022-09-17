import axios from "axios";

import { placeholder } from "../configs";

const axiosInstance = axios.create(placeholder.config);

const userService = {
    getAll: () => axiosInstance.get(placeholder.uri.users()),
    getUser: (id) => axiosInstance.get(placeholder.uri.user(id)),
    getPosts: (id) => axiosInstance.get(placeholder.uri.posts(id))
}

export {userService}

