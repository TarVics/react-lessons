const owu = {
    config: {
        baseURL: 'http://owu.linkpc.net/api/v2',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    },
    uri: {
        cars: (id) => '/cars' + (id ? '/' + id : '')
    }
}

export {owu}