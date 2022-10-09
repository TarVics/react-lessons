const owu = {
    config: {
        baseURL: process.env.REACT_APP_API,
        // headers: {
            // 'Content-type': 'application/json; charset=UTF-8'
            // 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            // 'Content-type': 'multipart/form-data; charset=UTF-8'
        // }
    },
    uri: {
        cars: (id) => '/cars' + (id ? '/' + id : ''),
        auth: {
            login: '/auth',
            refresh: '/auth/refresh'
        },
        users: '/users'
    }
}

export {owu}