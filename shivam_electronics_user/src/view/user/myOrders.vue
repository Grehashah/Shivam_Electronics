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
              <li class="active">My Orders</li>
            </ul>

            <div v-if="stdError !== ''">
              <h3 style="color: red;">{{ stdError }}</h3>
            </div>

            <div v-else>
              <h3>
                My Orders
                <a href="/myorders/history" class="btn btn-large pull-right">Order History</a>
              </h3>
              <hr class="soft" />

              <div v-if="stdError1 !== ''">
                <h3 style="color: red;">{{ stdError1 }}</h3>
              </div>

              <div v-else>
                <h3>Order Tracking</h3>
                <div v-for="(order,index) in currentOrders" :key="index">
                  <p>
                    Category : {{ order.Name }}
                    <br />
                    Order placed on : {{ order.OrderDateTime.substr(0,10) }}
                    <br />
                    <span v-if="order.Status === 1">Status : Placed</span>
                    <span v-else-if="order.Status === 2">Status : Accepted</span>
                    <span v-else-if="order.Status === 4">Status : Under Shipment</span>
                    <br />
                    <span v-if="order.Invoice !== null">
                      Invoice :
                      <a
                        :href="'HTTPS://admin-gateway.shivam-electronics.in/assets/invoice/' + order.Invoice"
                        class="btn btn-primary"
                      >Click here</a>
                    </span>
                    <span v-else-if="order.Invoice === null">Invoice : Not Uploaded</span>
                    <br />
                  </p>
                  <div class="progress progress-striped active" v-if="order.Status === 1">
                    <div class="bar" style="width: 25%"></div>
                  </div>
                  <div class="progress progress-striped active" v-else-if="order.Status === 2">
                    <div class="bar" style="width: 50%"></div>
                  </div>
                  <div class="progress progress-striped active" v-else-if="order.Status === 4">
                    <div class="bar" style="width: 75%"></div>
                  </div>
                  <span v-if="order.Invoice === null">
                    <a href="#login" role="button" data-toggle="modal" style="padding-right:0">
                      <span class="btn btn-danger">Cancel Order</span>
                    </a>
                  </span>
                  <span
                    v-else-if="order.Invoice !== null"
                    style="color: red;"
                  >Now you can not cancel this order!!!</span>

                  <div
                    id="login"
                    class="modal hide fade in"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="login"
                    aria-hidden="false"
                  >
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                      <h3>Cancel Order</h3>
                    </div>
                    <div class="modal-body">
                      <p>
                        Are you Sure you want to cancel your order of {{ order.Name }} ???
                        <br />if yes Click on Yes otherwise Click on No.
                      </p>
                      <button
                        type="submit"
                        class="btn"
                        @click="cancelOrder(order.OrderID,order.Name,order.Quantity,order.ProductID)"
                      >Yes</button>
                      <button class="btn" data-dismiss="modal" aria-hidden="true">No</button>
                    </div>
                  </div>

                  <hr class="soft" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <userFooter></userFooter>
  </div>
</template>

<script>

import my from "../../services/user/myOrders_service";
import userSetup1 from "../../services/user/userSetup_service";

export default {
  data() {
    return {
      error: "",
      stdError: "",
      userID: "",
      stdError1: "",
      currentOrders: [],
      data1: {},
      qty: ""
    };
  },
  methods: {
    cancelOrder(id, name, qty, pid) {
      const data1 = {
        email: this.$session.get("email"),
        id: id
      };
      my.cancelOrder1(data1)
        .then(res => {
          let response = res.data;
          if (response.result === 1) {
            if (name === "fan") {
              const data1 = {
                pid: pid,
                qty: qty
              };
              my.addFanQuantity(data1)
                .then(res => {
                  let response = res.data;
                  if (response.result === 1) {
                    this.$router.go();
                  } else {
                    this.stdError1 = "Error Occured !!!";
                  }
                })
                .catch(err => {
                  this.stdError1 = "Something Went Wrong!!!";
                });
            } else if (name === "mobile") {
              const data1 = {
                pid: pid,
                qty: qty
              };
              my.addMobileQuantity(data1)
                .then(res => {
                  let response = res.data;
                  if (response.result === 1) {
                    this.$router.go();
                  } else {
                    this.stdError1 = "Error Occured !!!";
                  }
                })
                .catch(err => {
                  this.stdError1 = "Something Went Wrong!!!";
                });
            } else if (name === "fridge") {
              const data1 = {
                pid: pid,
                qty: qty
              };
              my.addFridgeQuantity(data1)
                .then(res => {
                  let response = res.data;
                  if (response.result === 1) {
                    this.$router.go();
                  } else {
                    this.stdError1 = "Error Occured !!!";
                  }
                })
                .catch(err => {
                  this.stdError1 = "Something Went Wrong!!!";
                });
            } else if (name === "flourmil") {
              const data1 = {
                pid: pid,
                qty: qty
              };
              my.addFlourmilQuantity(data1)
                .then(res => {
                  let response = res.data;
                  if (response.result === 1) {
                    this.$router.go();
                  } else {
                    this.stdError1 = "Error Occured !!!";
                  }
                })
                .catch(err => {
                  this.stdError1 = "Something Went Wrong!!!";
                });
            } else if (name === "tv") {
              const data1 = {
                pid: pid,
                qty: qty
              };
              my.addTVQuantity(data1)
                .then(res => {
                  let response = res.data;
                  if (response.result === 1) {
                    this.$router.go();
                  } else {
                    this.stdError1 = "Error Occured !!!";
                  }
                })
                .catch(err => {
                  this.stdError1 = "Something Went Wrong!!!";
                });
            } else if (name === "washingmachine") {
              const data1 = {
                pid: pid,
                qty: qty
              };
              my.addWashingMachineQuantity(data1)
                .then(res => {
                  let response = res.data;
                  if (response.result === 1) {
                    this.$router.go();
                  } else {
                    this.stdError1 = "Error Occured !!!";
                  }
                })
                .catch(err => {
                  this.stdError1 = "Something Went Wrong!!!";
                });
            } else if (name === "waterpurifier") {
              const data1 = {
                pid: pid,
                qty: qty
              };
              my.addWaterPurifierQuantity(data1)
                .then(res => {
                  let response = res.data;
                  if (response.result === 1) {
                    this.$router.go();
                  } else {
                    this.stdError1 = "Error Occured !!!";
                  }
                })
                .catch(err => {
                  this.stdError1 = "Something Went Wrong!!!";
                });
            } else if (name === "speaker") {
              const data1 = {
                pid: pid,
                qty: qty
              };
              my.addSpeakerQuantity(data1)
                .then(res => {
                  let response = res.data;
                  if (response.result === 1) {
                    this.$router.go();
                  } else {
                    this.stdError1 = "Error Occured !!!";
                  }
                })
                .catch(err => {
                  this.stdError1 = "Something Went Wrong!!!";
                });
            } else if (name === "mixer") {
              const data1 = {
                pid: pid,
                qty: qty
              };
              my.addMixerQuantity(data1)
                .then(res => {
                  let response = res.data;
                  if (response.result === 1) {
                    this.$router.go();
                  } else {
                    this.stdError1 = "Error Occured !!!";
                  }
                })
                .catch(err => {
                  this.stdError1 = "Something Went Wrong!!!";
                });
            } else if (name === "iron") {
              const data1 = {
                pid: pid,
                qty: qty
              };
              my.addIronQuantity(data1)
                .then(res => {
                  let response = res.data;
                  if (response.result === 1) {
                    this.$router.go();
                  } else {
                    this.stdError1 = "Error Occured !!!";
                  }
                })
                .catch(err => {
                  this.stdError1 = "Something Went Wrong!!!";
                });
            } else if (name === "oven") {
              const data1 = {
                pid: pid,
                qty: qty
              };
              my.addOvenQuantity(data1)
                .then(res => {
                  let response = res.data;
                  if (response.result === 1) {
                    this.$router.go();
                  } else {
                    this.stdError1 = "Error Occured !!!";
                  }
                })
                .catch(err => {
                  this.stdError1 = "Something Went Wrong!!!";
                });
            }
          } else {
            this.stdError1 = "Error Occured !!!";
          }
        })
        .catch(err => {
          this.stdError1 = "Something Went Wrong!!!";
        });
    }
  },
  beforeMount() {
    if (this.$session.exists() === true) {
      this.$session.start();
      this.stdError = "";

      const data = {
        email: this.$session.get("email")
      };
      my.getCurrentOrders(data)
        .then(res => {
          let response = res.data;
          this.currentOrders = res.data;
          if (response.length === 0) {
            this.stdError1 = "You don't have any ongoing order!!!";
          } else {
            this.stdError1 = "";
          }
        })
        .catch(err => {
          this.stdError = "Something Went Wrong!!!";
        });
    } else {
      this.stdError = "Please Do Login First !!!";
    }
  }
};
</script>

<style scoped>
</style>
