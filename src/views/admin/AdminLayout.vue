<template>
  <div class="admin">
    <AdminHeader />
    <div class="ad_container">
      <div class="ad_side">
        <AdminNav />
      </div>
      <div class="ad_display">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterView } from "vue-router";
import AdminHeader from "@/components/AdminHeader.vue";
import AdminNav from "@/components/AdminNav.vue";
</script>


<style scoped>
 .ad_container{
    display: flex;
 }
 .ad_side{
  padding: 10px;
  border-right: solid 1px black;
 }
 .ad_display{
  width: 100%;
  padding: 10px;
  text-align: left;
 }
</style>
