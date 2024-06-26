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
    GETTER_USERS_COUNT(state) {
        return state.users.length;
    },
    // pour passer un id
    GETTER_USERS:(state)=>(id)=> {
        return state.users[id].nom;
    }
  },
  mutations: {
    changeHamdi(state, payload){
        state.users = [...state.users, payload]
        state.users[0].nom = payload.nom
    }
  },
  actions: {
    modify(context){
      console.log(context);
    //   context.state.users[0].nom = "hello"
    context.commit('changeHamdi',{ 
        id: context.state.users.length,
        nom: "Acheck"
      })
    }
  },
  modules: {}
});