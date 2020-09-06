<template>
  <div class="login-page">
    <div class="signup-box" style="margin-top: 5%;">
      <div class="logo">
        <a href="javascript:void(0);" class="hvr-float-shadow">
          Shivam
          <b>Electronics</b>
        </a>
        <small style="margin-top: 15px;font-size: 16px;">Select, Buy & Enjoy!!!</small>
      </div>
    </div>
    <div class="row" style="margin-top: 10%;">
      <div class="col-md-2"></div>
      <div class="col-md-4 text-center">
        <a href="admin-signin" style="text-decoration: none;">
          <div class="card" style="border-radius: 10px;">
            <div class="card-body" style="padding:10px;">
              <h5 class="card-title h2">Admin</h5>
              <p class="card-text">
                <img
                  src="../../assets/images/login-card-admin-img.png"
                  alt
                  style="width:150px; height:150px;"
                  class="hvr-float-shadow"
                />
              </p>
              <!--<a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>-->
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-4 text-center">
        <a href="subadmin-signin" style="text-decoration: none;">
          <div class="card" style="border-radius: 10px;">
            <div class="card-body" style="padding:10px;">
              <h5 class="card-title h2">Employee</h5>
              <p class="card-text">
                <img
                  src="../../assets/images/login-card-employee-img.png"
                  alt
                  style="width:150px; height:150px;"
                  class="hvr-float-shadow"
                />
              </p>
              <!--<a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>-->
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: "",
      email: "",
      pwd: "",
      id: "",
      adid: "",
      count: 0
    };
  }
};
</script>
    

<style scoped>
.signup-box .msg {
  color: #555;
  margin-bottom: 30px;
  text-align: center;
}
.signup-box a {
  font-size: 14px;
  text-decoration: none;
  color: #00bcd4;
  margin: 2% auto;
  max-width: 360px;
}
.signup-box .logo {
  margin-bottom: 20px;
}
.signup-box .logo a {
  font-size: 36px;
  display: block;
  width: 100%;
  text-align: center;
  color: #fff;
}
.signup-box .logo small {
  display: block;
  width: 100%;
  text-align: center;
  color: #fff;
  margin-top: -5px;
}
@media (max-width: 768px) {
  div.signup-box {
    margin-top: 5%;
  }
}
</style>
        

