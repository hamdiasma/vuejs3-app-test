

<template>
    <div>
        {{ GETTER_USERS_COUNT }}
      {{ GETTER_HAMDI }}

        {{ GETTER_USERS(1) }}
        <button @click="change">Change Username</button>
      <!--  {{ aff }}-->
        <NavPublic/>
        <RouterView/>
    </div>
</template>
<script>
import {RouterView} from "vue-router"
import NavPublic from '../../components/NavPublic.vue';
import {mapGetters,mapMutations} from "vuex"
// mapGetters => get all getters : placement sur computed
export default{
    name:'PublicLayout',
    components:{
        NavPublic,
        RouterView
    },
    // data() {
    //     return {
    //         // aff:"rien"
    //         // aff: this.$store.state.hamdi
    //     }
    // },
    // mounted() {
    //     this.aff = this.$store.getters["GETTER_HAMDI"]
    // },
    computed: {
        ...mapGetters(["GETTER_HAMDI","GETTER_USERS","GETTER_USERS_COUNT"]),
    },
    methods: {
        // ...mapMutations(["changeHamdi"]) // on utlise mapMutations sur methods

        change(){
            //commit appel mutation
         this.$store.commit("changeHamdi",{id:2 , nom:"asma"})
        }
    },
}



</script>