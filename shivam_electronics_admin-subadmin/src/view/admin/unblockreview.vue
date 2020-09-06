<template>
  <div> <adminHead></adminHead>
</div>
</template>

<script>
//Scripts

import review from "../../services/admin/review_service";

export default {
  data() {
    return {
      rid: 0,
      id: 0
    };
  },
  methods: {
    retrieveDetails(id) {
      const data = {
        rid: id
      };
      review
        .editReview2(data)
        .then(res => {
          let response = res.data;
          if (response.result == 1) {
            this.$router.push("/admin/reviewoptions");
          }
        })

        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    }
  },
  beforeMount() {
    if(this.$session.has("subadmin-email") === true)
    {
      this.$router.push("*");
    }
    else if (this.$session.has("admin-email") === true) {
     this.rid = this.$route.params.rid;
      this.retrieveDetails(this.rid);
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

