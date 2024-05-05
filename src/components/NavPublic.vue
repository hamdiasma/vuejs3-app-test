<template>
  <div class="pb_head">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/cocktails">Cocktail</RouterLink>
    <RouterLink to="/admin/dashboard">Dashboard</RouterLink>
  </div>
</template>


<script>
export default {
  name: "NavPublic",
};
</script>


<style scoped>
.pb_head{
  border: 1px solid blue;
}
</style>