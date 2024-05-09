import axios from "axios"
import { accountServices } from "./account.service"

export const URL_APP = "http://localhost:8888"

const Axios = axios.create({
    baseURL:URL_APP
})
Axios.interceptors.request.use(request=>{
    if(accountServices.isLogged()){
        request.headers.Authorization = 'Bearer '+ accountServices.getToken()
    }
    return request
})

export default Axios