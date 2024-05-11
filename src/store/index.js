import { createStore } from "vuex";

export default createStore({
  state: {
    hamdi:"hamdi",
    users: [
      {
        id: 0,
        nom: "layane"
      },
      {
        id: 1,
        nom: "hamdi"
      }
    ]
  },
  getters: {
    GETTER_HAMDI(state) {
      return state.users[0].nom;
    },
    // GETTER_USERS(state) {
    //     return state.users[id].nom;
    // }
    // pour passer un id
    GETTER_USERS:(state)=>(id)=> {
        return state.users[id].nom;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});