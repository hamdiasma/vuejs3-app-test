<template>
    <div>
        Page UserIndex
    </div>
</template>

<script>
import {userServices} from "@/_services"
export default{
    name:'UserIndex',
    mounted(){
        userServices.getAllusers().then(res=> console.log(res.data?.data)).catch(error=>console.log(error))
    }
}
</script>