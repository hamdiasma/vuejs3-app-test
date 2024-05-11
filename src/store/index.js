import {createStore} from "vuex"

export default createStore({
    state:{
        hamdi:"hamdi"
    },
    getters:{
        GETTER_HAMDI(state){
            return state.hamdi
        }
    },
    mutations:{},
    actions:{},
    modules:{}
})