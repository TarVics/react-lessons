const usersUrl = {
    config: {
        baseURL: process.env.REACT_APP_API,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    },
    uri: {
        todos: id => '/todos' + (id ? '/' + id : ''),
        albums: id => '/albums' + (id ? '/' + id : ''),
        comments: id => (id ? '/posts/' + id : '') + '/comments',
        posts: id => '/posts' + (id ? '/' + id : ''),
        users: id => '/users' + (id ? '/' + id : ''),
    }
}

export {usersUrl}