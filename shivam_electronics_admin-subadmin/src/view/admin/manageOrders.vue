<template>
  <div>
    <adminHead></adminHead>

    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
              <div class="header">
                <h2>Orders</h2>
                <br />
                <p style="color : red;">{{ error }}</p>
              </div>
              <div class="body">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs tab-nav-right" role="tablist">
                  <li role="presentation">
                    <a href="#new" data-toggle="tab" aria-expanded="false">New</a>
                  </li>
                  <li role="presentation" class>
                    <a href="#accept" data-toggle="tab" aria-expanded="true">Accepted</a>
                  </li>
                  <li role="presentation" class>
                    <a href="#under" data-toggle="tab" aria-expanded="false">Under Shipment</a>
                  </li>
                  <li role="presentation" class>
                    <a href="#completed" data-toggle="tab" aria-expanded="false">Completed</a>
                  </li>
                  <li role="presentation" class>
                    <a href="#rejected" data-toggle="tab" aria-expanded="false">Rejected</a>
                  </li>
                  <li role="presentation" class>
                    <a href="#canceled" data-toggle="tab" aria-expanded="false">Canceled</a>
                  </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                  <div role="tabpanel" class="tab-pane fade" id="new">
                    <div class="body table-responsive">
                      <h3 style="margin-top: -10px;">{{ "New Orders" }}</h3>
                      <br />
                      <table v-if="status === 1" class="table table-hover">
                        <thead>
                          <tr>
                            <th>Category</th>
                            <th>Qty</th>
                            <th>Customer Name</th>
                            <th>Order Date</th>
                            <th>Total Amount</th>
                            <th>Discount</th>
                            <th>Net Amount</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(order,index) in orders" :key="index">
                            <td>{{ order.Name }}</td>
                            <td>{{ order.Quantity }}</td>
                            <td>{{ order.FirstName }}</td>
                            <td>{{ order.OrderDateTime.substr(0,10) }}</td>
                            <td>{{ order.TotalAmount }}</td>
                            <td>{{ order.Discount }}</td>
                            <td>{{ order.NetAmount }}</td>
                            <td>
                              <router-link
                                class="btn btn-info waves-effect"
                                :to="'/admin/orders/details/' + order.OrderID"
                              >Details</router-link>
                              <button
                                type="button"
                                class="btn btn-success waves-effect"
                                data-toggle="modal"
                                data-target="#defaultModalAccept"
                                @click="set(order.OrderID)"
                              >Accept</button>
                              <button
                                type="button"
                                class="btn btn-danger waves-effect"
                                data-toggle="modal"
                                data-target="#defaultModalReject"
                                @click="setR(order.OrderID,order.Email,order.Name,order.OrderDateTime,order.Quantity,order.NetAmount,order.ProductID)"
                              >Reject</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <h2 v-else align="center" style="color: red;">No New Orders</h2>
                    </div>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="accept">
                    <div class="body table-responsive">
                      <h3 style="margin-top: -10px;">{{ "Accepted Orders" }}</h3>
                      <br />
                      <table v-if="statusA === 1" class="table table-hover">
                        <thead>
                          <tr>
                            <th>Category</th>
                            <th>Qty</th>
                            <th>Customer Name</th>
                            <th>Order Date</th>
                            <th>Total Amount</th>
                            <th>Discount</th>
                            <th>Net Amount</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(order,index) in ordersA" :key="index">
                            <td>{{ order.Name }}</td>
                            <td>{{ order.Quantity }}</td>
                            <td>{{ order.FirstName }}</td>
                            <td>{{ order.OrderDateTime.substr(0,10) }}</td>
                            <td>{{ order.TotalAmount }}</td>
                            <td>{{ order.Discount }}</td>
                            <td>{{ order.NetAmount }}</td>
                            <td>
                              <router-link
                                class="btn btn-info waves-effect"
                                :to="'/admin/orders/details/' + order.OrderID"
                              >Details</router-link>
                              <button
                                type="button"
                                class="btn btn-success waves-effect"
                                data-toggle="modal"
                                data-target="#defaultModalUnder"
                                @click="setU(order.OrderID,order.Invoice)"
                              >Under Shipment</button>

                              <router-link
                                class="btn btn-primary waves-effect"
                                :to="'/admin/orders/makeInvoice/' + order.OrderID"
                              >Upload Invoice</router-link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <h2 v-else align="center" style="color: red;">No Accepted Orders</h2>
                    </div>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="under">
                    <div class="body table-responsive">
                      <h3 style="margin-top: -10px;">{{ "Orders Under Shipment" }}</h3>
                      <br />

                      <table v-if="statusU === 1" class="table table-hover">
                        <thead>
                          <tr>
                            <th>Category</th>
                            <th>Qty</th>
                            <th>Customer Name</th>
                            <th>Order Date</th>
                            <th>Total Amount</th>
                            <th>Discount</th>
                            <th>Net Amount</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(order,index) in ordersU" :key="index">
                            <td>{{ order.Name }}</td>
                            <td>{{ order.Quantity }}</td>
                            <td>{{ order.FirstName }}</td>
                            <td>{{ order.OrderDateTime.substr(0,10) }}</td>
                            <td>{{ order.TotalAmount }}</td>
                            <td>{{ order.Discount }}</td>
                            <td>{{ order.NetAmount }}</td>
                            <td>
                              <router-link
                                class="btn btn-info waves-effect"
                                :to="'/admin/orders/details/' + order.OrderID"
                              >Details</router-link>
                              <button
                                type="button"
                                class="btn btn-success waves-effect"
                                data-toggle="modal"
                                data-target="#defaultModalCompleted"
                                @click="set(order.OrderID)"
                              >Completed</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <h2 v-else align="center" style="color: red;">No Orders under shipment</h2>
                    </div>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="completed">
                    <div class="body table-responsive">
                      <h3 style="margin-top: -10px;">{{ "Completed Orders Of Month " + currMonth }}</h3>
                      <br />

                      <table v-if="statusC1 === 1" class="table table-hover">
                        <thead>
                          <tr>
                            <th>Category</th>
                            <th>Qty</th>
                            <th>Customer Name</th>
                            <th>Order Date</th>
                            <th>Total Amount</th>
                            <th>Discount</th>
                            <th>Net Amount</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(order,index) in ordersC1_1" :key="index">
                            <td>{{ order.Name }}</td>
                            <td>{{ order.Quantity }}</td>
                            <td>{{ order.FirstName }}</td>
                            <td>{{ order.OrderDateTime.substr(0,10) }}</td>
                            <td>{{ order.TotalAmount }}</td>
                            <td>{{ order.Discount }}</td>
                            <td>{{ order.NetAmount }}</td>

                            <td>
                              <router-link
                                class="btn btn-info waves-effect"
                                :to="'/admin/orders/details/' + order.OrderID"
                              >Details</router-link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <h2 v-else align="center" style="color: red;">No Completed Orders</h2>
                    </div>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="rejected">
                    <div class="body table-responsive">
                      <h3 style="margin-top: -10px;">{{ "Rejected Orders Of Month " + currMonth }}</h3>
                      <br />
                      <table v-if="statusR === 1" class="table table-hover">
                        <thead>
                          <tr>
                            <th>Category</th>
                            <th>Qty</th>
                            <th>Customer Name</th>
                            <th>Order Date</th>
                            <th>Total Amount</th>
                            <th>Discount</th>
                            <th>Net Amount</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(order,index) in ordersR_1" :key="index">
                            <td>{{ order.Name }}</td>
                            <td>{{ order.Quantity }}</td>
                            <td>{{ order.FirstName }}</td>
                            <td>{{ order.OrderDateTime.substr(0,10) }}</td>
                            <td>{{ order.TotalAmount }}</td>
                            <td>{{ order.Discount }}</td>
                            <td>{{ order.NetAmount }}</td>
                            <td>
                              <router-link
                                class="btn btn-info waves-effect"
                                :to="'/admin/orders/details/' + order.OrderID"
                              >Details</router-link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <h2 v-else align="center" style="color: red;">No Rejected Orders</h2>
                    </div>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="canceled">
                    <div class="body table-responsive">
                      <h3 style="margin-top: -10px;">{{ "Canceled Orders Of Month " + currMonth }}</h3>
                      <br />

                      <table v-if="statusC2 === 1" class="table table-hover">
                        <thead>
                          <tr>
                            <th>Category</th>
                            <th>Qty</th>
                            <th>Customer Name</th>
                            <th>Order Date</th>
                            <th>Total Amount</th>
                            <th>Discount</th>
                            <th>Net Amount</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(order,index) in ordersC2_1" :key="index">
                            <td>{{ order.Name }}</td>
                            <td>{{ order.Quantity }}</td>
                            <td>{{ order.FirstName }}</td>
                            <td>{{ order.OrderDateTime.substr(0,10) }}</td>
                            <td>{{ order.TotalAmount }}</td>
                            <td>{{ order.Discount }}</td>
                            <td>{{ order.NetAmount }}</td>
                            <td>
                              <router-link
                                class="btn btn-info waves-effect"
                                :to="'/admin/orders/details/' + order.OrderID"
                              >Details</router-link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <h2 v-else align="center" style="color: red;">No Canceled Orders</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="modal fade" id="defaultModalAccept" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="defaultModalLabel">Order Acceptance</h4>
          </div>
          <div class="modal-body">
            <p>
              Are you sure you want to Accept this order ???
              <br />Please check product Stock and Required Quantity Carefully.
            </p>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-success waves-effect"
              @click="newAcceptOrder(finalOrderID)"
              data-dismiss="modal"
            >Accept</button>
            <button type="button" class="btn btn-danger waves-effect" data-dismiss="modal">CLOSE</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="defaultModalReject" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="defaultModalLabel">Order Rejection</h4>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to Reject this order ???</p>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-danger waves-effect"
              @click="newRejectOrder(finalOrderID,finalEmail,finalName,finalotime,finalQty,finalNet,productID)"
              data-dismiss="modal"
            >Reject</button>
            <button type="button" class="btn btn-danger waves-effect" data-dismiss="modal">CLOSE</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="defaultModalCompleted" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="defaultModalLabel">Order Completion</h4>
          </div>
          <div class="modal-body">
            <p>
              This order is Completed Successfully ???
              <br />Please check product Quantity Once.
            </p>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-success waves-effect"
              @click="newCompletedOrder(finalOrderID)"
              data-dismiss="modal"
            >Complete</button>
            <button type="button" class="btn btn-danger waves-effect" data-dismiss="modal">CLOSE</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="defaultModalUnder" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="defaultModalLabel">Order Under Shipment</h4>
          </div>
          <div class="modal-body">
            <p>
              <br />Please check product Shipment Date and verify it Once.
            </p>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-success waves-effect"
              @click="newUnderShipmentOrder(finalOrderID,finalInvoice)"
              data-dismiss="modal"
            >Under Shipment</button>
            <button type="button" class="btn btn-danger waves-effect" data-dismiss="modal">CLOSE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import manage from "../../services/admin/manageOrders";
import my from "../../services/user/myOrders_service";

export default {
  data() {
    return {
      error: "",
      orders: [],
      ordersA: [],
      ordersR_1: [],
      ordersR: [],
      statusR_1: [],
      ordersC1: [],
      ordersC1_1: [],
      ordersC2: [],
      ordersC2_1: [],
      ordersU: [],
      status: 0,
      statusA: 0,
      statusC1: 0,
      statusR: 0,
      statusC2: 0,
      statusU: 0,
      alert: 0,
      currMonth: "",
      no: 0,
      i: 0,
      date: "",
      month: "",
      pname: "",
      qty: 0,
      fname: "",
      totalamt: 0,
      discount: 0,
      netamt: 0,
      finalOrderID: "",
      finalEmail: "",
      finalName: "",
      finalotime: "",
      finalQty: "",
      finalNet: "",
      finalInvoice: "",
      invoice: "",
      productID: "",
      newOrders: [],
      acceptOrders: [],
      underOrders: [],
      email: "",
      productID: ""
    };
  },
  methods: {
    set(id) {
      this.finalOrderID = id;
    },
    setR(oid, email, name, otime, qty, netamount, pid) {
      this.finalOrderID = oid;
      this.finalEmail = email;
      this.finalName = name;
      this.finalotime = otime;
      this.finalQty = qty;
      this.finalNet = netamount;
      this.productID = pid;
    },
    setU(oid, invoice) {
      this.finalOrderID = oid;
      this.finalInvoice = invoice;
    },
    newAcceptOrder(data1) {
      const data = {
        orderid: data1
      };
      manage
        .acceptOrder(data)
        .then(res => {
          let response = res.data;

          if (response.result == 1) {
            this.$router.go();
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    newRejectOrder(
      data1,
      email1,
      Name,
      OrderDateTime,
      Quantity,
      NetAmount,
      productID
    ) {
      const data = {
        orderid: data1,
        email: email1,
        categoryName: Name,
        orderDateTime: OrderDateTime,
        qty: Quantity,
        netAmount: NetAmount
      };
      manage
        .rejectOrder(data)
        .then(res => {
          let response = res.data;

          if (Name === "mobile") {
            const data1 = {
              pid: productID,
              qty: Quantity
            };
            my.addMobileQuantity(data1)
              .then(res => {
                let response = res.data;
                if (response.result === 1) {
                  this.$router.go();
                } else {
                  this.error = "Error Occured";
                }
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (Name === "fan") {
            const data1 = {
              pid: productID,
              qty: Quantity
            };
            my.addFanQuantity(data1)
              .then(res => {
                let response = res.data;
                if (response.result === 1) {
                  this.$router.go();
                } else {
                  this.error = "Error Occured";
                }
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (Name === "fridge") {
            const data1 = {
              pid: productID,
              qty: Quantity
            };
            my.addFridgeQuantity(data1)
              .then(res => {
                let response = res.data;
                if (response.result === 1) {
                  this.$router.go();
                } else {
                  this.error = "Error Occured";
                }
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (Name === "flourmil") {
            const data1 = {
              pid: productID,
              qty: Quantity
            };
            my.addFlourmilQuantity(data1)
              .then(res => {
                let response = res.data;
                if (response.result === 1) {
                  this.$router.go();
                } else {
                  this.error = "Error Occured";
                }
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (Name === "mixer") {
            const data1 = {
              pid: productID,
              qty: Quantity
            };
            my.addMixerQuantity(data1)
              .then(res => {
                let response = res.data;
                if (response.result === 1) {
                  this.$router.go();
                } else {
                  this.error = "Error Occured";
                }
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (Name === "washingmachine") {
            const data1 = {
              pid: productID,
              qty: Quantity
            };
            my.addWashingMachineQuantity(data1)
              .then(res => {
                let response = res.data;
                if (response.result === 1) {
                  this.$router.go();
                } else {
                  this.error = "Error Occured";
                }
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (Name === "waterpurifier") {
            const data1 = {
              pid: productID,
              qty: Quantity
            };
            my.addWaterPurifierQuantity(data1)
              .then(res => {
                let response = res.data;
                if (response.result === 1) {
                  this.$router.go();
                } else {
                  this.error = "Error Occured";
                }
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (Name === "tv") {
            const data1 = {
              pid: productID,
              qty: Quantity
            };
            my.addTVQuantity(data1)
              .then(res => {
                let response = res.data;
                if (response.result === 1) {
                  this.$router.go();
                } else {
                  this.error = "Error Occured";
                }
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (Name === "oven") {
            const data1 = {
              pid: productID,
              qty: Quantity
            };
            my.addOvenQuantity(data1)
              .then(res => {
                let response = res.data;
                if (response.result === 1) {
                  this.$router.go();
                } else {
                  this.error = "Error Occured";
                }
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (Name === "speaker") {
            const data1 = {
              pid: productID,
              qty: Quantity
            };
            my.addSpeakerQuantity(data1)
              .then(res => {
                let response = res.data;
                if (response.result === 1) {
                  this.$router.go();
                } else {
                  this.error = "Error Occured";
                }
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (Name === "iron") {
            const data1 = {
              pid: productID,
              qty: Quantity
            };
            my.addIronQuantity(data1)
              .then(res => {
                let response = res.data;
                if (response.result === 1) {
                  this.$router.go();
                } else {
                  this.error = "Error Occured";
                }
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    getNewOrders() {
      manage
        .getNewOrders()
        .then(res => {
          this.newOrders = res.data;

          this.no = this.newOrders.length;
          this.i = 0;
          while (this.i < this.no) {
            this.pname = this.newOrders[this.i].Name;
            this.qty = this.newOrders[this.i].Quantity;
            this.fname = this.newOrders[this.i].FirstName;
            this.totalamt = this.newOrders[this.i].TotalAmount;
            this.discount = this.newOrders[this.i].Discount;
            this.netamt = this.newOrders[this.i].NetAmount;
            this.email = this.newOrders[this.i].Email;
            this.productID = this.newOrders[this.i].ProductID;

            this.date = this.newOrders[this.i].OrderDateTime;
            var date = new Date(this.date);
            var month = date.getMonth() + 1;
            var date1 = date.getDate();
            if (month < 10 && date1 < 10) {
              this.date =
                date.getFullYear() +
                "-0" +
                (date.getMonth() + 1) +
                "-0" +
                date.getDate();
            } else if (month < 10) {
              this.date =
                date.getFullYear() +
                "-0" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate();
            } else if (date1 < 10) {
              this.date =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-0" +
                date.getDate();
            } else if (month > 10 && date1 > 10) {
              this.date =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate();
            }

            var date = new Date(this.date);
            this.orders.push({
              Name: this.pname,
              Quantity: this.qty,
              FirstName: this.fname,
              OrderDateTime: this.date,
              TotalAmount: this.totalamt,
              Discount: this.discount,
              NetAmount: this.netamt,
              Email: this.email,
              ProductID: this.productID,
              OrderID: this.newOrders[this.i].OrderID
            });
            this.i = this.i + 1;
          }

          if (this.orders.length !== 0) {
            this.status = 1;
          } else {
            this.status = 0;
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },

    getAcceptedOrders() {
      manage
        .getAcceptedOrders()
        .then(res => {
          this.acceptOrders = res.data;
          this.no = this.acceptOrders.length;
          this.i = 0;
          while (this.i < this.no) {
            this.pname = this.acceptOrders[this.i].Name;
            this.qty = this.acceptOrders[this.i].Quantity;
            this.fname = this.acceptOrders[this.i].FirstName;
            this.totalamt = this.acceptOrders[this.i].TotalAmount;
            this.discount = this.acceptOrders[this.i].Discount;
            this.netamt = this.acceptOrders[this.i].NetAmount;
            this.invoice = this.acceptOrders[this.i].Invoice;

            this.date = this.acceptOrders[this.i].OrderDateTime;
            var date = new Date(this.date);
            var month = date.getMonth() + 1;
            var date1 = date.getDate();
            if (month < 10 && date1 < 10) {
              this.date =
                date.getFullYear() +
                "-0" +
                (date.getMonth() + 1) +
                "-0" +
                date.getDate();
            } else if (month < 10) {
              this.date =
                date.getFullYear() +
                "-0" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate();
            } else if (date1 < 10) {
              this.date =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-0" +
                date.getDate();
            } else if (month > 10 && date1 > 10) {
              this.date =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate();
            }

            var date = new Date(this.date);
            this.ordersA.push({
              Name: this.pname,
              Quantity: this.qty,
              Invoice: this.invoice,
              FirstName: this.fname,
              OrderDateTime: this.date,
              TotalAmount: this.totalamt,
              Discount: this.discount,
              NetAmount: this.netamt,
              OrderID: this.acceptOrders[this.i].OrderID
            });
            this.i = this.i + 1;
          }
          if (this.ordersA.length !== 0) {
            this.statusA = 1;
          } else {
            this.statusA = 0;
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    getRejectedOrders() {
      manage
        .getRejectedOrders()
        .then(res => {
          var currentDate = new Date();
          this.currMonth = currentDate.getMonth() + 1;
          this.ordersR = res.data;
          this.no = this.ordersR.length;
          this.i = 0;
          while (this.i < this.no) {
            this.pname = this.ordersR[this.i].Name;
            this.qty = this.ordersR[this.i].Quantity;
            this.fname = this.ordersR[this.i].FirstName;
            this.totalamt = this.ordersR[this.i].TotalAmount;
            this.discount = this.ordersR[this.i].Discount;
            this.netamt = this.ordersR[this.i].NetAmount;

            this.date = this.ordersR[this.i].OrderDateTime;
            var date = new Date(this.date);
            var month = date.getMonth() + 1;
            var date1 = date.getDate();
            if (month < 10 && date1 < 10) {
              this.date =
                date.getFullYear() +
                "-0" +
                (date.getMonth() + 1) +
                "-0" +
                date.getDate();
            } else if (month < 10) {
              this.date =
                date.getFullYear() +
                "-0" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate();
            } else if (date1 < 10) {
              this.date =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-0" +
                date.getDate();
            } else if (month > 10 && date1 > 10) {
              this.date =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate();
            }

            var date = new Date(this.date);
            this.month = date.getMonth() + 1;
            if (this.currMonth == this.month) {
              this.ordersR_1.push({
                Name: this.pname,
                Quantity: this.qty,
                FirstName: this.fname,
                OrderDateTime: this.date,
                TotalAmount: this.totalamt,
                Discount: this.discount,
                NetAmount: this.netamt,
                OrderID: this.ordersR[this.i].OrderID
              });
            }
            this.i = this.i + 1;
          }
          if (this.ordersR_1.length !== 0) {
            this.statusR = 1;
          } else {
            this.statusR = 0;
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },

    getCompletedOrders() {
      manage
        .getCompletedOrders()
        .then(res => {
          var currentDate = new Date();
          this.currMonth = currentDate.getMonth() + 1;
          this.ordersC1 = res.data;
          this.no = this.ordersC1.length;
          this.i = 0;
          while (this.i < this.no) {
            this.pname = this.ordersC1[this.i].Name;
            this.qty = this.ordersC1[this.i].Quantity;
            this.fname = this.ordersC1[this.i].FirstName;
            this.totalamt = this.ordersC1[this.i].TotalAmount;
            this.discount = this.ordersC1[this.i].Discount;
            this.netamt = this.ordersC1[this.i].NetAmount;

            this.date = this.ordersC1[this.i].OrderDateTime;
            var date = new Date(this.date);
            var month = date.getMonth() + 1;
            var date1 = date.getDate();
            if (month < 10 && date1 < 10) {
              this.date =
                date.getFullYear() +
                "-0" +
                (date.getMonth() + 1) +
                "-0" +
                date.getDate();
            } else if (month < 10) {
              this.date =
                date.getFullYear() +
                "-0" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate();
            } else if (date1 < 10) {
              this.date =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-0" +
                date.getDate();
            } else if (month > 10 && date1 > 10) {
              this.date =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate();
            }

            var date = new Date(this.date);
            this.month = date.getMonth() + 1;
            if (this.currMonth == this.month) {
              this.ordersC1_1.push({
                Name: this.pname,
                Quantity: this.qty,
                FirstName: this.fname,
                OrderDateTime: this.date,
                TotalAmount: this.totalamt,
                Discount: this.discount,
                NetAmount: this.netamt,
                OrderID: this.ordersC1[this.i].OrderID
              });
            }
            this.i = this.i + 1;
          }
          if (this.ordersC1_1.length !== 0) {
            this.statusC1 = 1;
          } else {
            this.statusC1 = 0;
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    getCanceledOrders() {
      manage
        .getCanceledOrders()
        .then(res => {
          var currentDate = new Date();
          this.currMonth = currentDate.getMonth() + 1;
          this.ordersC2 = res.data;
          this.no = this.ordersC2.length;
          this.i = 0;
          while (this.i < this.no) {
            this.pname = this.ordersC2[this.i].Name;
            this.qty = this.ordersC2[this.i].Quantity;
            this.fname = this.ordersC2[this.i].FirstName;
            this.totalamt = this.ordersC2[this.i].TotalAmount;
            this.discount = this.ordersC2[this.i].Discount;
            this.netamt = this.ordersC2[this.i].NetAmount;

            this.date = this.ordersC2[this.i].OrderDateTime;
            var date = new Date(this.date);
            var month = date.getMonth() + 1;
            var date1 = date.getDate();
            if (month < 10 && date1 < 10) {
              this.date =
                date.getFullYear() +
                "-0" +
                (date.getMonth() + 1) +
                "-0" +
                date.getDate();
            } else if (month < 10) {
              this.date =
                date.getFullYear() +
                "-0" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate();
            } else if (date1 < 10) {
              this.date =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-0" +
                date.getDate();
            } else if (month > 10 && date1 > 10) {
              this.date =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate();
            }
            var date = new Date(this.date);
            this.month = date.getMonth() + 1;
            if (this.currMonth == this.month) {
              this.ordersC2_1.push({
                Name: this.pname,
                Quantity: this.qty,
                FirstName: this.fname,
                OrderDateTime: this.date,
                TotalAmount: this.totalamt,
                Discount: this.discount,
                NetAmount: this.netamt,
                OrderID: this.ordersC2[this.i].OrderID
              });
            }
            this.i = this.i + 1;
          }
          if (this.ordersC2_1.length !== 0) {
            this.statusC2 = 1;
          } else {
            this.statusC2 = 0;
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    getUnderShipmentOrders() {
      manage
        .getUnderShipmentOrders()
        .then(res => {
          this.underOrders = res.data;

          this.no = this.underOrders.length;
          this.i = 0;
          while (this.i < this.no) {
            this.pname = this.underOrders[this.i].Name;
            this.qty = this.underOrders[this.i].Quantity;
            this.fname = this.underOrders[this.i].FirstName;
            this.totalamt = this.underOrders[this.i].TotalAmount;
            this.discount = this.underOrders[this.i].Discount;
            this.netamt = this.underOrders[this.i].NetAmount;

            this.date = this.underOrders[this.i].OrderDateTime;
            var date = new Date(this.date);
            var month = date.getMonth() + 1;
            var date1 = date.getDate();
            if (month < 10 && date1 < 10) {
              this.date =
                date.getFullYear() +
                "-0" +
                (date.getMonth() + 1) +
                "-0" +
                date.getDate();
            } else if (month < 10) {
              this.date =
                date.getFullYear() +
                "-0" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate();
            } else if (date1 < 10) {
              this.date =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-0" +
                date.getDate();
            } else if (month > 10 && date1 > 10) {
              this.date =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate();
            }

            var date = new Date(this.date);
            this.ordersU.push({
              Name: this.pname,
              Quantity: this.qty,
              FirstName: this.fname,
              OrderDateTime: this.date,
              TotalAmount: this.totalamt,
              Discount: this.discount,
              NetAmount: this.netamt,
              OrderID: this.underOrders[this.i].OrderID
            });
            this.i = this.i + 1;
          }

          if (this.ordersU.length !== 0) {
            this.statusU = 1;
          } else {
            this.statusU = 0;
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    newCompletedOrder(data1) {
      const data = {
        orderid: data1
      };
      manage
        .completeOrder(data)
        .then(res => {
          let response = res.data;
          if (response.result == 1) {
            this.$router.go();
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    newUnderShipmentOrder(data1, data2) {
      if (data2 === null) {
        this.error = "Please upload Invoice First";
      } else {
        const data = {
          orderid: data1
        };
        manage
          .underShipmentOrder(data)
          .then(res => {
            let response = res.data;
            if (response.result == 1) {
              this.$router.go();
            }
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      }
    }
  },
  beforeMount() {
     if(this.$session.has("subadmin-email") === true)
    {
      this.$router.push("*");
    }
    else if (this.$session.has("admin-email") === true) {
     this.getNewOrders();
      this.getAcceptedOrders();
      this.getRejectedOrders();
      this.getCanceledOrders();
      this.getCompletedOrders();
      this.getUnderShipmentOrders();
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    
<style scoped>
</style>
        

