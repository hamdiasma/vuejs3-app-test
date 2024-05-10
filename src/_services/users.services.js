import Axios from "./caller.service";

let getAllusers = () => {
  return Axios.get("/users");
};
let getUsers = (id) => {
  return Axios.get("/users/" + id);
};

let etidUser = (user) => {
  return Axios.patch("/users/" + user.id, user);
};

let addUser = (user) => {
  return Axios.put("/users/", user);
};
let delUser = (id) => {
  return Axios.delete("/users/"+ id);
};

export const userServices = {
  getAllusers,
  getUsers,
  etidUser,
  addUser,
  delUser
};
