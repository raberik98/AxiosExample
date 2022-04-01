<template>
  <div class="row mt-5">
    <div class="col-12">
      <h2>Update user</h2>
    </div>
    <div class="col-12 col-md-6 mx-md-auto">
      <form method="post" @submit.prevent="updateUser">
        <div class="mb-3">
          <label for="email" class="form-label">E-mail</label>
          <input
            type="email"
            id="email"
            class="form-control"
            v-model="updateUserForm.email"
          />
        </div>
        <div class="mb-3">
          <label for="first-name" class="form-label">First name</label>
          <input
            type="text"
            id="first-name"
            class="form-control"
            v-model="updateUserForm.first_name"
          />
        </div>
        <div class="mb-3">
          <label for="last-name" class="form-label">Last name</label>
          <input
            type="text"
            id="last-name"
            class="form-control"
            v-model="updateUserForm.last_name"
          />
        </div>
        <div class="mb-3">
          <label for="avatar" class="form-label">Avatar</label>
          <input
            type="text"
            id="avatar"
            class="form-control"
            v-model="updateUserForm.avatar"
          />
        </div>
        <input type="submit" value="Save" class="btn btn-primary" />
      </form>
    </div>
  </div>
</template>

<script>
import DataService from '../services/dataservice'

export default {
  name: "new-user",
  data() {
    return {
      updateUserForm: {
        email: "",
        first_name: "",
        last_name: "",
        avatar: "",
      },
    };
  },
  methods: {
    updateUser() {
        //console.log(this.newUserForm)
        DataService.updateUser(this.updateUserForm,this.$route.params.id)
            .then(()=>{
                this.$router.push('/');
            });
    },
  },
  mounted(){
    DataService.getUserbyId(this.$route.params.id)
      .then(resp =>{
        this.updateUserForm = resp
      })
  }
};
</script>

<style>
</style>