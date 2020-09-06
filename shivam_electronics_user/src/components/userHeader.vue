<template>
  <div id="header">
    <div class="container">
      <div id="welcomeLine" class="row">
        <div class="span6">
          Welcome!
          <strong v-if="email !== ''">{{ FirstName + " " + LastName }}</strong>
        </div>
        <div v-if="cartFlag === 1" class="span6">
          <div class="pull-right">
            <a href="/cart">
              <span class="btn btn-mini btn-primary">
                <i class="icon-shopping-cart icon-white"></i>
                {{ totalItems }} Items in your cart
              </span>
            </a>
          </div>
        </div>
      </div>
      <!-- Navbar ================================================== -->
      <div id="logoArea" class="navbar">
        <a id="smallScreen" data-target="#topMenu" data-toggle="collapse" class="btn btn-navbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </a>
        <div class="navbar-inner">
          <a class="brand" href="/">
            <font size="5" style="color : white;">
              Shivam
              Electronics
            </font>
          </a>
          <ul id="topMenu" class="nav pull-right">
            <li v-if="email === ''">
              <a href="/contactUS">Contact Us</a>
            </li>
            <li v-if="email !== ''">
              <a href="/profile">My Account</a>
            </li>
            <li v-if="email !== ''">
              <a href="/myorders">Order History</a>
            </li>
            <li v-if="email === ''">
              <a href="/signin" role="button" style="padding-right:0">
                <span class="btn btn-success">Signin</span>
              </a>
            </li>
            <li v-if="email === ''">
              <a href="/sign-up" role="button" style="padding-right:0">
                <span class="btn btn-success">Signup</span>
              </a>
            </li>
            <li v-if="email !== ''">
              <a href="#" role="button" style="padding-right:0">
                <span class="btn btn-danger" @click="logout">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cart1 from "../services/user/cart_service";
import setup1 from "../services/user/userSetup_service";

export default {
  data() {
    return {
      error: "",
      totalItems: 0,
      email: "",
      FirstName: "",
      LastName: "",
      category: [],
      categoryName: "",
      cartFlag: 0,
      i: 0,
      no: 0
    };
  },
  methods: {
    logout() {
      this.$session.destroy();
      this.$router.go();
    }
  },
  beforeMount() {
    if (this.$session.exists() === false) {
      this.totalItems = 0;
      this.email = "";
    } else {
      this.$session.start();
      this.cartFlag = 1;
      this.email = this.$session.get("email");

      const data1 = {
        email: this.$session.get("email")
      };
      cart1
        .getTotalCartItems(data1)
        .then(res => {
          this.userID = res.data.uid;
          const data2 = {
            uid: this.userID
          };
          cart1
            .getCartItems(data2)
            .then(res => {
              this.products = res.data;
              this.no = res.data.length;

              while (this.i < this.no) {
                let qty = this.products[this.i].Quantity;
                this.totalItems += qty;

                this.i = this.i + 1;
              }
            })
            .catch(err => {
              this.error = "Something went Wrong";
            });
        })
        .catch(err => {
          this.error = "Something went Wrong";
        });

      setup1
        .getFnameLname(data1)
        .then(res => {
          this.FirstName = res.data.fname;
          this.LastName = res.data.lname;
        })
        .catch(err => {
          this.error = "Something went Wrong";
        });
    }
  }
};
</script>

<style scoped>
</style>
