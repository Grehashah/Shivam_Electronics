<template>
  <div class="login-page">
    <div class="login-box">
      <div class="logo">
        <a href="/" class="hvr-float-shadow">
          Shivam
          <b>Electronics</b>
        </a>
        <small style="margin-top: 15px;font-size: 16px;">Select, Buy & Enjoy!!!</small>
      </div>
      <form @submit.prevent="signin()">
        <div class="card">
          <div class="body">
            <div class="msg" style="font-size: 22px; font-weight: 600;">Sign-In</div>
            <div class="input-group">
              <span class="input-group-addon">
                <i class="material-icons">
                  person
                  <sup style="color: red;">*</sup>
                </i>
              </span>
              <div class="form-line">
                <input
                  type="text"
                  class="form-control"
                  name="useremail"
                  placeholder="Email"
                  v-model="email"
                  autofocus
                />
              </div>
            </div>
            <div class="input-group">
              <span class="input-group-addon">
                <i class="material-icons">
                  lock
                  <sup style="color: red;">*</sup>
                </i>
              </span>
              <div class="form-line">
                <input
                  :type="passwordFieldType"
                  class="form-control"
                  name="password"
                  v-model="pwd"
                  placeholder="Password"
                  style="width:90%"
                />
                <button
                  type="button"
                  @click="switchVisibility"
                  style="border:0; background-color:white; width:35px; margin-left:90%;float:right;margin-top:-10%;"
                >
                  <img
                    src="../../assets/images/iconfinder_icon-eye_211661.png"
                    style="height: 20px;"
                  />
                </button>
              </div>
            </div>
            <p style="color : red; text-align: center;">{{ error }}</p>
            <div class="row">
              <div class="col-xs-8 p-t-5">
                <input
                  type="checkbox"
                  name="rememberme"
                  id="rememberme"
                  v-model="remember"
                  value="yes"
                  class="filled-in chk-col-pink"
                />
                <label for="rememberme">Remember Me</label>
              </div>
              <div class="col-xs-4">
                <button
                  class="btn btn-block bg-pink waves-effect hvr-underline-from-center"
                  type="submit"
                >SIGN IN</button>
              </div>
            </div>
            <div class="row m-t-15 m-b--20">
              <div class="col-xs-6">
                <a href="/subadmin-forgotpwd" class="hvr-push">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//Scripts

import sin1 from "../../services/subadmin/signin_service";

export default {
  data() {
    return {
      error: "",
      email: "",
      pwd: "",
      id: "",
      adid: "",
      count: 0,
      remember: "",
      passwordFieldType: "password"
    };
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    signin() {
      // validations
      if (this.email === "") {
        this.error = "Please enter email address";
      } else if (this.pwd === "") {
        this.error = "Please enter password";
      } else {
        var data = {
          email: this.email,
          pwd: this.pwd
        };
        sin1
          .sin(data)
          .then(res => {
            var resdata = res.data;
            if (resdata.result == -1) {
              this.error = "Invalid Email or Password";
              this.count = this.count + 1;
              if (this.count <= 5) {
                var data1 = {
                  email: this.email,
                  pwd: this.pwd,
                  count: this.count
                };
                sin1
                  .attempts(data1)
                  .then(res => {
                    let response = res.data;
                    if (response.result != 1) {
                      this.err = "Something went wrong";
                    }
                  })
                  .catch(err => {
                    this.err = "Something went wrong";
                  });
              } else {
                var data2 = {
                  email: this.email,
                  pwd: this.pwd
                };
                sin1
                  .apwd(data2)
                  .then(res => {
                    var resdata = res.data;

                    if (resdata.result == -1) {
                      this.error = "Invalid Email Address";
                    } else {
                      this.error = "Check Your Mail";
                      this.count = 0;
                      var data3 = {
                        email: this.email,
                        pwd: this.pwd,
                        count: this.count
                      };
                      sin1
                        .attempts(data3)
                        .then(res => {
                          let response = res.data;
                          if (response.result != 1) {
                            this.err = "Something went wrong";
                          }
                        })
                        .catch(err => {
                          this.err = "Something went wrong";
                        });
                    }
                  })
                  .catch(err => {
                    this.error = "Some Error Occured Please try agian Later!!!";
                  });
              }
            } else if (resdata.result == -2) {
              this.error = "Sorry you are Blocked by Admin!";
            } else {
              if (this.remember != "") {
                this.$cookies.set("emp-Email", this.email, 60 * 60 * 24 * 30);
                this.$cookies.set("emp-Pass", this.pwd, 60 * 60 * 24 * 30);
              }
              this.$session.start();
              this.$session.set("subadmin-email", this.email);
              this.$router.push("/subadmin");
            }
          })
          .catch(err => {
            this.error = "Some Error Occured Please try agian Later!!!";
          });
      }
    }
  },
  beforeMount() {
    if (this.$session.has("admin-email") === true) {
      this.$router.push("*");
    } else if (this.$session.has("subadmin-email") === true) {
      this.$router.push("/subadmin");
    }
    if (this.$cookies.isKey("emp-Email")) {
      this.email = this.$cookies.get("emp-Email");
      this.pwd = this.$cookies.get("emp-Pass");
    }
  }
};
</script>
    

<style scoped>
div.logo {
  margin-top: 20vh;
}
</style>
        

