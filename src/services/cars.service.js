import {axiosService} from "./axios.service";
import {owu} from "../configs";

const carsService = {
    getAll: (page= 1) => axiosService.get(owu.uri.cars(), {params: {page}}),
    create: (car) => axiosService.post(owu.uri.cars(), car),
    addPhotoById: (id, data) => axiosService.patch(owu.uri.cars(id), data)
}

export {
    carsService
}
