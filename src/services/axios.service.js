import axios from "axios";

import {jsonplaceholder} from "../configs";

const axiosService = axios.create(jsonplaceholder.config);

export { axiosService }