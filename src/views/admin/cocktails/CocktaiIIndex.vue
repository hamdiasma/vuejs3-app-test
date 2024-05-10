<template>
    <div>
      <h3>Page cocktail Index (il y en a {{ comptage }})</h3>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Id</th>
            <th>nom</th>
            <th>description</th>
            <th>recette</th>
            <th>user_id</th>
            <th>Creation</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(el, index) in cocktails" :key="el.id">
            <td class="delete" @click="deleteCoacktail(index)">X</td>
            <td>{{ el.id }}</td>
            <td class="edit" @click="goEdit(el.id)">{{ el.nom }}</td>
            <td>{{ el.description }}</td>
            <td>{{ el.recette }}</td>
            <td>{{ el.user_id }}</td>
            <td>{{ dateFormat[index] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { cocktailsServices } from "@/_services";
  export default {
    name: "CocktaiIIndex",
    data() {
      return {
        cocktails: []
      };
    },
    mounted() {
        cocktailsServices
        .getAllCocktails()
        .then(res => {
          console.log(res.data.data);
          this.cocktails = res.data?.data;
        })
        .catch(error => console.log(error));
    },
    methods: {
      goEdit(id) {
        //  this.$router.push("/admin/users/edit/"+id)
        this.$router.push({ name: "cEdit", params: { id } });
      },
      deleteCoacktail(index) {
        cocktailsServices
          .delCocktail(this.cocktails[index].id)
          .then(res => {
              this.cocktails.splice(index, 1);
          })
          .catch(err => console.log(err));
      }
    },
    computed: {
      comptage() {
        return this.cocktails.length;
      },
      dateFormat() {
        return this.cocktails.map(user =>
          user.createdAt
            .split("T")[0]
            .split("-")
            .reverse()
            .join("/")
        );
      }
    }
  };
  </script>
  
  <style scoped>
  .edit {
    cursor: pointer;
    color: blue;
  }
  .edit:hover {
    font: bolder;
    color: red;
  }
  
  .delete {
    background: red;
    color: white;
    font: bolder;
    width: 20px;
    height: 20px;
    text-align: center;
    margin-right: 20px;
    cursor: pointer;
  }
  
  .delete:hover {
    background: rgb(116, 7, 7);
  }
  </style>
  