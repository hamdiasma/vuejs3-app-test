<template>
  <div>
    <h3>Page UserAdd</h3>
    <div v-if="errors.length">
      <b>Merci de corriger les erreurs suivantes</b>
      <ul>
        <li v-for="(err, index) in errors" :key="index">{{ err }}</li>
      </ul>
    </div>
    <form @submit.prevent="add">
      <div class="formGroup">
        <label for="user_name">Nom</label> <input id="user_name" type="text" v-model="userDAta.nom" />
      </div>
      <div class="formGroup">
        <label for="user_prenom">Prenom</label> <input id="user_prenom" type="text" v-model="userDAta.prenom" />
      </div>
      <div class="formGroup">
        <label for="user_pseudo">Pseudo</label> <input id="user_pseudo" type="text" v-model="userDAta.pseudo" />
      </div>
      <div class="formGroup">
        <label for="user_email">Email</label> <input id="user_email" type="text" v-model="userDAta.email" />
      </div>
      <div class="formGroup">
        <label for="user_password">Password</label> <input id="user_password" type="text" v-model="userDAta.password" />
      </div>
      <div class="formGroup">
        <label for="user_confirme">Confirme</label> <input id="user_confirme" type="text" v-model="confirme" />
      </div>
      <div class="formGroup"><button type="submit" class="button">modifier</button></div>
    </form>
  </div>
</template>

<script>
import { userServices } from "@/_services";
export default {
  name: "UserAdd",
  data() {
    return {
      userDAta: {
        id: this.id,
        nom: "",
        prenom: "",
        pseudo: "",
        email: "",
        password: ""
      },
      confirme: "",
      errors: []
    };
  },
  methods: {
    add() {
      if (this.userDAta.password !== this.confirme) {
         this.errors.push("Mots de passes ne sont pas confirme ");
      } else if (this.userDAta.password.length < 6) {
         this.errors.push("Mot de passe doit avoir 6 caracters");
      }
      if (this.errors.length===0) {
        userServices
          .addUser(this.userDAta)
          .then(res => console.log(res?.data))
          .catch(err => console.log(err));
      }
    }
  }
};
</script>

<style scoped>
.formGroup label {
  width: 300px;
}
</style>
