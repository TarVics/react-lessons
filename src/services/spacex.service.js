import axios from "axios";

import { spacex } from "../configs";

const axiosInstance = axios.create(spacex.config);

const loadData = (uri, name) => {
    const data = sessionStorage.getItem(name);
    if (data) return Promise.resolve(JSON.parse(data));
    return axiosInstance.get(uri)
        .then(data => {
            sessionStorage.setItem(name, JSON.stringify(data));
            return data;
        }).catch(console.error);
}

const spacexService = {
    getLaunches: () => loadData(spacex.uri.launches, 'spacexdata-launches')
}

export { spacexService }
