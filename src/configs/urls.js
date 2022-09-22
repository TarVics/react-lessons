const owu = {
    config: {
        baseURL: process.env.REACT_APP_API,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    },
    uri: {
        cars: (id) => '/cars' + (id ? '/' + id : '')
    }
}

export {owu}