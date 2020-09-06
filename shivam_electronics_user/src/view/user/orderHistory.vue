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
              <li class="active">Order History</li>
            </ul>
            <div v-if="stdError !== ''">
              <h3 style="color: red;">{{ stdError }}</h3>
            </div>

            <div v-else>
              <h3>Order History</h3>
              <hr class="soft" />

              <div v-if="stdError1 !== ''">
                <h3 style="color: red;">{{ stdError1 }}</h3>
              </div>

              <div v-else>
                <div style="overflow-x: scroll;">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Order placed on</th>
                        <th>TotalAmount</th>
                        <th>Discount</th>
                        <th>NetAmount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(order,index) in orders" :key="index">
                        <td>
                          <a
                            :href="'/products/' + order.Name + '/' + order.ProductID"
                          >{{ order.Name }}</a>
                        </td>
                        <td>{{ order.Quantity }}</td>
                        <td>{{ order.OrderDateTime.substr(0,10) }}</td>
                        <td>₹ {{ order.TotalAmount }}</td>
                        <td>₹ {{ order.Discount }}</td>
                        <td>₹ {{ order.NetAmount }}</td>
                        <td v-if="order.Status === 1">
                          <span class="label label-info">Placed</span>
                        </td>
                        <td v-else-if="order.Status === 2">
                          <span class="label label-success">Accepted</span>
                        </td>
                        <td v-else-if="order.Status === 3">
                          <span class="label label-important">Rejected</span>
                        </td>
                        <td v-else-if="order.Status === 4">
                          <span class="label label-info">On Road</span>
                        </td>
                        <td v-else-if="order.Status === 5">
                          <span class="label label-success">Completed</span>
                        </td>
                        <td v-else-if="order.Status === 6">
                          <span class="label label-important">Canceled</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />
                <a href="/myorders" class="btn btn-large">
                  <i class="icon-arrow-left"></i> Back
                </a>
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
      orders: []
    };
  },
  methods: {},
  beforeMount() {
    if (this.$session.exists() === true) {
      this.$session.start();
      const data = {
        email: this.$session.get("email")
      };
      my.getOrders(data)
        .then(res => {
          this.orders = res.data;
          if (this.orders.length === 0) {
            this.stdError1 = "No orders available!!!";
          } else {
            this.stdError1 = "";
          }
        })
        .catch(err => {
          this.stdError1 = "Something Went Wrong!!!";
        });
    } else {
      this.stdError = "Please Do Login First !!!";
    }
  }
};
</script>

<style scoped>
</style>
