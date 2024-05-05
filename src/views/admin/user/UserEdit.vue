<template>
    <div>
        Page UserEdit
    </div>
    <router-link to="/admin/users/edit/15"> user</router-link>
    {{ test }}
</template>
<script>
export default{
    name:'UserEdit',
    data(){
        return{
            test:''
        }
    },

    mounted(){
        this.test = this.$route.params.id
    },
    updated(){
        this.test = this.$route.params.id
    }
}
</script>