<template>
  <div>
    <subAdminHead></subAdminHead>
    <section class="content">
      <div class="container-fluid">
        <div class="block-header">
          <h2>Home Page</h2>
        </div>

        <!-- Widgets -->
        <div class="row clearfix">
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="info-box bg-indigo">
              <div class="icon">
                <i class="material-icons">face</i>
              </div>
              <div class="content">
                <font size="2">NUMBER OF EMPLOYEES</font>
                <br />
                <font size="5">{{ totalemployees }}</font>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="info-box bg-blue">
              <div class="icon">
                <i class="material-icons">face</i>
              </div>
              <div class="content">
                <font size="2">NUMBER OF CUSTOMERS</font>
                <br />
                <font size="5">{{ totalusers }}</font>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="info-box bg-light-blue">
              <div class="icon">
                <i class="material-icons">devices</i>
              </div>
              <div class="content">
                <font size="2">NUMBER OF BRANDS</font>
                <br />
                <b>
                  <font size="5">{{ totalbrands }}</font>
                </b>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="info-box bg-cyan">
              <div class="icon">
                <i class="material-icons">forum</i>
              </div>
              <a href="/subadmin/products" style="cursor: pointer; color : white;">
                <div class="content">
                  <font size="2">LIST OF PRODUCTS HAVING QUANTITY LESS THAN 5</font>
                </div>
              </a>
            </div>
          </div>
          <br />
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="info-box bg-teal">
              <div class="icon">
                <i class="material-icons">shopping_cart</i>
              </div>
              <div class="content">
                <font size="2">NUMBER OF ORDERS</font>
                <br />
                <font size="5">{{ totalorders }}</font>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="info-box bg-green">
              <div class="icon">
                <i class="material-icons">shopping_cart</i>
              </div>
              <div class="content">
                <font size="2">NUMBER OF COMPLETED-ORDERS</font>
                <br />
                <font size="5">{{ totalcompletedorders }}</font>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="info-box bg-light-green">
              <div class="icon">
                <i class="material-icons">shopping_cart</i>
              </div>
              <div class="content">
                <font size="2">NUMBER OF REJECTED-ORDERS</font>
                <br />
                <font size="5">{{ totalrejectedorders }}</font>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="info-box bg-lime">
              <div class="icon">
                <i class="material-icons">shopping_cart</i>
              </div>
              <div class="content">
                <font size="2">NUMBER OF CANCELED-ORDERS</font>
                <br />
                <font size="5">{{ totalcanceledorders }}</font>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div class="block-header">
          <h2>Received Orders</h2>
        </div>
        <div class="row clearfix">
          <area-chart
            :data="{'January': jancnt,'February': febcnt,'March': marcnt,'April': aprcnt,'May': maycnt,'June': juncnt,'July': julcnt,'August': augcnt,'September': sepcnt,'October': octcnt,'November': novcnt,'December': deccnt}"
          ></area-chart>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import dashboard from "../../services/subadmin/dashboard_service";

export default {
  data() {
    return {
      jancnt: 0,
      febcnt: 0,
      marcnt: 0,
      aprcnt: 0,
      maycnt: 0,
      juncnt: 0,
      julcnt: 0,
      augcnt: 0,
      sepcnt: 0,
      octcnt: 0,
      novcnt: 0,
      deccnt: 0,
      i: 0,
      date1: 0,
      no: 0,
      totalusers: 0,
      totalemployees: 0,
      totalorders: 0,
      totalcompletedorders: 0,
      totalcanceledorders: 0,
      totalrejectedorders: 0,
      totalbrands: 0
    };
  },
  methods: {
    retriveUsers() {
      dashboard
        .getUsers()
        .then(res => {
          this.totalusers = res.data.length;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });

      dashboard
        .getCompletedOrders()
        .then(res => {
          this.totalcompletedorders = res.data.length;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });

      dashboard
        .getCanceledOrders()
        .then(res => {
          this.totalcanceledorders = res.data.length;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });

      dashboard
        .getBrands()
        .then(res => {
          this.totalbrands = res.data.length;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });

      dashboard
        .getRejectedOrders()
        .then(res => {
          this.totalrejectedorders = res.data.length;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });

      dashboard
        .getEmployees()
        .then(res => {
          this.totalemployees = res.data.length;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });

      dashboard
        .getOrders()
        .then(res => {
          this.totalorders = res.data.length;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });

      dashboard
        .getOrders()
        .then(res => {
          let response = res.data;
          this.no = res.data.length;

          while (this.i < this.no) {
            this.date1 = response[this.i].OrderDateTime;
            var date = new Date(this.date1);
            var result = date.getMonth() + 1;

            if (result == 1) {
              this.jancnt++;
            } else if (result == 2) {
              this.febcnt++;
            } else if (result == 3) {
              this.marcnt++;
            } else if (result == 4) {
              this.aprcnt++;
            } else if (result == 5) {
              this.maycnt++;
            } else if (result == 6) {
              this.juncnt++;
            } else if (result == 7) {
              this.julcnt++;
            } else if (result == 8) {
              this.augcnt++;
            } else if (result == 9) {
              this.sepcnt++;
            } else if (result == 10) {
              this.octcnt++;
            } else if (result == 11) {
              this.novcnt++;
            } else if (result == 12) {
              this.deccnt++;
            }

            this.i = this.i + 1;
          }
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
        this.retriveUsers();
    } else {
      this.$router.push("/subadmin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>