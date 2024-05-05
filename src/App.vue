

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <RouterView />
  </header>
</template>
<script setup>
import {  RouterView } from "vue-router";
</script>
<style scoped>
.logo{
  position: absolute;
  right: 30px;
  top: 0;
  width: 30px;
  z-index: -1;
}
</style>
