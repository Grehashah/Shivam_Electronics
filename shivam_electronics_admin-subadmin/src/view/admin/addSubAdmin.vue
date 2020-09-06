<template>
  <div>
    <adminHead></adminHead>

    <section class="content">
      <div class="container-fluid">
        <div class="card">
          <div class="header">
            <h2>Add Employee Details</h2>
          </div>
          <div class="body">
            <form @submit.prevent="addemp()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[a-zA-Z]*"
                        title="Only Characters are allowed"
                        required
                        class="form-control"
                        placeholder="FirstName"
                        v-model="fname"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        pattern="[a-zA-Z]*"
                        title="Only Characters are allowed"
                        placeholder="lastName"
                        v-model="lname"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email Address"
                        v-model="email"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        required
                        class="form-control"
                        placeholder="ContactNo"
                        v-model="cno"
                        minlength="10"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        required
                        type="text"
                        maxlength="30"
                        class="form-control"
                        placeholder="Password"
                        v-model="pwd"
                        minlength="8"
                        pattern="[a-zA-Z0-9_@$~.,()=+*^%#!\/?><-]*"
                        title="Only Numbers,characters and (_@$~.,()=+*^%#!\/?><-) are allowed"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        maxlength="30"
                        class="form-control"
                        placeholder="Confirm Password"
                        v-model="cpwd"
                        minlength="8"
                        required
                        pattern="[a-zA-Z0-9_@$~.,()=+*^%#!\/?><-]*"
                        title="Only Numbers,characters and (_@$~.,()=+*^%#!\/?><-) are allowed"
                      />
                    </div>
                  </div>
                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button class="btn btn-success waves-effect m-r-20">Add</button>
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
import manage from "../../services/admin/manageSubAdmin";

export default {
  data() {
    return {
      email: "",
      pwd: "",
      cpwd: "",
      fname: "",
      lname: "",
      cno: "",
      error: "",
      adminEmail: "",
      adminID: 0,
      def:"",
      res1:0
    };
  },
  methods: {
    addemp() {
      if (this.pwd != this.cpwd) {
        this.error = "Password did not match";
      } else {
        const data = {
          email: this.email,
          fname: this.fname,
          lname: this.lname,
          pwd: this.pwd,
          cno: this.cno,
          adminID: this.adminID
        };
        manage
          .addsubadmin(data)
          .then(res => {
            let response = res.data;
            this.res1 = response.result;
            if (response.result == -1) {
              this.error = "Error Occured";
            }
            else {
              this.error = "Employee is added Succesfully!!!";
            }
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    moveBack(){
              this.$router.push("/admin/manageEmployees");
    },
    retrieveID(index) {
      const data1 = {
        email: index
      };
      manage
        .getID(data1)
        .then(res => {
          let response = res.data;

          this.adminID = response.adminID;
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
      this.$session.start();
      this.retrieveID(this.$session.get("admin-email"));
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

