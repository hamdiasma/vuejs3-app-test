import axios from "axios";
import { accountServices } from "./account.service";
import router from "@/router"

export const URL_APP = "http://localhost:8888";

const Axios = axios.create({
  baseURL: URL_APP
});

Axios.interceptors.request.use((request) => {
  if (accountServices.isLogged()) {
    request.headers.Authorization = "Bearer " + accountServices.getToken();
  }
  return request;
});

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      accountServices.logout();
      router.push("/login");
    }
    console.log({ error });
  }
);

export default Axios;
