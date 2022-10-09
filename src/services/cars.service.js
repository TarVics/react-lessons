import {axiosService} from "./axios.service";
import {owu} from "../configs";

const carsService = {
    getAll: () => axiosService.get(owu.uri.cars()).catch(console.error),
    getById: (id) => axiosService.get(owu.uri.cars(id)).catch(console.error),
    create: (car) => axiosService.post(owu.uri.cars(), car).catch(console.error),
    updateById: (id, car) => axiosService.put(owu.uri.cars(id), car).catch(console.error),
    deleteById: (id) => axiosService.delete(owu.uri.cars(id)).catch(console.error)
}

export {carsService}
