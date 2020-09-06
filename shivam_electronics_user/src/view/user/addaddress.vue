<template>
  <div>
    <userHead></userHead>

    <div id="mainBody" v-if="totalAddress == 0">
      <div class="container">
        <div class="row">
          <userSidebar></userSidebar>
          <form @submit.prevent="addAddress()">
            <div class="span9">
              <h3>Address</h3>
              <div v-if="stdError !== ''">
                <h3 style="color: red;">{{ stdError }}</h3>
              </div>
              <div class="well" v-else>
                <h4>Enter Your address</h4>

                <div class="control-group">
                  <label class="control-label" for="address">
                    Address
                    <sup>*</sup>
                  </label>
                  <div class="controls">
                    <input
                      name="address1"
                      v-model="add1"
                      type="text"
                      id="address"
                      required
                      placeholder="Address"
                    />
                    <span>Street address, P.O. box, company name, c/o</span>
                  </div>
                </div>

                <div class="control-group">
                  <label class="control-label" for="address2">
                    Address (Line 2)
                    <sup>*</sup>
                  </label>
                  <div class="controls">
                    <input
                      name="address2"
                      v-model="add2"
                      type="text"
                      id="address2"
                      required
                      placeholder="Adress line 2"
                    />
                    <span>Apartment, suite, unit, building, floor, etc.</span>
                  </div>
                </div>

                <div class="control-group">
                  <label class="control-label" for="landmark">
                    Landmark
                    <sup>*</sup>
                  </label>
                  <div class="controls">
                    <input
                      name="landmark"
                      v-model="landmark"
                      type="text"
                      id="landmark"
                      required
                      placeholder="landmark"
                    />
                  </div>
                </div>

                <div class="control-group">
                  <label class="control-label" for="city">
                    City
                    <sup>*</sup>
                  </label>
                  <div class="controls">
                    <select
                      id="city"
                      required
                      @change="onChangeCity($event)"
                      v-model="selectedCity"
                    >
                      <option value disabled selected hidden>Choose City</option>
                      <option v-for="(c,index) in city" :key="index" :value="c.CityID">{{ c.Name }}</option>
                    </select>
                  </div>
                </div>

                <div class="control-group">
                  <label class="control-label" for="postcode">
                    Zip / Postal Code
                    <sup>*</sup>
                  </label>
                  <div class="controls">
                    <input
                      name="zipcode"
                      v-model="zipcode"
                      type="text"
                      id="postcode"
                      placeholder="Zip / Postal Code"
                      required
                      pattern="[0-9]*"
                      title="Only Numbers are allowed"
                      maxlength="6"
                      minlength="6"
                    />
                  </div>
                </div>
                <p style="color : red;">{{ error }}</p>

                <div class="control-group">
                  <div class="controls">
                    <button class="btn btn-success" type="submit">Add this Address</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div id="mainBody" v-else>
      <div class="container">
        <div class="row">
          <userSidebar></userSidebar>
          <div class="span9">
            <h3>Address</h3>
            <div v-if="stdError !== ''">
              <h3 style="color: red;">{{ stdError }}</h3>
            </div>
            <div v-else class="well">
              <h4>Your Addresses</h4>
              <div class="control-group">
                <div class="controls" v-for="(a,index) in add1" :key="index">
                  <input type="radio" :value="a.addid" v-model="checkedRadio" />
                  <br />
                  {{ a.addline1 }}
                  {{ a.addline2 }}
                  <br />
                  {{ a.city }}
                  <br />
                  {{ a.state }}
                  <br />
                  {{ a.landmark }}
                  <br />
                  {{ a.zipcode }}
                  <br />
                  <br />
                </div>
              </div>

              <div class="control-group">
                <div class="controls">
                  <button
                    class="btn btn-primary"
                    type="submit"
                    @click="addNewAddress"
                  >Add New Address</button>
                </div>
              </div>
              <div class="control-group" v-if="checkedRadio !== ''">
                <div class="controls">
                  <router-link
                    class="btn btn-primary"
                    :to="'/cart/checkout/addAddress/updateAddress/' + checkedRadio"
                  >Update Address</router-link>
                </div>
              </div>
              <div class="control-group" v-if="checkedRadio !== ''">
                <div class="controls">
                  <a href="#login" role="button" data-toggle="modal">
                    <span class="btn btn-success">Place Order</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <userFooter></userFooter>
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
        <h3>Confirmation</h3>
      </div>
      <div class="modal-body">
        <p>
          Are you Sure you want to place this order ???
          <br />if yes Click on Yes otherwise Click on No.
        </p>
        <button type="submit" class="btn" @click="razorPay()">Yes</button>
        <button class="btn" data-dismiss="modal" aria-hidden="true">No</button>
      </div>
    </div>
  </div>
</template>

<script>
//Scripts

import address from "../../services/user/address_service";
import checkout from "../../services/user/checkOut_service";

export default {
  data() {
    return {
      city: [],
      state: [],
      i: 0,
      cityName: "",
      cityId: 0,
      selectedCity: "",
      selectedState: "",
      StateId: "",
      add11: "",
      add2: "",
      zipcode: "",
      error: "",
      userId: "",
      email: "",
      landmark: "",
      totalAddress: 0,
      addresses: [],
      checkedRadio: "",
      checkboxChecked: "",
      button1: "",
      cityName: "",
      id: "",
      i: 0,
      addline1: "",
      addline2: "",
      add1: [],
      sid: "",
      sname: "",
      addid: "",
      AddID: 0,
      isDef: 0,
      landmark1: "",
      zipcode1: "",
      stdError: ""
    };
  },
  methods: {
    retrieveDetails() {
      address
        .getCity()
        .then(res => {
          this.city = res.data;
          this.city.sort((a, b) => (a.Name > b.Name ? 1 : -1));
        })
        .catch(err => {
          this.error = "Something went wrong";
        });

      address
        .getState()
        .then(res => {
          this.state = res.data;
        })
        .catch(err => {
          this.error = "Something went wrong";
        });
    },
    onChangeCity(event) {
      this.cityId = event.target.value;
      const data = {
        cityId: this.cityId
      };
      address
        .getStateID(data)
        .then(res => {
          let response = res.data;
          this.cityStateID = response[0].StateID;
        })
        .catch(err => {
          this.error = "Something went wrong";
        });
    },
    addAddress() {
      if (this.add1.trim() === "") {
        this.error = "Please enter Proper Address Line 1";
      } else if (this.add2.trim() === "") {
        this.error = "Please enter Proper Address Line 2";
      } else if (this.landmark.trim() === "") {
        this.error = "Please enter Landmark";
      } else {
        var data = {
          add1: this.add11,
          add2: this.add2,
          zipcode: this.zipcode,
          userId: this.userId,
          StateId: this.StateId,
          cityId: this.cityId,
          landmark: this.landmark
        };
        address
          .addAddress(data)
          .then(res => {
            this.$router.go();
          })
          .catch(err => {
            this.error = "Some Error Occured Please try agian Later!!!";
          });
      }
    },

    addNewAddress() {
      this.$router.push("/cart/checkout/addaddress/addAnotherAddress");
    },

    razorPay() {
      var options = {
        key: "rzp_test_jG7kHH2emV2Ihi", // Enter the Key ID generated from the Dashboard
        amount: "", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Shivam Electronics",
        description: "Make payment to purchase the product.",
        order_id: "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function(response) {},
        theme: {
          color: "#1e68f2"
        }
      };

      const data = {
        finalAmt: this.$session.get("finalAmount")
      };
      checkout
        .makePayment(data)
        .then(res => {
          let response = res.data;

          options.amount = this.$session.get("finalAmount") * 100;
          options.handler = this.handler;
          options.order_id = response.orderID;
          var rzp1 = new Razorpay(options);
          rzp1.open();
        })
        .catch(err => {
          this.stdError = "Something Went Wrong!!!";
        });
    },

    handler(response) {
      if (response.razorpay_payment_id) {
        const data = {
          id: response.razorpay_payment_id,
          amount: this.$session.get("finalAmount") * 100
        };
        checkout
          .capturePayment(data)
          .then(res => {
            let response = res.data;

            // Order Entry
            const data1 = {
              userID: this.$session.get("userID"),
              addID: this.checkedRadio,
              email: this.$session.get("email")
            };
            checkout
              .orderEntry(data1)
              .then(res => {
                let response = res.data;

                if (response.result === 1) {
                  alert("Payment Done!!!");
                  this.$router.push("/");
                }
              })
              .catch(err => {
                this.stdError = "Something Went Wrong!!!";
              });
          })
          .catch(err => {
            this.stdError = "Something Went Wrong!!!";
          });
      }
    }
  },
  beforeMount() {
    if (this.$session.exists() === true) {
      this.$session.start();
      this.email = this.$session.get("email");
      const data = {
        email: this.email
      };

      address
        .getUserID(data)
        .then(res => {
          let response = res.data;
          this.userId = response[0].UserID;
          const data1 = {
            userId: this.userId
          };
          address
            .getAddress(data1)
            .then(res => {
              this.addresses = res.data;
              this.totalAddress = res.data.length;
              while (this.i < this.totalAddress) {
                this.isDef = this.addresses[this.i].IsDefault;
                this.addid = this.addresses[this.i].AddressID;
                this.addline1 = this.addresses[this.i].AddressLine1;
                this.addline2 = this.addresses[this.i].AddressLine2;
                this.cityName = this.addresses[this.i].cityName;
                this.sname = this.addresses[this.i].stateName;
                this.landmark1 = this.addresses[this.i].Landmark;
                this.zipcode1 = this.addresses[this.i].Pincode;
                this.add1.push({
                  addline1: this.addline1,
                  addline2: this.addline2,
                  city: this.cityName,
                  state: this.sname,
                  addid: this.addid,
                  landmark: this.landmark1,
                  zipcode: this.zipcode1
                });
                if (this.isDef == 1) {
                  this.checkedRadio = this.addid;
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

      this.retrieveDetails();
    } else {
      this.stdError = "Please Do Login First!!!";
    }
  }
};
</script>
    

<style scoped>
</style>
        

