<template>
  <div>
    <h1>Connexion</h1>
    <form @submit.prevent="login">
      <div class="formGroup">
        <label for="user_login">Login</label> <input id="user_login" type="text" v-model="userDAta.email" />{{ userDAta.email }}
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
import { URL_APP } from "@/_helpers/auth-guard";
import router from '@/router';
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
      fetch(`${URL_APP}/auth/login`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(this.userDAta)
      })
        .then(res => res.json())
        .then(data => {
           if(data?.access_token){
            localStorage.setItem("token", data.access_token);
            router.push("/admin/dashboard")
           }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
