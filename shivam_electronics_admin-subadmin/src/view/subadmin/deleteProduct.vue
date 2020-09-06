<template>
  <div>
    <subAdminHead></subAdminHead>

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
import manage from "../../services/subadmin/manageProduct";

export default {
  data() {
    return {
      currentProduct: "",
      error: ""
    };
  },
  methods: {
    back() {
      this.$router.push("/subadmin/manageProducts/" + this.currentProduct);
    }
  },
  beforeMount() {
    if (this.$session.has("admin-email") === true) {
      this.$router.push("*");
    } else if (this.$session.has("subadmin-email") === true) {
        this.currentProduct = this.$route.params.product;
      if (this.currentProduct == "fan") {
        manage
          .removeFan(this.$route.params.id)
          .then(res => {
            let response = res.data;

            this.$router.push(
              "/subadmin/manageproducts/" + this.currentProduct
            );
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      } else if (this.currentProduct == "fridge") {
        manage
          .removeFridge(this.$route.params.id)
          .then(res => {
            let response = res.data;

            this.$router.push(
              "/subadmin/manageproducts/" + this.currentProduct
            );
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      } else if (this.currentProduct == "mixer") {
        manage
          .removeMixer(this.$route.params.id)
          .then(res => {
            let response = res.data;

            this.$router.push(
              "/subadmin/manageproducts/" + this.currentProduct
            );
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      } else if (this.currentProduct == "tv") {
        manage
          .removeTV(this.$route.params.id)
          .then(res => {
            let response = res.data;

            this.$router.push(
              "/subadmin/manageproducts/" + this.currentProduct
            );
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      } else if (this.currentProduct == "speaker") {
        manage
          .removeSpeaker(this.$route.params.id)
          .then(res => {
            let response = res.data;

            this.$router.push(
              "/subadmin/manageproducts/" + this.currentProduct
            );
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      } else if (this.currentProduct == "iron") {
        manage
          .removeIron(this.$route.params.id)
          .then(res => {
            let response = res.data;

            this.$router.push(
              "/subadmin/manageproducts/" + this.currentProduct
            );
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      } else if (this.currentProduct == "oven") {
        manage
          .removeOven(this.$route.params.id)
          .then(res => {
            let response = res.data;

            this.$router.push(
              "/subadmin/manageproducts/" + this.currentProduct
            );
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      } else if (this.currentProduct == "washingmachine") {
        manage
          .removeWashingMachine(this.$route.params.id)
          .then(res => {
            let response = res.data;

            this.$router.push(
              "/subadmin/manageproducts/" + this.currentProduct
            );
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      } else if (this.currentProduct == "waterpurifier") {
        manage
          .removeWaterPurifier(this.$route.params.id)
          .then(res => {
            let response = res.data;

            this.$router.push(
              "/subadmin/manageproducts/" + this.currentProduct
            );
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      } else if (this.currentProduct == "mobile") {
        manage
          .removeMobile(this.$route.params.id)
          .then(res => {
            let response = res.data;

            this.$router.push(
              "/subadmin/manageproducts/" + this.currentProduct
            );
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      } else if (this.currentProduct == "flourmil") {
        manage
          .removeFlourmil(this.$route.params.id)
          .then(res => {
            let response = res.data;

            this.$router.push(
              "/subadmin/manageproducts/" + this.currentProduct
            );
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    } else {
      this.$router.push("/subadmin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

