<template>
  <div>
    <h1>Connexion</h1>
    <form @submit.prevent="login">
      <div class="formGroup">
        <label for="user_login">Login</label> <input id="user_login" type="text" v-model="userDAta.login" />{{ userDAta.login }}
      </div>
      <div class="formGroup">
        <label for="user_password">Mot de passe</label>
        <input id="user_password" type="password" v-model="userDAta.password" />{{ userDAta.password }}
      </div>
      <div class="formGroup"><button type="submit" class="button">Connexion</button></div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userDAta: {
        login: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      console.log(this.userDAta);
    }
  }
};
</script>
