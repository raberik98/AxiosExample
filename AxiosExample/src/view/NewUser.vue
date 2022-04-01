<template>
  <div class="row mt-5">
    <div class="col-12">
      <h2>New user</h2>
    </div>

    <div class="col-12 col-md-6 mx-md-auto">
      <div class="alert alert-danger" v-if="errors.length > 0">
        <ul>
          <li v-for="(error, index) in errors" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>

      <form method="post" @submit.prevent="saveUser">
        <div class="mb-3">
          <label for="email" class="form-label">E-mail</label>
          <input
            type="email"
            id="email"
            class="form-control"
            v-model="newUserForm.email"
          />
        </div>
        <div class="mb-3">
          <label for="first-name" class="form-label">First name</label>
          <input
            type="text"
            id="first-name"
            class="form-control"
            v-model="newUserForm.first_name"
          />
        </div>
        <div class="mb-3">
          <label for="last-name" class="form-label">Last name</label>
          <input
            type="text"
            id="last-name"
            class="form-control"
            v-model="newUserForm.last_name"
          />
        </div>
        <div class="mb-3">
          <label for="avatar" class="form-label">Avatar</label>
          <input
            type="text"
            id="avatar"
            class="form-control"
            v-model="newUserForm.avatar"
          />
        </div>
        <input type="submit" value="Save" class="btn btn-primary" />
      </form>
    </div>
  </div>
</template>

<script>
import DataService from "../services/dataservice";

export default {
  name: "new-user",
  data() {
    return {
      newUserForm: {
        email: "",
        first_name: "",
        last_name: "",
        avatar: "",
      },
      errors: [],
    };
  },
  methods: {
    saveUser() {
      //console.log(this.newUserForm)
      if (this.formValidation()) return;
      DataService.saveUser(this.newUserForm).then(() => {
        this.$router.push("/");
      });
    },
    formValidation() {
      this.errors = [];
      if (!this.newUserForm.email) {
        this.errors.push("E-mail required!");
      }
      if (!this.newUserForm.first_name) {
        this.errors.push("First name required!");
      }
      if (!this.newUserForm.last_name) {
        this.errors.push("Last name required!");
      }
      return this.errors.length;
    },
  },
};
</script>

<style>
</style>