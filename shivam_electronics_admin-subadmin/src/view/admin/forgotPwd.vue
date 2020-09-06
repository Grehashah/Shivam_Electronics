<template>
  <div class="fp-page">
    <div class="fp-box">
      <div class="logo">
        <a href="javascript:void(0);" class="hvr-float-shadow">
          Shivam
          <b>Electronics</b>
        </a>
        <small style="margin-top: 15px;font-size: 16px;">Select, Buy & Enjoy!!!</small>
      </div>
      <div class="card">
        <div class="body">
          <div class="msg">Enter your email address that you used to register.</div>
          <div class="input-group">
            <span class="input-group-addon">
              <i class="material-icons">email</i>
            </span>
            <div class="form-line">
              <input
                type="email"
                v-model="email"
                class="form-control"
                name="email"
                placeholder="Email"
                required
                autofocus
              />
            </div>
          </div>
          <p style="color : red; text-align: center;">{{ error }}</p>
          <button
            @click="sendemail"
            class="btn btn-block btn-lg bg-pink waves-effect"
            type="submit"
          >RESET MY PASSWORD</button>

          <div class="row m-t-20 m-b--5 align-center">
            <a href="/admin-signin">Sign In!</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// Importing Services
import fpwd1 from "../../services/admin/forgotPwd_service";

export default {
  data() {
    return {
      email: "",
      error: ""
    };
  },
  methods: {
     sendemail() {
      // validations
      if (this.email === "") {
        this.error = "Please enter email address";
      } else {
        var data = {
          email: this.email
        };
         fpwd1
          .fpwd(data)
          .then(res => {
            var resdata = res.data;

            if (resdata.result == -1) {
              this.error = "Invalid Email Address";
            } else {
              this.$router.push("/admin-signin");
            }
          })
          .catch(err => {
            this.error = "Some Error Occured Please try agian Later!!!";
          });
      }
    }
  }
};
</script>
    

<style scoped>

div.logo {
  margin-top: 20vh;
}
</style>
        

