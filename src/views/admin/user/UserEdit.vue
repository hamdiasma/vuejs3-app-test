<template>
    <div>
        Page UserEdit
    </div>
    <router-link to="/admin/users/edit/15"> user</router-link>
    {{ id }}
</template>
<script>
export default{
    name:'UserEdit',
    props:["id"],
}
</script>