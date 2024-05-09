<template>
    <div class="ad_head">
        AdminHeader 
        <button @click="logeOut">Logout</button>
    </div>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';
import {accountServices} from "@/_services"
const router = useRouter()

       const logeOut=()=>{
            accountServices.logout()
            router.push("/")
        }
</script>


<style scoped>
.ad_head{
    border: 1px solid green;
}
button{
    float: right
}
</style>