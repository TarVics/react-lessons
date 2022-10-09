import {axiosService} from "./axios.service";
import {owu} from "../configs";


const _accessTokenKey = 'access'
const _refreshTokenKey = 'refresh'
const authService = {
    register: (user) => axiosService.post(owu.uri.users, user),
    login: (user) => axiosService.post(owu.uri.auth.login, user),
    refresh: (refresh) => axiosService.post(owu.uri.auth.refresh, {refresh}),

    setTokens: ({access, refresh}) => {
        localStorage.setItem(_accessTokenKey, access);
        localStorage.setItem(_refreshTokenKey, refresh);
    },
    deleteToken:()=>{
        localStorage.removeItem(_accessTokenKey)
        localStorage.removeItem(_refreshTokenKey)
    },
    getAccessToken:()=>localStorage.getItem(_accessTokenKey),
    getRefreshToken:()=>localStorage.getItem(_refreshTokenKey),

}

export {
    authService
}
