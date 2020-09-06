<template>
  <!-- Sidebar ================================================== -->
  <div id="sidebar" class="span3">
    <div v-if="cartFlag === 1" class="well well-small">
      <a id="myCart" href="/cart">
        <img src="../assets/images/ico-cart.png" alt="cart" />
        {{ totalItems }} Items in your cart
      </a>
    </div>
    <ul class="nav nav-tabs nav-stacked">
      <li>
        <a href="/products/mobile">Mobile [{{ mobileCount }}]</a>
      </li>
      <li>
        <a href="/products/fan">Fan [{{ fanCount }}]</a>
      </li>
      <li>
        <a href="/products/fridge">Fridge [{{ fridgeCount }}]</a>
      </li>
      <li>
        <a href="/products/flourmil">Flourmil [{{ flourmilCount }}]</a>
      </li>
      <li>
        <a href="/products/tv">TV [{{ tvCount }}]</a>
      </li>
      <li>
        <a href="/products/mixer">Mixer [{{ mixerCount }}]</a>
      </li>
      <li>
        <a href="/products/washingmachine">WashingMachine [{{ washingMachineCount }}]</a>
      </li>
      <li>
        <a href="/products/waterpurifier">WaterPurifier [{{ waterPurifierCount }}]</a>
      </li>
      <li>
        <a href="/products/speaker">Speaker [{{ speakerCount }}]</a>
      </li>
      <li>
        <a href="/products/iron">Iron [{{ ironCount }}]</a>
      </li>
      <li>
        <a href="/products/oven">Oven [{{ ovenCount }}]</a>
      </li>
      <br />
    </ul>
    <div class="thumbnail">
      <img
        src="../assets/images/payment_methods.png"
        style="height : 130px;"
        alt="Payments Methods"
      />
      <div class="caption">
        <h5>Payment Methods</h5>
      </div>
    </div>
  </div>
</template>

<script>
import dashboard from "../services/admin/dashboard_service";
import cart1 from "../services/user/cart_service";

export default {
  data() {
    return {
      cartFlag: 0,

      fanCount: 0,
      flourmilCount: 0,
      washingMachineCount: 0,
      waterPurifierCount: 0,
      mobileCount: 0,
      mixerCount: 0,
      speakerCount: 0,
      fridgeCount: 0,
      ironCount: 0,
      ovenCount: 0,
      tvCount: 0,
      error: "",
      totalItems: 0,
      email: "",
      i: 0,
      no: 0
    };
  },
  methods: {},
  beforeMount() {
    if (this.$session.exists() === false) {
      this.totalItems = 0;
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
    }

    dashboard
      .getFan()
      .then(res => {
        this.fanCount = res.data.length;
      })
      .catch(err => {
        this.error = "Something Went Wrong!!!";
      });

    dashboard
      .getFlourmil()
      .then(res => {
        this.flourmilCount = res.data.length;
      })
      .catch(err => {
        this.error = "Something Went Wrong!!!";
      });

    dashboard
      .getMobile()
      .then(res => {
        this.mobileCount = res.data.length;
      })
      .catch(err => {
        this.error = "Something Went Wrong!!!";
      });

    dashboard
      .getFridge()
      .then(res => {
        this.fridgeCount = res.data.length;
      })
      .catch(err => {
        this.error = "Something Went Wrong!!!";
      });

    dashboard
      .getOven()
      .then(res => {
        this.ovenCount = res.data.length;
      })
      .catch(err => {
        this.error = "Something Went Wrong!!!";
      });

    dashboard
      .getWM()
      .then(res => {
        this.washingMachineCount = res.data.length;
      })
      .catch(err => {
        this.error = "Something Went Wrong!!!";
      });

    dashboard
      .getWP()
      .then(res => {
        this.waterPurifierCount = res.data.length;
      })
      .catch(err => {
        this.error = "Something Went Wrong!!!";
      });

    dashboard
      .getSpeaker()
      .then(res => {
        this.speakerCount = res.data.length;
      })
      .catch(err => {
        this.error = "Something Went Wrong!!!";
      });

    dashboard
      .getIron()
      .then(res => {
        this.ironCount = res.data.length;
      })
      .catch(err => {
        this.error = "Something Went Wrong!!!";
      });

    dashboard
      .getTV()
      .then(res => {
        this.tvCount = res.data.length;
      })
      .catch(err => {
        this.error = "Something Went Wrong!!!";
      });

    dashboard
      .getMixer()
      .then(res => {
        this.mixerCount = res.data.length;
      })
      .catch(err => {
        this.error = "Something Went Wrong!!!";
      });
  }
};
</script>

<style scoped>
</style>
