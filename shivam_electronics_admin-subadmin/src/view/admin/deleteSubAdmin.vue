<template>
  <div>
    <adminHead></adminHead>

    <section class="content">
      <div class="container-fluid">
        <div class="card">
          <div class="header">
            <h2 style="color : red;">Result : {{ error }}</h2>
          </div>
          <div class="body">
            <button type="button" class="btn btn-primary waves-effect" @click="back">Back</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import manage from "../../services/admin/manageSubAdmin";

export default {
  data() {
    return {};
  },
  methods: {
    retrieveDetails(id) {
      manage
        .removesubadmin(id)
        .then(res => {
          let response = res.data;

          this.$router.push("/admin/manageEmployees");
        })
        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    },
    back() {
      this.$router.push("/admin/manageEmployees");
    }
  },
  beforeMount() {
     if(this.$session.has("subadmin-email") === true)
    {
      this.$router.push("*");
    }
    else if (this.$session.has("admin-email") === true) {
       this.retrieveDetails(this.$route.params.adminID);
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

