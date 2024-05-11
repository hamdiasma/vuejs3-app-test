

<template>
    <div>
      {{ GETTER_HAMDI }}

        {{ GETTER_USERS(1) }}
      <!--  {{ aff }}-->
        <NavPublic/>
        <RouterView/>
    </div>
</template>
<script>
import {RouterView} from "vue-router"
import NavPublic from '../../components/NavPublic.vue';
import {mapGetters} from "vuex"
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
        ...mapGetters(["GETTER_HAMDI","GETTER_USERS"])
    },
}



</script>