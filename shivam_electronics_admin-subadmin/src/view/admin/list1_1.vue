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
                md-sort="name"
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
                  <md-table-cell md-label="Product" md-sort-by="name">{{ item.name }}</md-table-cell>
                  <md-table-cell md-label="Quantity" md-sort-by="qty">{{ item.qty }}</md-table-cell>
                  <md-table-cell
                    md-label="Order-DateTime"
                    md-sort-by="order"
                  >{{ item.order.substr(0,10) }}</md-table-cell>
                  <md-table-cell md-label="Shipment-DateTime" md-sort-by="ship">{{ item.ship }}</md-table-cell>
                  <md-table-cell md-label="NetAmount" md-sort-by="net">{{ item.net }}</md-table-cell>
                  <md-table-cell md-label="Discount" md-sort-by="dis">{{ item.dis }}</md-table-cell>
                  <md-table-cell md-label="TotalAmount" md-sort-by="amt">{{ item.amt }}</md-table-cell>
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
    return items.filter(item => toLower(item.name).includes(toLower(term)));
  }

  return items;
};
export default {
  data() {
    return {
      mntno: 0,
      products: [],
      name: [],
      cindex: -1,
      cemp: null,
      error: "",
      no: 0,
      month: "",
      i: 0,
      j: 0,
      m: 0,
      cid: 0,
      cname: "",
      name: "",
      qty: "",
      order: "",
      ship: "",
      amt: 0,
      first: "",
      last: "",
      tot: "",
      dis: "",
      net: "",
      search: null,
      searched: [],
      date: "",
      year:""
    };
  },
  methods: {
    retriveProducts() {
      history
        .getAll()
        .then(res => {
          let response = res.data;
          this.no = res.data.length;

          while (this.i < this.no) {
            this.month = response[this.i].OrderDateTime;
            var date = new Date(this.month);
            var result = date.getMonth() + 1;
            var year = date.getFullYear();

            if (result == this.mntno && year == this.year) {
              this.cid = response[this.i].CategoryID;
              let pid = response[this.i].OrderID;
              const data = {
                cid: this.cid,
                pid: pid
              };
              history
                .getName(data)
                .then(res => {
                  let response = res.data;
                  (this.name = response[0].Name),
                    (this.qty = response[0].Quantity),
                    (this.order = response[0].OrderDateTime),
                    (this.net = response[0].NetAmount),
                    (this.dis = response[0].Discount),
                    (this.amt = response[0].TotalAmount);

                  this.date = response[0].OrderDateTime;
                  var date = new Date(this.date);
                  var month = date.getMonth() + 1;
                  var date1 = date.getDate();
                  if (month < 10 && date1 < 10) {
                    this.order =
                      date.getFullYear() +
                      "-0" +
                      (date.getMonth() + 1) +
                      "-0" +
                      date.getDate();
                  } else if (month < 10) {
                    this.order =
                      date.getFullYear() +
                      "-0" +
                      (date.getMonth() + 1) +
                      "-" +
                      date.getDate();
                  } else if (date1 < 10) {
                    this.order =
                      date.getFullYear() +
                      "-" +
                      (date.getMonth() + 1) +
                      "-0" +
                      date.getDate();
                  } else if (month > 10 && date1 > 10) {
                    this.order =
                      date.getFullYear() +
                      "-" +
                      (date.getMonth() + 1) +
                      "-" +
                      date.getDate();
                  }

                  this.date = response[0].ShipmentDateTime;
                  var date = new Date(this.date);
                  var month = date.getMonth() + 1;
                  var date1 = date.getDate();
                  if (month < 10 && date1 < 10) {
                    this.ship =
                      date.getFullYear() +
                      "-0" +
                      (date.getMonth() + 1) +
                      "-0" +
                      date.getDate();
                  } else if (month < 10) {
                    this.ship =
                      date.getFullYear() +
                      "-0" +
                      (date.getMonth() + 1) +
                      "-" +
                      date.getDate();
                  } else if (date1 < 10) {
                    this.ship =
                      date.getFullYear() +
                      "-" +
                      (date.getMonth() + 1) +
                      "-0" +
                      date.getDate();
                  } else if (month > 10 && date1 > 10) {
                    this.ship =
                      date.getFullYear() +
                      "-" +
                      (date.getMonth() + 1) +
                      "-" +
                      date.getDate();
                  }

                  this.products.push({
                    name: this.name,
                    qty: this.qty,
                    order: this.order,
                    ship: this.ship,
                    amt: this.amt,
                    net: this.net,
                    tot: this.tot,
                    dis: this.dis
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            }
            this.i = this.i + 1;
          }
          this.searched = this.products;
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
       this.retriveProducts();
      this.mntno = this.$route.params.mntno;
      this.year = this.$route.params.year;
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

