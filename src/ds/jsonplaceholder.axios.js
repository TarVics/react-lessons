import axios from "axios";

const _url = 'https://jsonplaceholder.typicode.com/';

const instance = axios.create({baseURL: _url});

const getUsers = () => instance.get('users');
const getUser = (id) => instance.get(id.toString());
const getUserPosts = (id) => instance.get('users/' + id + '/posts');

export {getUsers, getUser, getUserPosts}

