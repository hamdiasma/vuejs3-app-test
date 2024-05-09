

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"

    />
    <RouterView />
  </header>
</template>
<script setup>
import {  RouterView } from "vue-router";
</script>
<style scoped>
.logo{
  width: 30px;

  /* position: absolute;
  right: 30px;
  top: 0;
  z-index: -1; */
}
</style>
