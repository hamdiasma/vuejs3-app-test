<template>
  <div>Page UserEdit</div>
  <form @submit.prevent="edit">
    <div class="formGroup">
      <label for="user_name">Nom</label>
      <input id="user_name" type="text" v-model="userDAta.nom" />
    </div>
    <div class="formGroup">
      <label for="user_prenom">Prenom</label>
      <input id="user_prenom" type="text" v-model="userDAta.prenom" />
    </div>
    <div class="formGroup">
      <label for="user_pseudo">Pseudo</label>
      <input id="user_pseudo" type="text" v-model="userDAta.pseudo" />
    </div>
    <div class="formGroup">
      <label for="user_email">Email</label>
      <input id="user_email" type="text" v-model="userDAta.email" />
    </div>
    <div class="formGroup">
      <button type="submit" class="button">modifier</button>
    </div>
  </form>
</template>
<script>
import { userServices } from "@/_services";

export default {
  name: "UserEdit",
  props: ["id"],
  data() {
    return {
        userDAta:{
            id:this.id,
            nom:"",
            prenom:"",
            pseudo:"",
            email:"",
        }
    }
  },
  methods: {
    edit(){
      userServices.etidUser(this.userDAta).then(res=>this.$router.push({name:"uIndex"}))
    }
  },
  mounted() {
    userServices
      .getUsers(this.id)
      .then((res) => {
        this.userDAta = res.data?.data
      })
      .catch((error) => console.log(error));
  }
};
</script>
