const spacex = {
    config: {
        baseURL: 'https://api.spacexdata.com/v3',
        timeout: 10000
    },
    uri: {
        launches: '/launches?filter=mission_name,launch_year,links(mission_patch_small)&start=2000-01-01&end=2019-12-31&sort=launch_year&order=desc'
    }
}

const placeholder = {
    config: {
        baseURL: 'https://jsonplaceholder.typicode.com',
    },
    uri: {
        users: () => '/users',
        user: id => '/users/' + id,
        posts: id => '/users/' + id + '/posts'
    }
}

export {spacex, placeholder}