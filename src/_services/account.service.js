import Axios from "./caller.service";

let login = (credentials) => {
  return Axios.post("/auth/login", credentials);
};

let logout = () => {
  localStorage.removeItem("token");
};

let saveToken = (token) => {
  localStorage.setItem("token", token);
};

let getToken = () => {
   return localStorage.getItem("token");
  };
  
let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token;
};

export const accountServices = {
  login,
  isLogged,
  logout,
  saveToken,
  getToken
};
