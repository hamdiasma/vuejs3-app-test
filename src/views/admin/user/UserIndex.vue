<template>
  <div>
    <h3>Page UserIndex (il y en a {{comptage}})</h3>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Email</th>
                <th>Creation</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.nom }}</td>
            <td>{{ user.prenom }}</td>
            <td>{{ user.email }}</td>
            <td>{{dateFormat[index] }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import { userServices } from "@/_services";
export default {
  name: "UserIndex",
  data() {
    return {
        users: []
    }
  },
  mounted() {
    userServices
      .getAllusers()
      .then((res) =>{
        console.log(res.data.data);
        this.users = res.data?.data})
      .catch((error) => console.log(error));
  },
  methods:{
    // dateFormat(date){
    //   return  date.split("T")[0].split('-').reverse().join("/")
    // }
  },
  computed:{
    comptage(){
       return this.users.length
    },
    dateFormat(){
      return  this.users.map(user=> user.createdAt.split("T")[0].split('-').reverse().join("/")) 
    }
  }
};
</script>
