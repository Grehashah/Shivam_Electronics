<template>
  <div>
    <userHead></userHead>

    <div id="mainBody">
      <div class="container">
        <div class="row">
          <userSidebar></userSidebar>

          <div class="span9">
            <ul class="breadcrumb">
              <li>
                <a href="/">Home</a>
                <span class="divider">/</span>
              </li>
              <li class="active">SHOPPING CART</li>
            </ul>

            <div v-if="stdError !== ''">
              <h3 style="color: red;">{{ stdError }}</h3>
            </div>

            <div v-else-if="finalArray.length === 0">
              <h3 style="color: red;">Your cart is empty</h3>
            </div>

            <div v-else>
              <h3>
                SHOPPING CART [
                <small>{{ totalItems }} Item(s)</small>
                ]
              </h3>
              <hr class="soft" />

              <div style="overflow-x: scroll;">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Description</th>
                      <th>Quantity/Update</th>
                      <th>Price (including Tax)</th>
                      <th>Discount</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(product,index) in finalArray" :key="index">
                      <td>
                        <a :href="'/products/' + product.cname + '/' + product.pid">
                          <img
                            width="60"
                            height="60"
                            :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + product.cname + '/' + product.image"
                            alt="product image"
                          />
                        </a>
                      </td>
                      <td>
                        {{ product.bname + " " + product.model }}
                        <br />
                        Color : {{ product.color }}
                      </td>
                      <td>
                        <div class="input-append">
                          <input
                            class="span1"
                            style="max-width:34px"
                            :placeholder="product.qty"
                            id="appendedInputButtons"
                            size="16"
                            type="text"
                            disabled
                          />
                          <button
                            class="btn btn-danger"
                            type="button"
                            @click="cancelCart(product.cid)"
                          >
                            <i class="icon-remove icon-white"></i>
                          </button>
                        </div>
                        <br />
                        <p
                          v-if="check(product.finalStatus)"
                          style="color: red;"
                        >{{ "Required Qty is higher than the available stock" }}</p>
                      </td>
                      <td>₹ {{ product.price }}</td>
                      <td>₹ {{ product.discount }}</td>
                      <td>₹ {{ product.total }}</td>
                    </tr>
                    <tr>
                      <td colspan="5" style="text-align:right">Total Price:</td>
                      <td>₹ {{ finalPrice }}</td>
                    </tr>
                    <tr>
                      <td colspan="5" style="text-align:right">Total Discount:</td>
                      <td>₹ {{ finalDiscount }}</td>
                    </tr>
                    <tr>
                      <td colspan="5" style="text-align:right">
                        <strong>TOTAL (₹ {{ finalPrice }} - ₹ {{ finalDiscount }}) =</strong>
                      </td>
                      <td class="label label-important" style="display:block">
                        <strong>₹ {{ finalAmount }}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />

              <div
                v-if="checkoutError === 1"
                class="alert alert-danger"
              >{{ "Some Product's stock has been updated so please check your required quantity and make changes accordingly." }}</div>

              <a href="/" class="btn btn-large">
                <i class="icon-arrow-left"></i> Continue Shopping
              </a>
              <button
                v-if="checkoutError === 0"
                class="btn btn-large pull-right"
                @click="checkout()"
              >
                CheckOut
                <i class="icon-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <userFooter></userFooter>
  </div>
</template>

<script>
import cart1 from "../../services/user/cart_service";
import userSetup1 from "../../services/user/userSetup_service";

export default {
  data() {
    return {
      currentProduct: "",
      productID: "",
      error: "",
      stdError: "",
      totalItems: 0,
      products: [],
      i: 0,
      no: 0,
      finalArray: [],
      name: "",
      price: "",
      color: "",
      model: "",
      image: "",
      discount: 0,
      finalPrice: 0,
      finalDiscount: 0,
      finalAmount: 0,
      userID: "",
      cartID: "",
      finalStatus: 0,
      pqty: "",
      checkoutError: 0
    };
  },
  methods: {
    check(id) {
      if (id === 1) {
        if (this.checkoutError !== 1) {
          this.checkoutError = 1;
        }
        return true;
      } else {
        if (this.checkoutError !== 1) {
          this.checkoutError = 0;
        }
        return false;
      }
    },
    checkout() {
      this.$session.set("finalAmount", this.finalAmount);
      this.$session.set("userID", this.userID);
      this.$router.push("/cart/checkout/addaddress");
    },

    cancelCart(id) {
      cart1
        .cancelCart(id)
        .then(res => {
          let response = res.data;
          if (response.result === 1) {
            this.$router.go();
            this.stdError = "";
          } else {
            this.stdError = "";
          }
        })
        .catch(err => {
          this.stdError = "Something Went Wrong!!!";
        });
    }
  },
  beforeMount() {
    if (this.$session.exists() === true) {
      this.stdError = "";

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
                let cname = this.products[this.i].Name;
                let pid = this.products[this.i].ProductID;
                let qty = this.products[this.i].Quantity;
                let cid = this.products[this.i].CartID;
                this.totalItems += qty;

                if (cname === "fan") {
                  const data2 = {
                    id: pid
                  };
                  cart1
                    .getFanDetails(data2)
                    .then(res => {
                      let response = res.data;

                      this.discount = response[0].Discount;
                      this.price = response[0].Price;
                      this.color = response[0].Color;
                      this.name = response[0].Name;
                      this.model = response[0].Model;
                      this.image = response[0].Image;
                      this.pqty = response[0].Quantity;

                      if (qty <= this.pqty) {
                        this.finalStatus = 0;
                      } else {
                        this.finalStatus = 1;
                      }

                      this.price = this.price * qty;
                      this.discount = this.discount * qty;
                      let total = this.price - this.discount;
                      this.finalDiscount = this.finalDiscount + this.discount;
                      this.finalPrice = this.finalPrice + this.price;
                      this.finalAmount = this.finalAmount + total;

                      this.finalArray.push({
                        discount: this.discount,
                        price: this.price,
                        color: this.color,
                        model: this.model,
                        bname: this.name,
                        image: this.image,
                        qty: qty,
                        total: total,
                        cname: cname,
                        cid: cid,
                        pid: pid,
                        finalStatus: this.finalStatus
                      });
                    })
                    .catch(err => {
                      this.stdError = "Error Occured While Loading Your Cart!!";
                    });
                } else if (cname === "mobile") {
                  const data2 = {
                    id: pid
                  };
                  cart1
                    .getMobileDetails(data2)
                    .then(res => {
                      let response = res.data;

                      this.discount = response[0].Discount;
                      this.price = response[0].Price;
                      this.color = response[0].Color;
                      this.name = response[0].Name;
                      this.model = response[0].Model;
                      this.image = response[0].Image;
                      this.pqty = response[0].Quantity;

                      if (qty <= this.pqty) {
                        this.finalStatus = 0;
                      } else {
                        this.finalStatus = 1;
                      }
                      this.price = this.price * qty;
                      this.discount = this.discount * qty;
                      let total = this.price - this.discount;
                      this.finalDiscount = this.finalDiscount + this.discount;
                      this.finalPrice = this.finalPrice + this.price;
                      this.finalAmount = this.finalAmount + total;

                      this.finalArray.push({
                        discount: this.discount,
                        price: this.price,
                        color: this.color,
                        model: this.model,
                        bname: this.name,
                        image: this.image,
                        qty: qty,
                        total: total,
                        cname: cname,
                        cid: cid,
                        pid: pid,
                        finalStatus: this.finalStatus
                      });
                    })
                    .catch(err => {
                      this.stdError = "Error Occured While Loading Your Cart!!";
                    });
                } else if (cname === "mixer") {
                  const data2 = {
                    id: pid
                  };
                  cart1
                    .getMixerDetails(data2)
                    .then(res => {
                      let response = res.data;

                      this.discount = response[0].Discount;
                      this.price = response[0].Price;
                      this.color = response[0].Color;
                      this.name = response[0].Name;
                      this.model = response[0].Model;
                      this.image = response[0].Image;
                      this.pqty = response[0].Quantity;

                      if (qty <= this.pqty) {
                        this.finalStatus = 0;
                      } else {
                        this.finalStatus = 1;
                      }
                      this.price = this.price * qty;
                      this.discount = this.discount * qty;
                      let total = this.price - this.discount;
                      this.finalDiscount = this.finalDiscount + this.discount;
                      this.finalPrice = this.finalPrice + this.price;
                      this.finalAmount = this.finalAmount + total;

                      this.finalArray.push({
                        discount: this.discount,
                        price: this.price,
                        color: this.color,
                        model: this.model,
                        bname: this.name,
                        image: this.image,
                        qty: qty,
                        total: total,
                        cname: cname,
                        cid: cid,
                        pid: pid,
                        finalStatus: this.finalStatus
                      });
                    })
                    .catch(err => {
                      this.stdError = "Error Occured While Loading Your Cart!!";
                    });
                } else if (cname === "tv") {
                  const data2 = {
                    id: pid
                  };
                  cart1
                    .getTVDetails(data2)
                    .then(res => {
                      let response = res.data;

                      this.discount = response[0].Discount;
                      this.price = response[0].Price;
                      this.color = response[0].Color;
                      this.name = response[0].Name;
                      this.model = response[0].Model;
                      this.image = response[0].Image;
                      this.pqty = response[0].Quantity;

                      if (qty <= this.pqty) {
                        this.finalStatus = 0;
                      } else {
                        this.finalStatus = 1;
                      }
                      this.price = this.price * qty;
                      this.discount = this.discount * qty;
                      let total = this.price - this.discount;
                      this.finalDiscount = this.finalDiscount + this.discount;
                      this.finalPrice = this.finalPrice + this.price;
                      this.finalAmount = this.finalAmount + total;

                      this.finalArray.push({
                        discount: this.discount,
                        price: this.price,
                        color: this.color,
                        model: this.model,
                        bname: this.name,
                        image: this.image,
                        qty: qty,
                        total: total,
                        cname: cname,
                        cid: cid,
                        pid: pid,
                        finalStatus: this.finalStatus
                      });
                    })
                    .catch(err => {
                      this.stdError = "Error Occured While Loading Your Cart!!";
                    });
                } else if (cname === "washingmachine") {
                  const data2 = {
                    id: pid
                  };
                  cart1
                    .getWashingMachineDetails(data2)
                    .then(res => {
                      let response = res.data;

                      this.discount = response[0].Discount;
                      this.price = response[0].Price;
                      this.color = response[0].Color;
                      this.name = response[0].Name;
                      this.model = response[0].Model;
                      this.image = response[0].Image;
                      this.price = this.price * qty;
                      this.discount = this.discount * qty;
                      let total = this.price - this.discount;
                      this.finalDiscount = this.finalDiscount + this.discount;
                      this.finalPrice = this.finalPrice + this.price;
                      this.finalAmount = this.finalAmount + total;
                      this.pqty = response[0].Quantity;

                      if (qty <= this.pqty) {
                        this.finalStatus = 0;
                      } else {
                        this.finalStatus = 1;
                      }

                      this.finalArray.push({
                        discount: this.discount,
                        price: this.price,
                        color: this.color,
                        model: this.model,
                        bname: this.name,
                        image: this.image,
                        qty: qty,
                        total: total,
                        cname: cname,
                        cid: cid,
                        pid: pid,
                        finalStatus: this.finalStatus
                      });
                    })
                    .catch(err => {
                      this.stdError = "Error Occured While Loading Your Cart!!";
                    });
                } else if (cname === "waterpurifier") {
                  const data2 = {
                    id: pid
                  };
                  cart1
                    .getWaterPurifierDetails(data2)
                    .then(res => {
                      let response = res.data;

                      this.discount = response[0].Discount;
                      this.price = response[0].Price;
                      this.color = response[0].Color;
                      this.name = response[0].Name;
                      this.model = response[0].Model;
                      this.image = response[0].Image;
                      this.price = this.price * qty;
                      this.discount = this.discount * qty;
                      let total = this.price - this.discount;
                      this.finalDiscount = this.finalDiscount + this.discount;
                      this.finalPrice = this.finalPrice + this.price;
                      this.finalAmount = this.finalAmount + total;
                      this.pqty = response[0].Quantity;

                      if (qty <= this.pqty) {
                        this.finalStatus = 0;
                      } else {
                        this.finalStatus = 1;
                      }

                      this.finalArray.push({
                        discount: this.discount,
                        price: this.price,
                        color: this.color,
                        model: this.model,
                        bname: this.name,
                        image: this.image,
                        qty: qty,
                        total: total,
                        cname: cname,
                        cid: cid,
                        pid: pid,
                        finalStatus: this.finalStatus
                      });
                    })
                    .catch(err => {
                      this.stdError = "Error Occured While Loading Your Cart!!";
                    });
                } else if (cname === "iron") {
                  const data2 = {
                    id: pid
                  };
                  cart1
                    .getIronDetails(data2)
                    .then(res => {
                      let response = res.data;

                      this.discount = response[0].Discount;
                      this.price = response[0].Price;
                      this.color = response[0].Color;
                      this.name = response[0].Name;
                      this.model = response[0].Model;
                      this.image = response[0].Image;
                      this.pqty = response[0].Quantity;

                      if (qty <= this.pqty) {
                        this.finalStatus = 0;
                      } else {
                        this.finalStatus = 1;
                      }
                      this.price = this.price * qty;
                      this.discount = this.discount * qty;
                      let total = this.price - this.discount;
                      this.finalDiscount = this.finalDiscount + this.discount;
                      this.finalPrice = this.finalPrice + this.price;
                      this.finalAmount = this.finalAmount + total;

                      this.finalArray.push({
                        discount: this.discount,
                        price: this.price,
                        color: this.color,
                        model: this.model,
                        bname: this.name,
                        image: this.image,
                        qty: qty,
                        total: total,
                        cname: cname,
                        cid: cid,
                        pid: pid,
                        finalStatus: this.finalStatus
                      });
                    })
                    .catch(err => {
                      this.stdError = "Error Occured While Loading Your Cart!!";
                    });
                } else if (cname === "oven") {
                  const data2 = {
                    id: pid
                  };
                  cart1
                    .getOvenDetails(data2)
                    .then(res => {
                      let response = res.data;

                      this.discount = response[0].Discount;
                      this.price = response[0].Price;
                      this.color = response[0].Color;
                      this.name = response[0].Name;
                      this.model = response[0].Model;
                      this.image = response[0].Image;
                      this.pqty = response[0].Quantity;

                      if (qty <= this.pqty) {
                        this.finalStatus = 0;
                      } else {
                        this.finalStatus = 1;
                      }
                      this.price = this.price * qty;
                      this.discount = this.discount * qty;
                      let total = this.price - this.discount;
                      this.finalDiscount = this.finalDiscount + this.discount;
                      this.finalPrice = this.finalPrice + this.price;
                      this.finalAmount = this.finalAmount + total;

                      this.finalArray.push({
                        discount: this.discount,
                        price: this.price,
                        color: this.color,
                        model: this.model,
                        bname: this.name,
                        image: this.image,
                        qty: qty,
                        total: total,
                        cname: cname,
                        cid: cid,
                        pid: pid,
                        finalStatus: this.finalStatus
                      });
                    })
                    .catch(err => {
                      this.stdError = "Error Occured While Loading Your Cart!!";
                    });
                } else if (cname === "speaker") {
                  const data2 = {
                    id: pid
                  };
                  cart1
                    .getSpeakerDetails(data2)
                    .then(res => {
                      let response = res.data;

                      this.discount = response[0].Discount;
                      this.price = response[0].Price;
                      this.color = response[0].Color;
                      this.name = response[0].Name;
                      this.model = response[0].Model;
                      this.image = response[0].Image;
                      this.pqty = response[0].Quantity;

                      if (qty <= this.pqty) {
                        this.finalStatus = 0;
                      } else {
                        this.finalStatus = 1;
                      }
                      this.price = this.price * qty;
                      this.discount = this.discount * qty;
                      let total = this.price - this.discount;
                      this.finalDiscount = this.finalDiscount + this.discount;
                      this.finalPrice = this.finalPrice + this.price;
                      this.finalAmount = this.finalAmount + total;

                      this.finalArray.push({
                        discount: this.discount,
                        price: this.price,
                        color: this.color,
                        model: this.model,
                        bname: this.name,
                        image: this.image,
                        qty: qty,
                        total: total,
                        cname: cname,
                        cid: cid,
                        pid: pid,
                        finalStatus: this.finalStatus
                      });
                    })
                    .catch(err => {
                      this.stdError = "Error Occured While Loading Your Cart!!";
                    });
                } else if (cname === "flourmil") {
                  const data2 = {
                    id: pid
                  };
                  cart1
                    .getFlourmilDetails(data2)
                    .then(res => {
                      let response = res.data;

                      this.discount = response[0].Discount;
                      this.price = response[0].Price;
                      this.color = response[0].Color;
                      this.name = response[0].Name;
                      this.model = response[0].Model;
                      this.image = response[0].Image;
                      this.pqty = response[0].Quantity;

                      if (qty <= this.pqty) {
                        this.finalStatus = 0;
                      } else {
                        this.finalStatus = 1;
                      }
                      this.price = this.price * qty;
                      this.discount = this.discount * qty;
                      let total = this.price - this.discount;
                      this.finalDiscount = this.finalDiscount + this.discount;
                      this.finalPrice = this.finalPrice + this.price;
                      this.finalAmount = this.finalAmount + total;

                      this.finalArray.push({
                        discount: this.discount,
                        price: this.price,
                        color: this.color,
                        model: this.model,
                        bname: this.name,
                        image: this.image,
                        qty: qty,
                        total: total,
                        cname: cname,
                        cid: cid,
                        pid: pid,
                        finalStatus: this.finalStatus
                      });
                    })
                    .catch(err => {
                      this.stdError = "Error Occured While Loading Your Cart!!";
                    });
                } else if (cname === "fridge") {
                  const data2 = {
                    id: pid
                  };
                  cart1
                    .getFridgeDetails(data2)
                    .then(res => {
                      let response = res.data;

                      this.discount = response[0].Discount;
                      this.price = response[0].Price;
                      this.color = response[0].Color;
                      this.name = response[0].Name;
                      this.model = response[0].Model;
                      this.image = response[0].Image;
                      this.pqty = response[0].Quantity;

                      if (qty <= this.pqty) {
                        this.finalStatus = 0;
                      } else {
                        this.finalStatus = 1;
                      }
                      this.price = this.price * qty;
                      this.discount = this.discount * qty;
                      let total = this.price - this.discount;
                      this.finalDiscount = this.finalDiscount + this.discount;
                      this.finalPrice = this.finalPrice + this.price;
                      this.finalAmount = this.finalAmount + total;

                      this.finalArray.push({
                        discount: this.discount,
                        price: this.price,
                        color: this.color,
                        model: this.model,
                        bname: this.name,
                        image: this.image,
                        qty: qty,
                        total: total,
                        cname: cname,
                        cid: cid,
                        pid: pid,
                        finalStatus: this.finalStatus
                      });
                    })
                    .catch(err => {
                      this.stdError = "Error Occured While Loading Your Cart!!";
                    });
                }
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
    } else {
      this.stdError = "Please Do Login First !!!";
    }
  }
};
</script>

<style scoped>
</style>
