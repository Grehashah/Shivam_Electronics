<template>
  <div class="signup-page">
    <div class="signup-box">
      <div class="logo">
        <a href="javascript:void(0);" class="hvr-float-shadow">
          Shivam
          <b>Electronics</b>
        </a>
        <small style="margin-top: 15px;font-size: 16px;">Select, Buy & Enjoy!!!</small>
      </div>
      <form @submit.prevent="signup()">
        <div class="card">
          <div class="body">
            <div class="msg" style="font-size: 22px; font-weight: 600;">Create Account</div>
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
                  name="fname"
                  placeholder="First Name"
                  required
                  autofocus
                  pattern="[a-zA-Z]*"
                  title="Only Characters are allowed"
                  v-model="fname"
                />
              </div>
            </div>
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
                  name="lname"
                  placeholder="Last Name"
                  required
                  v-model="lname"
                  pattern="[a-zA-Z]*"
                  title="Only Characters are allowed"
                />
              </div>
            </div>
            <div class="input-group">
              <span class="input-group-addon">
                <i class="material-icons">
                  mobile_friendly
                  <sup style="color: red;">*</sup>
                </i>
              </span>
              <div class="form-line">
                <input
                  type="text"
                  class="form-control"
                  name="mobile"
                  minlength="10"
                  maxlength="10"
                  placeholder="Mobile number"
                  required
                  pattern="[0-9]*"
                  title="Only Numbers are allowed"
                  v-model="cno"
                />
              </div>
            </div>
            <div class="input-group">
              <span class="input-group-addon">
                <i class="material-icons">
                  email
                  <sup style="color: red;">*</sup>
                </i>
              </span>
              <div class="form-line">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Email Address"
                  required
                  v-model="email"
                />

                <input
                  v-if="email !== ''"
                  type="text"
                  class="form-control"
                  placeholder="Please Enter OTP "
                  required
                  v-model="otp"
                  maxlength="4"
                  minlength="4"
                  pattern="[0-9]*"
                  title="Only Numbers are allowed"
                />
                <button
                  v-if="email !== ''"
                  class="btn btn-block btn-lg bg-primary waves-effect hvr-underline-from-center"
                  @click="emailVarification()"
                >Send OTP</button>
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
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Password"
                  required
                  v-model="pwd"
                  maxlength="30"
                  minlength="8"
                     pattern="[a-zA-Z0-9_@$~.,()=+*^%#!\/?><-]*"
                        title="Only Numbers,characters and (_@$~.,()=+*^%#!\/?><-) are allowed"
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
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Confirm Password"
                  required
                  v-model="cpwd"
                  maxlength="30"
                  minlength="8"
                       pattern="[a-zA-Z0-9_@$~.,()=+*^%#!\/?><-]*"
                        title="Only Numbers,characters and (_@$~.,()=+*^%#!\/?><-) are allowed"
                 />
              </div>
            </div>

            <p style="color : red; text-align: center;">{{ error }}</p>

            <div class="row">
              <div class="col-xs-8 p-t-5">
                <input
                  type="checkbox"
                  name="rememberme"
                  id="rememberme"
                  v-model="checkbox1"
                  value="yes"
                  class="filled-in chk-col-pink"
                />
                <label for="rememberme">I agree to the<a href="/TandC" class="hvr-push"> Terms and Conditions</a></label>
              </div>
              <div class="col-xs-4">
                <button
                  class="btn btn-block bg-pink waves-effect hvr-underline-from-center"
                  type="submit"
                >SIGN UP</button>
              </div>
            </div>
            <div style="text-align:center;">
              <a href="/signin" class="hvr-push">You already have a membership?</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import sup1 from "../../services/user/signup_service";
import sup2 from "../../services/user/email_varify";

export default {
  data() {
    return {
      error: "",
      fname: "",
      lname: "",
      email: "",
      pwd: "",
      cpwd: "",
      cno: "",
      otp: "",
      finalOTP: "",
      status: 0,
      checkbox1: ""
    };
  },
  methods: {
    signup() {
      // validations
      if (this.pwd != this.cpwd) {
        this.error = "Password did not match";
      } else if (this.finalOTP == "") {
        this.error = "Email Varification is not done";
      } else if (this.otp === "") {
        this.error = "Please Enter OTP";
      } else if (this.otp != this.finalOTP) {
        this.error = "Entered OTP is Wrong";
      } else if (this.checkbox1 == "") {
        this.error = "Please agree on our Terms and Conditions";
      } else {
        var data = {
          fname: this.fname,
          lname: this.lname,
          email: this.email,
          pwd: this.pwd,
          cno: this.cno
        };
        sup1
          .sup(data)
          .then(res => {
            this.$router.push("/signin");
          })
          .catch(err => {
            this.error = "Some Error Occured Please try agian Later!!!";
          });
      }
    },
    emailVarification() {
      // checking Unique Email Address
      var data1 = {
        email: this.email
      };
      sup2
        .varifyEmail(data1)
        .then(res => {
          var result1 = res.data;
          if (result1.result === -1) {
            this.error =
              "This Email Address is already in use please enter another one!!!";
          } else {
            var data = {
              email: this.email
            };
            sup1
              .emailVarification(data)
              .then(res => {
                let response = res.data;

                this.finalOTP = response.OTP;
                alert("OTP Has Been Sent Please Check Your Mail Box.");
              })
              .catch(err => {
                this.error = "Some Error Occured Please try agian Later!!!";
              });
          }
        })
        .catch(err => {
          this.error = "Some Error Occured Please try again Later!!!";
        });
    }
  },
  beforeMount() {
    if (this.$session.exists() === true) {
      this.$router.push("/");
    }
  }
};
</script>    

<style scoped>
@import "../../../static/store/css/style.css";
@import "../../../static/store/plugins/bootstrap/css/bootstrap.css";
@import "../../../static/store/css/hover.css";
</style>
        

