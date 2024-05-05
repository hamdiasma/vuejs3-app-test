

<template>
    <div>
        <NavPublic/>
        <RouterView/>
    </div>
</template>
<script>
import {RouterView} from "vue-router"
import NavPublic from '../../components/NavPublic.vue';
export default{
    name:'PublicLayout',
    components:{
        NavPublic,
        RouterView
    }
}



</script>