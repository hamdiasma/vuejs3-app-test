<template>
  <div>
    <h3>Page UserIndex (il y en a {{ comptage }})</h3>
    <table>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Id</th>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Email</th>
          <th>Creation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <td class="delete" @click="deleteUser(index)">X</td>
          <td>{{ user.id }}</td>
          <td class="edit" @click="goEdit(user.id)">{{ user.nom }}</td>
          <td>{{ user.prenom }}</td>
          <td>{{ user.email }}</td>
          <td>{{ dateFormat[index] }}</td>
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
    };
  },
  mounted() {
    userServices
      .getAllusers()
      .then(res => {
        console.log(res.data.data);
        this.users = res.data?.data;
      })
      .catch(error => console.log(error));
  },
  methods: {
    // dateFormat(date){
    //   return  date.split("T")[0].split('-').reverse().join("/")
    // }
    goEdit(id) {
      //  this.$router.push("/admin/users/edit/"+id)
      this.$router.push({ name: "uEdit", params: { id } });
    },
    deleteUser(index) {
      userServices
        .delUser(this.users[index].id)
        .then(res => {
            this.users.splice(index, 1);
        })
        .catch(err => console.log(err));
    }
  },
  computed: {
    comptage() {
      return this.users.length;
    },
    dateFormat() {
      return this.users.map(user =>
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
