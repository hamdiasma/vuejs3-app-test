<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/cocktails">Cocktail</RouterLink>
  </div>
</template>


<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "NavPublic",
};
</script>