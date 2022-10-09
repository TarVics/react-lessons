import axios from "axios";

import {owu} from "../configs";

const axiosService = axios.create(owu.config);

export { axiosService }