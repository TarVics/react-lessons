const _url = 'https://jsonplaceholder.typicode.com/';

const getJSON = (url) => fetch(_url + url).then(res => res.json());

const getUsers = () => getJSON('users');
const getUser = (id) => getJSON('users/' + id);
const getUserPosts = (id) => getJSON('users/' + id + '/posts');

export {getUsers, getUser, getUserPosts}

