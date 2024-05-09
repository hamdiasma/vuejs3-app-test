<template>
  <div>
    <h1>Connexion</h1>
    <form @submit.prevent="login">
      <div class="formGroup">
        <label for="user_login">Login</label>
        <input id="user_login" type="text" v-model="userDAta.email" />{{
          userDAta.email
        }}
      </div>
      <div class="formGroup">
        <label for="user_password">Mot de passe</label>
        <input
          id="user_password"
          type="password"
          v-model="userDAta.password"
        />{{ userDAta.password }}
      </div>
      <div class="formGroup">
        <button type="submit" class="button">Connexion</button>
      </div>
    </form>
  </div>
</template>

<script>
import router from "@/router";
import { accountServices } from "@/_services";
export default {
  name: "Login",
  data() {
    return {
      userDAta: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
        accountServices
        .login(this.userDAta)
        .then((res) => {
            if(res?.data?.access_token){
                accountServices.saveToken(res.data.access_token)
                router.push("/admin/dashboard")
            }

        })
        .catch((err) => console.log(err));
    }
  }
};
</script>
