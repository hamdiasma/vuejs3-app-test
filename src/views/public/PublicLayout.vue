

<template>
    <div>
        <NavPublic/>
        <RouterView/>
    </div>
</template>
<script setup>
import {RouterView} from "vue-router"
import NavPublic from '../../components/NavPublic.vue';

</script>