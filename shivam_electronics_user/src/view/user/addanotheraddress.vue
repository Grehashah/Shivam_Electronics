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
              <div v-else class="well">
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
                      placeholder="Address"
                      required
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
                    <select id="city" required @change="onChangeCity($event)" v-model="selectedCity">
                      <option value disabled selected hidden>Choose City</option>
                      <option v-for="(c,index) in city" :value="c.CityID" :key="index">{{ c.Name }}</option>
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
                      minlength="6"
                      pattern="[0-9]*"
                      title="Only Numbers are allowed"
                      maxlength="6"
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

    <userFooter></userFooter>
  </div>
</template>

<script>
//Scripts

import address from "../../services/user/address_service";

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
      add1: "",
      add2: "",
      zipcode: "",
      error: "",
      userId: "",
      email: "",
      landmark: "",
      totalAddress: 0,
      addresses: [],
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
        this.error = "Please enter your Address Line 1";
      } else if (this.add2.trim() === "") {
        this.error = "Please enter your Address Line 2";
      } else if (this.landmark.trim() === "") {
        this.error = "Please enter Landmark";
      } else {
        var data = {
          add1: this.add1,
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
            this.$router.push("/cart/checkout/addaddress");
          })
          .catch(err => {
            this.error = "Some Error Occured Please try agian Later!!!";
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
        

