const jsonplaceholder = {
    config: {
        baseURL: process.env.REACT_APP_API,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    },
    uri: {
        todos: () => '/todos',
        albums: () => '/albums',
        comments: id => (id ? '/posts/' + id : '') + '/comments',
        posts: id => '/posts' + (id ? '/' + id : ''),
        users: id => '/users' + (id ? '/' + id : ''),
    }
}

export {jsonplaceholder}