<template>
  <div class="d-flex justify-content-between my-5">
    <h2>Users</h2>
    <router-link to="/newuser" class="btn btn-primary px-5">Add</router-link>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Avatar</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>
          <img
            :src="user.avatar"
            :alt="user.first_name"
            class="w-25 rounded-circle"
            v-if="user.avatar != null"
          />
        </td>
        <td>{{ user.first_name }}</td>
        <td>{{ user.last_name }}</td>
        <td>{{ user.email }}</td>
        <td>
          <router-link :to="`/user/${user.id}/edit`" class="btn btn-info"
            >Edit
          </router-link>
        </td>

        <td>
          <router-link :to="`/user/${user.id}/details`" class="btn btn-primary"
            >Details
          </router-link>
        </td>

        <td>
          <button @click="deleteUser(user.id)" class="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import DataService from "../services/dataservice";

export default {
  name: "user-list",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.getAllUser();
  },
  methods: {
    deleteUser(id) {
      DataService.deleteUser(id).then(() => {
        this.getAllUser();
      });
    },
    getAllUser() {
      DataService.getAllUser()
        .then((resp) => {
          //console.log(resp)
          this.users = resp;
        })
        .catch();
    },
  },
};
</script>

<style>
</style>