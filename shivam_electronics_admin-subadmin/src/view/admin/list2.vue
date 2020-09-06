<template>
  <div>
    <adminHead></adminHead>

    <section class="content">
      <div class="container-fluid">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="header">
              <h2>Order List</h2>
              <br />
              <p style="color: red;">{{ error }}</p>
            </div>
            <div class="body table-responsive">
              <md-table
                v-model="searched"
                md-sort="Name"
                md-sort-order="asc"
                md-card
                md-fixed-header
                class="table table-hover"
              >
                <md-table-toolbar>
                  <md-field md-clearable class="md-toolbar-section-end">
                    <md-input
                      placeholder="Search by Product ..."
                      v-model="search"
                      @input="searchOnTable"
                    />
                  </md-field>
                </md-table-toolbar>

                <md-table-empty-state md-label="No Order found" md-description="No Order found"></md-table-empty-state>
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Product" md-sort-by="Name">{{ item.Name }}</md-table-cell>
                  <md-table-cell md-label="Quantity" md-sort-by="Quantity">{{ item.Quantity }}</md-table-cell>
                  <md-table-cell
                    md-label="UserName"
                    md-sort-by="FirstName"
                  >{{ item.FirstName }} {{ item.LastName }}</md-table-cell>
                  <md-table-cell
                    md-label="Order-DateTime"
                    md-sort-by="OrderDateTime"
                  >{{ item.OrderDateTime }}</md-table-cell>
                  <md-table-cell
                    md-label="Shipment-DateTime"
                    md-sort-by="ShipmentDateTime"
                  >{{ item.ShipmentDateTime }}</md-table-cell>
                  <md-table-cell md-label="NetAmount" md-sort-by="NetAmount">{{ item.NetAmount }}</md-table-cell>
                  <md-table-cell md-label="Discount" md-sort-by="Discount">{{ item.Discount }}</md-table-cell>
                  <md-table-cell
                    md-label="TotalAmount"
                    md-sort-by="TotalAmount"
                  >{{ item.TotalAmount }}</md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import history from "../../services/admin/monthlyHistoryList_service";
const toLower = text => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter(item => toLower(item.Name).includes(toLower(term)));
  }

  return items;
};
export default {
  data() {
    return {
      userid: 0,
      products: [],
      name: [],
      cindex: -1,
      cemp: null,
      error: "",
      search: null,
      searched: [],
      pro: [],
      date1: "",
      date2: "",
      shipmentDateTime: "",
      OrderDateTime: ""
    };
  },
  methods: {
    retriveDetails(id) {
      const data = {
        userid: id
      };
      history
        .getUserDetail(data)
        .then(res => {
          this.pro = res.data;

          if (res.data.length === 0) {
            this.error = "No Orders";
          } else {
            let i = 0;
            let n = this.pro.length;
            while (i < n) {
              this.date1 = this.pro[i].OrderDateTime;
              var date = new Date(this.date1);
              var month = date.getMonth() + 1;
              var date1 = date.getDate();
              if (month < 10 && date1 < 10) {
                this.OrderDateTime =
                  date.getFullYear() +
                  "-0" +
                  (date.getMonth() + 1) +
                  "-0" +
                  date.getDate();
              } else if (month < 10) {
                this.OrderDateTime =
                  date.getFullYear() +
                  "-0" +
                  (date.getMonth() + 1) +
                  "-" +
                  date.getDate();
              } else if (date1 < 10) {
                this.OrderDateTime =
                  date.getFullYear() +
                  "-" +
                  (date.getMonth() + 1) +
                  "-0" +
                  date.getDate();
              } else if (month > 10 && date1 > 10) {
                this.OrderDateTime =
                  date.getFullYear() +
                  "-" +
                  (date.getMonth() + 1) +
                  "-" +
                  date.getDate();
              }

              this.date2 = this.pro[i].ShipmentDateTime;
              var date = new Date(this.date2);
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

              this.products.push({
                Name: this.pro[i].Name,
                Quantity: this.pro[i].Quantity,
                FirstName: this.pro[i].FirstName,
                LastName: this.pro[i].LastName,
                NetAmount: this.pro[i].NetAmount,
                Discount: this.pro[i].Discount,
                TotalAmount: this.pro[i].TotalAmount,
                ShipmentDateTime: this.shipmentDateTime,
                OrderDateTime: this.OrderDateTime
              });

              i = i + 1;
            }
            this.searched = this.products;
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    searchOnTable() {
      this.searched = searchByName(this.products, this.search);
    }
  },
  beforeMount() {
    if(this.$session.has("subadmin-email") === true)
    {
      this.$router.push("*");
    }
    else if (this.$session.has("admin-email") === true) {
      this.userid = this.$route.params.userid;
      this.retriveDetails(this.userid);
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

