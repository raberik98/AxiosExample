<template>
  <div class="row mt-5">
    <div class="col-12">
      <h2>User details</h2>
    </div>
    <div class="card">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="userDetails.avatar" class="img-fluid" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ userDetails.first_name }} {{ userDetails.last_name }}
            </h5>
            <p class="card-text">E-mail: {{ userDetails.email }}</p>
            <router-link to="/" class="btn btn-primary">Back</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "../services/dataservice.js";

export default {
  name: "user-details",
  data() {
    return {
      userDetails: {
        id: "",
        email: "",
        first_name: "",
        last_name: "",
        avatar: "",
      },
    };
  },
  mounted() {
    DataService.getUserbyId(this.$route.params.id).then((resp) => {
      this.userDetails = resp;
      //console.log(this.userDetails);
    });
  },
};
</script>

<style>
</style>