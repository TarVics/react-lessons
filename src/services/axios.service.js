import axios from "axios";

import {usersUrl} from "../configs";

const axiosService = axios.create(usersUrl.config);

export {axiosService}