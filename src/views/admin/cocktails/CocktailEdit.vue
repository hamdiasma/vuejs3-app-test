<template>
  <div>
    <h3>Page CocktailEdit</h3>
    <form @submit.prevent="add">
      <div class="formGroup">
        <label for="user_prenom">nom</label> <input id="user_prenom" type="text" v-model="cocktailData.nom" />
      </div>
      <div class="formGroup">
        <label for="user_pseudo">description</label> <input id="user_pseudo" type="text" v-model="cocktailData.description" />
      </div>
      <div class="formGroup">
        <label for="user_email">recette</label> <input id="user_email" type="text" v-model="cocktailData.recette" />
      </div>
      <div class="formGroup"><button type="submit" class="button">ajouter</button></div>
    </form>
  </div>
</template>

<script>
import { cocktailsServices } from "@/_services";
export default {
  name: "CocktailEdi",
  data() {
    return {
      cocktailData: {
        user_id: "9",
        nom: "",
        description: "",
        recette: ""
      }
    };
  },
  methods: {
    add() {

      cocktailsServices
        .addCocktail(this.cocktailData)
        .then(res => this.$router.push({name:'lIndex'}))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.formGroup label {
  width: 300px;
}
</style>
