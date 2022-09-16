import axios from "axios";

const _url = 'https://api.spacexdata.com/v3/';
const _launches = 'launches?filter=mission_name,launch_year,links(mission_patch_small)&start=2000-01-01&end=2019-12-31';

const instance = axios.create({baseURL: _url, timeout: 10000});

const getLaunches = () => instance.get(_launches).catch(console.error);

export {getLaunches}



