<template>
  <div class="ad_head">
    <h3>{{ 
  GETTER_HAMDI
 }}</h3>
    AdminHeader 
    <button @click="logeOut">Logout</button>
  </div>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import { accountServices } from "@/_services";
import {useStore, mapGetters} from "vuex";
import { ref,computed } from "vue";

const store = useStore()
const router = useRouter();
const state= ref(store.state.hamdi)

const logeOut = () => {
  accountServices.logout();
  router.push("/");
};


const GETTER_HAMDI = computed(()=>{ return store.getters["GETTER_HAMDI"]})

</script>

<style scoped>
.ad_head {
  border: 1px solid green;
}
button {
  float: right;
}
</style>
