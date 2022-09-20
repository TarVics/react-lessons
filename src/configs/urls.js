const placeholder = {
    config: {
        baseURL: 'https://jsonplaceholder.typicode.com',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    },
    uri: {
        users: () => '/users',
        user: id => '/users/' + id,
        posts: id => '/users/' + id + '/posts'
    }
}

export {placeholder}