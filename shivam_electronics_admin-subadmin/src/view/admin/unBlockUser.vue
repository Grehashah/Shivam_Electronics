<template>
  <div>
    <adminHead></adminHead>

    
  </div>
</template>

<script>
import manage from "../../services/admin/manageUser_service";

export default {
  data() {
    return {};
  },
  methods: {
    retrieveDetails(id) {
      const data = {
        userID: id
      };
      manage
        .unBlockUser(data)
        .then(res => {
          let response = res.data;

          this.$router.push("/admin/manageUsers");
        })
        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    },
    back() {
      this.$router.push("/admin/manageUsers");
    }
  },
  beforeMount() {
    if(this.$session.has("subadmin-email") === true)
    {
      this.$router.push("*");
    }
    else if (this.$session.has("admin-email") === true) {
     this.retrieveDetails(this.$route.params.userID);
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

