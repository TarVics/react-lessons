import axios from "axios";
import {placeholder} from "../configs";

const axiosInstance = axios.create(placeholder.config);

export {axiosInstance}
