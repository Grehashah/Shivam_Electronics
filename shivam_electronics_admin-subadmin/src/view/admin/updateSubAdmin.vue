<template>
  <div>
    <adminHead></adminHead>

    <section class="content">
      <div class="container-fluid">
        <div class="card">
          <div class="header">
            <h2>Update Employee Details</h2>
          </div>
          <div class="body">
            <form @submit.prevent="addemp()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      FirstName :
                      <input
                        pattern="[a-zA-Z]*"
                        title="Only Characters are allowed"
                        required
                        type="text"
                        class="form-control"
                        placeholder="FirstName"
                        v-model="fname"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      LastName :
                      <input
                        type="text"
                        pattern="[a-zA-Z]*"
                        title="Only Characters are allowed"
                        required
                        class="form-control"
                        placeholder="lastName"
                        v-model="lname"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      ContactNo :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="ContactNo"
                        v-model="cno"
                        maxlength="10"
                        minlength="10"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      <div class="switch">
                        <label>
                          <span>UnBlocked</span>
                          <input type="checkbox" v-model="status1" />
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

import manage from "../../services/admin/manageSubAdmin";
import { Eventbus } from "../../main";

export default {
  data() {
    return {
      fname: "",
      lname: "",
      cno: "",
      error: "",
      adminEmail: "",
      adminID: 0,
      status1: "",
      status2: ""
    };
  },
  methods: {
    addemp() {
      if (this.status1 == true) {
        this.status2 = 1;
      } else {
        this.status2 = 0;
      }

      const data = {
        fname: this.fname,
        lname: this.lname,
        cno: this.cno,
        adminID: this.adminID,
        status: this.status2
      };
      manage
        .updatesubadmin(data)
        .then(res => {
          let response = res.data;

          if (response.result == -1) {
            this.error = "Error Occured";
          }
          else {
            this.error = "Employee details are updated successfully!!!";
          }
        })
        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    },
    moveBack(){
      this.$router.push("/admin/manageEmployees");
    },
    retrieveDetails(id) {
      const data = {
        cIndex: id
      };
      manage
        .getEmp(data)
        .then(res => {
          let response = res.data;

          this.fname = response[0].FirstName;
          this.lname = response[0].LastName;
          this.cno = response[0].ContactNo;
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
    if(this.$session.has("subadmin-email") === true)
    {
      this.$router.push("*");
    }
    else if (this.$session.has("admin-email") === true) {
      this.adminID = this.$route.params.adminID;
      this.retrieveDetails(this.adminID);
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

