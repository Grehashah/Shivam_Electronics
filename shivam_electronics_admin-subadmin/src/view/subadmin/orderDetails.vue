<template>
  <div>
    <subAdminHead></subAdminHead>

    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
              <div class="header">
                <h2>Order details</h2>
                <br />
                <p style="color : red;">{{ error }}</p>
              </div>
              <div class="body">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs tab-nav-right" role="tablist">
                  <li role="presentation" class>
                    <a href="#order" data-toggle="tab" aria-expanded="true">Order Details</a>
                  </li>
                  <li role="presentation" class>
                    <a href="#product" data-toggle="tab" aria-expanded="true">Product Details</a>
                  </li>
                  <li role="presentation" class>
                    <a href="#user" data-toggle="tab" aria-expanded="false">Customer Details</a>
                  </li>
                  <li role="presentation" class>
                    <a href="#address" data-toggle="tab" aria-expanded="false">Address Details</a>
                  </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                  <div role="tabpanel" class="tab-pane fade" id="order">
                    <div class="row clearfix">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <div class="form-line">Category Name : {{ categoryName }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">Quantity : {{ cqty }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">Order placed on : {{ orderDateTime.substr(0,10) }}</div>
                        </div>
                        <div v-if="shipmentFlag === 1" class="form-group">
                          <div class="form-line">
                            Shipment dispatched on :
                            <input
                              type="date"
                              v-model="shipmentDateTime"
                              class="form-control"
                            />
                            <br />
                            <button
                              class="btn btn-primary waves-effect"
                              @click="changeShipDateTime"
                            >Edit</button>
                          </div>
                        </div>
                        <div v-else class="form-group">
                          <div class="form-line">
                            Shipment dispatched on :
                            <input
                              type="date"
                              v-model="shipmentDateTime"
                              class="form-control"
                              disabled
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">Total Amount : {{ totalAmount }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">Discount : {{ discount }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">Net Amount : {{ netAmount }}</div>
                        </div>
                        <div v-if="invoiceFlag === 1" class="form-group">
                          <div class="form-line">
                            <form enctype="multipart/form-data" @submit.prevent="sendFile">
                              Upload Invoice in pdf format :
                              <br />
                              <br />
                              <input type="file" ref="file" @change="selectedFile" />
                              <br />
                              <button class="btn btn-primary waves-effect">Upload</button>
                            </form>
                          </div>
                        </div>
                        <div v-else class="form-group">
                          <div class="form-line">
                            Invoice : &nbsp;
                            <a
                              v-if="invoice !== ''"
                              :href="'HTTPS://admin-gateway.shivam-electronics.in/assets/invoice/' + invoice"
                              class="btn btn-primary waves-effect"
                            >Click Here</a>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">
                            Currently in Status :
                            <span class="label label-primary">{{ status }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="product">
                    <div class="row clearfix">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <div class="form-line">
                            <img
                              v-if="productPic !== ''"
                              :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + categoryName + '/' + productPic"
                              style="height: 220px; width: 200px;"
                              alt="Product Image"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">Category Name : {{ categoryName }}</div>
                        </div>

                        <div class="form-group">
                          <div class="form-line">Brand Name : {{ brandName }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">Ratings : {{ ratings }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">Price : {{ price }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">Colour : {{ color }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">model : {{ model }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">Warranty : {{ warranty }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">Quantity : {{ qty }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">Quantity required by customer : {{ cqty }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">
                            Details :
                            <textarea
                              name="details"
                              id="details"
                              cols="30"
                              rows="5"
                              class="form-control"
                              v-model="details"
                              disabled
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="user">
                    <div class="row clearfix">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <div class="form-line">
                            <img
                              v-if="customerPic !== ''"
                              :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/customer/' + customerPic"
                              style="height: 220px; width: 200px;"
                              alt="profile pic"
                            />
                          </div>
                        </div>

                        <div class="form-group">
                          <div class="form-line">First Name: {{ firstName }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">Last Name : {{ lastName }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">ContactNo : {{ cno }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">Alternate ContactNo : {{ acno }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">Email : {{ email }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="address">
                    <div class="row clearfix">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <div class="form-line">
                            AddressLine1 :
                            <textarea
                              name="details"
                              id="details"
                              cols="30"
                              rows="5"
                              class="form-control"
                              v-model="addressLine1"
                              disabled
                            ></textarea>
                          </div>
                        </div>

                        <div class="form-group">
                          <div class="form-line">
                            AddressLine2 :
                            <textarea
                              name="details"
                              id="details"
                              cols="30"
                              rows="5"
                              class="form-control"
                              v-model="addressLine2"
                              disabled
                            ></textarea>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">Landmark : {{ landmark }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">Pincode : {{ pincode }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">City : {{ cityName }}</div>
                        </div>
                        <div class="form-group">
                          <div class="form-line">State : {{ stateName }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import manage from "../../services/subadmin/manageOrders";

export default {
  data() {
    return {
      error: "",
      qty: "",
      cqty: "",
      brandName: "",
      price: "",
      ratings: "",
      model: "",
      color: "",
      warranty: "",
      details: "",
      email: "",
      firstName: "",
      lastName: "",
      cno: "",
      acno: "",
      cid: "",
      aid: "",
      addressLine1: "",
      addressLine2: "",
      landmark: "",
      pincode: "",
      cityName: "",
      stateName: "",
      categoryName: "",
      totalAmount: "",
      netAmount: "",
      invoice: "",
      orderDateTime: "",
      discount: "",
      status: "",
      shipmentDateTime: "",
      invoiceFlag: 0,
      shipmentFlag: 0,
      productPic: "",
      product: "",
      categoryID: "",
      customerPic: "",
      file: "",
      uploadStatus: 0,
      image: "",
      date: ""
    };
  },
  methods: {
    changeShipDateTime() {
      var dateobj = new Date(this.shipmentDateTime);
      var date1 = dateobj.toISOString().substr(0, 10);

      const data = {
        id: this.$route.params.id,
        date: date1
      };
      manage
        .changeShipDateTime(data)
        .then(res => {
          let response1 = res.data;

          if (response1.result === 1) {
            this.error = "Shipment Date is updated";
          } else {
            this.error = "Error occured!!!";
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    selectedFile() {
      this.file = this.$refs.file.files[0];
    },
    sendFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      manage
        .uploadInvoice(formData)
        .then(res => {
          let response = res.data;

          if (response.result === 1) {
            this.image = response.name;
            const data = {
              id: this.$route.params.id,
              invoice: this.image
            };
            manage
              .updateInvoice(data)
              .then(res => {
                let response1 = res.data;

                if (response1.result === 1) {
                  this.error = "Invoice Uploaded";
                } else {
                  this.error = "Error occured!!!";
                }
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else {
            this.error = "Error occured!!!";
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    getProductDetails(data1) {
      const data = {
        orderid: data1
      };
      manage
        .productDetails(data)
        .then(res => {
          let response = res.data;
          this.qty = response[0].Quantity;
          this.details = response[0].Details;
          this.brandName = response[0].Name;
          this.color = response[0].Color;
          this.model = response[0].Model;
          this.warranty = response[0].Warranty;
          this.ratings = response[0].Ratings;
          this.price = response[0].Price;
          this.productPic = response[0].Image;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },

    getOrderDetails(data1) {
      const data = {
        orderid: data1
      };
      manage
        .orderDetails(data)
        .then(res => {
          let response = res.data;
          this.cqty = response[0].Quantity;
          this.cid = response[0].UserID;
          this.aid = response[0].AddressID;
          this.discount = response[0].Discount;
          this.status = response[0].Status;
          this.invoice = response[0].Invoice;

          this.date = response[0].ShipmentDateTime;
          var date = new Date(this.date);
          var month = date.getMonth() + 1;
          var date1 = date.getDate();
          if (month < 10 && date1 < 10) {
            this.shipmentDateTime =
              date.getFullYear() +
              "-0" +
              (date.getMonth() + 1) +
              "-0" +
              date.getDate();
          } else if (month < 10) {
            this.shipmentDateTime =
              date.getFullYear() +
              "-0" +
              (date.getMonth() + 1) +
              "-" +
              date.getDate();
          } else if (date1 < 10) {
            this.shipmentDateTime =
              date.getFullYear() +
              "-" +
              (date.getMonth() + 1) +
              "-0" +
              date.getDate();
          } else if (month > 10 && date1 > 10) {
            this.shipmentDateTime =
              date.getFullYear() +
              "-" +
              (date.getMonth() + 1) +
              "-" +
              date.getDate();
          }

          if (this.status === 2 || this.status === 1) {
            this.shipmentFlag = 1;
          } else {
            this.shipmentFlag = 0;
          }

          if (this.invoice !== null) {
            this.invoiceFlag = 0;
          } else {
            if (this.status === 2 || this.status === 1) {
              this.invoiceFlag = 1;
            }
          }
          if (this.status === 1) {
            this.status = "Order Placed";
          } else if (this.status === 2) {
            this.status = "Order Accepted";
          } else if (this.status === 3) {
            this.status = "Order Rejected";
          } else if (this.status === 4) {
            this.status = "Order Under Shipment";
          } else if (this.status === 5) {
            this.status = "Order Completed";
          } else if (this.status === 6) {
            this.status = "Order Canceled";
          }
          this.totalAmount = response[0].TotalAmount;
          this.netAmount = response[0].NetAmount;

          this.date = response[0].OrderDateTime;
          var date = new Date(this.date);
          var month = date.getMonth() + 1;
          var date1 = date.getDate();
          if (month < 10 && date1 < 10) {
            this.orderDateTime =
              date.getFullYear() +
              "-0" +
              (date.getMonth() + 1) +
              "-0" +
              date.getDate();
          } else if (month < 10) {
            this.orderDateTime =
              date.getFullYear() +
              "-0" +
              (date.getMonth() + 1) +
              "-" +
              date.getDate();
          } else if (date1 < 10) {
            this.orderDateTime =
              date.getFullYear() +
              "-" +
              (date.getMonth() + 1) +
              "-0" +
              date.getDate();
          } else if (month > 10 && date1 > 10) {
            this.orderDateTime =
              date.getFullYear() +
              "-" +
              (date.getMonth() + 1) +
              "-" +
              date.getDate();
          }

          this.categoryName = response[0].Name;

          this.getCustomerDetails(this.cid);
          this.getAddressDetails(this.aid);
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    getCustomerDetails(data1) {
      manage
        .customerDetails(data1)
        .then(res => {
          let response = res.data;
          this.email = response[0].Email;
          this.firstName = response[0].FirstName;
          this.lastName = response[0].LastName;
          this.cno = response[0].ContactNo;
          this.acno = response[0].AlternateNo;
          this.customerPic = response[0].Image;

          if (this.customerPic === null) {
            this.customerPic = "default_profile.png";
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },

    getAddressDetails(data1) {
      manage
        .addressDetails(data1)
        .then(res => {
          let response = res.data;
          this.addressLine1 = response[0].AddressLine1;
          this.addressLine2 = response[0].AddressLine2;
          this.landmark = response[0].Landmark;
          this.pincode = response[0].Pincode;
          this.cityName = response[0].Name;
          this.stateName = response[0].Name2;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    }
  },
  beforeMount() {
    if (this.$session.has("admin-email") === true) {
      this.$router.push("*");
    } else if (this.$session.has("subadmin-email") === true) {
      this.getProductDetails(this.$route.params.id);
      this.getOrderDetails(this.$route.params.id);
    } else {
      this.$router.push("/subadmin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

