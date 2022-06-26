import axios from "axios"
import {notify} from "../toast";
import Cookies from "universal-cookie";
const custom = {
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer OTUwMTZiZmMtMzFmZS00ZTU4LTllNWItYjhkZDNhN2EyMTVh"
    },

}

let apiClient = axios.create(custom)

apiClient.interceptors.request.use(function (config) {
    document.body.classList.add('loading-indicator');
    return config;
}, function (error) {
    return Promise.reject(error);
});

apiClient.interceptors.response.use(function (response) {
    document.body.classList.remove('loading-indicator');
    if (response.config.method === "post" ||
        response.config.method === "put" ||
        response.config.method === "delete"
    ){
        if (response.status === 200 || response.status === 204) {
                notify(" عملیات موفقیت آمیز", "success")
            }

    }
    return response;
}, function (error) {
    document.body.classList.remove('loading-indicator');
        if (window.location.pathname !== `/login`) window.location.href = `/login`
        notify(error?.response?.data?.detail, "error")
    return Promise.reject(error);
});



export default apiClient