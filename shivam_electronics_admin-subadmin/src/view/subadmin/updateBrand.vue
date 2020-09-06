<template>
  <div>
    <subAdminHead></subAdminHead>

    <section class="content">
      <div class="container-fluid">
        <div class="card">
          <div class="header">
            <h2>Update Brand Details</h2>
          </div>
          <div class="body">
            <form @submit.prevent="addbrand()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      Brand Name :
                      <input
                        pattern="[a-zA-Z]*"
                        title="Only Characters are allowed"
                        required
                        type="text"
                        class="form-control"
                        placeholder="Brand Name"
                        v-model="bname"
                      />
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <div class="form-line">
                      <div class="switch">
                        <label>
                          <span>UnBlocked</span>
                          <input type="checkbox" v-model="status1"/>
                          <span class="lever switch-col-red"></span>
                          <span>Blocked</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Edit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
      </div>
      
    </section>
  </div>
</template>

<script>
//Scripts

import manage from "../../services/admin/manageBrands_service";

export default {
  data() {
    return {
      bname: "",
      cno: "",
      error: "",
      adminEmail: "",
      brandID: 0,
      status1: "",
      status2: ""
    };
  },
  methods: {
    addbrand() {
      if (this.status1 == true) {
        this.status2 = 1;
      } else {
        this.status2 = 0;
      }

      const data = {
        bname: this.bname,
        brandID: this.brandID,
        status: this.status2
      };
      manage
        .updateBrand(data)
        .then(res => {
          let response = res.data;

          if (response.result == -1) {
            this.error = "Error Occured";
          }
          else{
            this.error = "Brand name is updated successfully!!!";
          }
        })
        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    },
    moveBack(){
      this.$router.push("/subadmin/manageBrands");
    },
    retrieveDetails(id) {
      const data = {
        cIndex: id
      };
      manage
        .getBrand(data)
        .then(res => {
          let response = res.data;

          this.bname = response[0].Name;
          let s = response[0].Status;
          if (s == 0) {
            this.status1 = false;
          } else {
            this.status1 = true;
          }
        })
        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    }
  },
  beforeMount() {
    if (this.$session.has("admin-email") === true) {
      this.$router.push("*");
    } else if (this.$session.has("subadmin-email") === true) {
        this.brandID = this.$route.params.brandID;
      this.retrieveDetails(this.brandID);
    } else {
      this.$router.push("/subadmin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

