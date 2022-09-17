import axios from "axios";

import { spacex } from "../configs";

const axiosInstance = axios.create(spacex.config);

const spacexService = {
    getLaunches: () => {
        const data = sessionStorage.getItem('spacexdata-launches');
        if (data) return Promise.resolve(JSON.parse(data));
        return axiosInstance.get(spacex.uri.launches)
            .then(data => {
                sessionStorage.setItem('spacexdata-launches', JSON.stringify(data));
                return data;
            }).catch(console.error);
    }
}

export { spacexService }
