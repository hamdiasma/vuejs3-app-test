import Axios from "./caller.service";

let getAllusers = () => {
    return Axios.get("/users");
  };

  export const userServices = {
    getAllusers
  };