<template>
  <div>
    <subAdminHead></subAdminHead>

    <section class="content">
      <div class="container-fluid">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="header">PRODUCT DETAILS</div>
            <div class="body table-responsive">
              <md-table
                v-model="searched"
                md-sort="bname"
                md-sort-order="asc"
                md-card
                md-fixed-header
                class="table table-hover"
              >
                <md-table-toolbar>
                  <md-field md-clearable class="md-toolbar-section-end">
                    <md-input
                      placeholder="Search by BrandName ..."
                      v-model="search"
                      @input="searchOnTable"
                    />
                  </md-field>
                </md-table-toolbar>

                <md-table-empty-state md-label="No Product found" md-description="No Product found"></md-table-empty-state>
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="BrandName" md-sort-by="bname">{{ item.bname }}</md-table-cell>
                  <md-table-cell md-label="Model" md-sort-by="model">{{ item.model }}</md-table-cell>
                  <md-table-cell md-label="Colour" md-sort-by="col">{{ item.col }}</md-table-cell>
                  <md-table-cell md-label="Price" md-sort-by="price">{{ item.price }}</md-table-cell>
                  <md-table-cell md-label="Quantity" md-sort-by="qty">{{ item.qty }}</md-table-cell>
                  <md-table-cell md-label="Image" md-sort-by="amt">
                    <img
                      :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + name + '/' + img"
                      style="height: 180px; width: 180px;"
                      alt="Product Image"
                    />
                  </md-table-cell>
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
//Scripts

import dashboard from "../../services/subadmin/dashboard_service";
const toLower = text => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter(item => toLower(item.bname).includes(toLower(term)));
  }

  return items;
};
export default {
  data() {
    return {
      cindex: -1,
      cemp: null,
      error: "",
      productnames: [],
      no: 0,
      i: 0,
      fanqty: 0,
      tvqty: 0,
      flqty: 0,
      friqty: 0,
      ironqty: 0,
      mixqty: 0,
      mobqty: 0,
      ovenqty: 0,
      spqty: 0,
      wmqty: 0,
      wpqty: 0,
      products: [],
      bname: "",
      col: "",
      price: "",
      qty: "",
      j: 0,
      k: 0,
      search: null,
      searched: [],
      cid: 0,
      model: "",
      img: "",
      name: ""
    };
  },
  methods: {
    searchOnTable() {
      this.searched = searchByName(this.products, this.search);
    },
    retriveDetails(id) {
      const data = {
        cid: id
      };
      dashboard
        .getCategoryDetail(data)
        .then(res => {
          let response = res.data;
          this.name = response[0].Name;
          if (this.name == "fan") {
            dashboard
              .getFanDetail()
              .then(res => {
                let response = res.data;
                this.no = res.data.length;
                while (this.j < this.no) {
                  this.fanqty = response[this.j].Quantity;
                  if (this.fanqty <= 5) {
                    this.bname = response[this.j].Name;
                    this.col = response[this.j].Color;
                    this.price = response[this.j].Price;
                    this.qty = response[this.j].Quantity;
                    this.img = response[this.j].Image;
                    this.model = response[this.j].Model;
                    this.products.push({
                      bname: this.bname,
                      col: this.col,
                      price: this.price,
                      qty: this.qty,
                      model: this.model,
                      img: this.img
                    });
                  }
                  this.j = this.j + 1;
                }
                this.searched = this.products;
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (this.name == "tv") {
            dashboard
              .getTVDetail()
              .then(res => {
                let response = res.data;
                this.no = res.data.length;
                this.j = 0;
                while (this.j < this.no) {
                  this.tvqty = response[this.j].Quantity;
                  if (this.tvqty <= 5) {
                    this.bname = response[this.j].Name;
                    this.col = response[this.j].Color;
                    this.price = response[this.j].Price;
                    this.qty = response[this.j].Quantity;
                    this.img = response[this.j].Image;
                    this.model = response[this.j].Model;
                    this.products.push({
                      bname: this.bname,
                      col: this.col,
                      price: this.price,
                      qty: this.qty,
                      model: this.model,
                      img: this.img
                    });
                  }
                  this.j = this.j + 1;
                }
                this.searched = this.products;
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (this.name == "flourmil") {
            dashboard
              .getFlourmilDetail()
              .then(res => {
                let response = res.data;
                this.no = res.data.length;
                this.j = 0;
                while (this.j < this.no) {
                  this.flqty = response[this.j].Quantity;
                  if (this.flqty <= 5) {
                    this.bname = response[this.j].Name;
                    this.col = response[this.j].Color;
                    this.price = response[this.j].Price;
                    this.qty = response[this.j].Quantity;
                    this.img = response[this.j].Image;
                    this.model = response[this.j].Model;
                    this.products.push({
                      bname: this.bname,
                      col: this.col,
                      price: this.price,
                      qty: this.qty,
                      model: this.model,
                      img: this.img
                    });
                  }
                  this.j = this.j + 1;
                }
                this.searched = this.products;
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (this.name == "fridge") {
            dashboard
              .getFridgeDetail()
              .then(res => {
                let response = res.data;
                this.no = res.data.length;
                this.j = 0;
                while (this.j < this.no) {
                  this.friqty = response[this.j].Quantity;
                  if (this.friqty <= 5) {
                    this.bname = response[this.j].Name;
                    this.col = response[this.j].Color;
                    this.price = response[this.j].Price;
                    this.qty = response[this.j].Quantity;
                    this.img = response[this.j].Image;
                    this.model = response[this.j].Model;
                    this.products.push({
                      bname: this.bname,
                      col: this.col,
                      price: this.price,
                      qty: this.qty,
                      model: this.model,
                      img: this.img
                    });
                  }
                  this.j = this.j + 1;
                }
                this.searched = this.products;
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (this.name == "iron") {
            dashboard
              .getIronDetail()
              .then(res => {
                let response = res.data;
                this.no = res.data.length;
                this.j = 0;
                while (this.j < this.no) {
                  this.ironqty = response[this.j].Quantity;
                  if (this.ironqty <= 5) {
                    this.bname = response[this.j].Name;
                    this.col = response[this.j].Color;
                    this.price = response[this.j].Price;
                    this.qty = response[this.j].Quantity;
                    this.img = response[this.j].Image;
                    this.model = response[this.j].Model;
                    this.products.push({
                      bname: this.bname,
                      col: this.col,
                      price: this.price,
                      qty: this.qty,
                      model: this.model,
                      img: this.img
                    });
                  }
                  this.j = this.j + 1;
                }
                this.searched = this.products;
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (this.name == "mixer") {
            dashboard
              .getMixerDetail()
              .then(res => {
                let response = res.data;
                this.no = res.data.length;
                this.j = 0;
                while (this.j < this.no) {
                  this.mixqty = response[this.j].Quantity;
                  if (this.mixqty <= 5) {
                    this.bname = response[this.j].Name;
                    this.col = response[this.j].Color;
                    this.price = response[this.j].Price;
                    this.qty = response[this.j].Quantity;
                    this.img = response[this.j].Image;
                    this.model = response[this.j].Model;
                    this.products.push({
                      bname: this.bname,
                      col: this.col,
                      price: this.price,
                      qty: this.qty,
                      model: this.model,
                      img: this.img
                    });
                  }
                  this.j = this.j + 1;
                }
                this.searched = this.products;
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (this.name == "mobile") {
            dashboard
              .getMobileDetail()
              .then(res => {
                let response = res.data;
                this.no = res.data.length;
                this.j = 0;
                while (this.j < this.no) {
                  this.mobqty = response[this.j].Quantity;
                  if (this.mobqty <= 5) {
                    this.bname = response[this.j].Name;
                    this.col = response[this.j].Color;
                    this.price = response[this.j].Price;
                    this.qty = response[this.j].Quantity;
                    this.img = response[this.j].Image;
                    this.model = response[this.j].Model;
                    this.products.push({
                      bname: this.bname,
                      col: this.col,
                      price: this.price,
                      qty: this.qty,
                      model: this.model,
                      img: this.img
                    });
                  }
                  this.j = this.j + 1;
                }
                this.searched = this.products;
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (this.name == "oven") {
            dashboard
              .getOvenDetail()
              .then(res => {
                let response = res.data;
                this.no = res.data.length;
                this.j = 0;
                while (this.j < this.no) {
                  this.ovenqty = response[this.j].Quantity;
                  if (this.ovenqty <= 5) {
                    this.bname = response[this.j].Name;
                    this.col = response[this.j].Color;
                    this.price = response[this.j].Price;
                    this.qty = response[this.j].Quantity;
                    this.img = response[this.j].Image;
                    this.model = response[this.j].Model;
                    this.products.push({
                      bname: this.bname,
                      col: this.col,
                      price: this.price,
                      qty: this.qty,
                      model: this.model,
                      img: this.img
                    });
                  }
                  this.j = this.j + 1;
                }
                this.searched = this.products;
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (this.name == "speaker") {
            dashboard
              .getSpeakerDetail()
              .then(res => {
                let response = res.data;
                this.no = res.data.length;
                this.j = 0;
                while (this.j < this.no) {
                  this.spqty = response[this.j].Quantity;
                  if (this.spqty <= 5) {
                    this.bname = response[this.j].Name;
                    this.col = response[this.j].Color;
                    this.price = response[this.j].Price;
                    this.qty = response[this.j].Quantity;
                    this.img = response[this.j].Image;
                    this.model = response[this.j].Model;
                    this.products.push({
                      bname: this.bname,
                      col: this.col,
                      price: this.price,
                      qty: this.qty,
                      model: this.model,
                      img: this.img
                    });
                  }
                  this.j = this.j + 1;
                }
                this.searched = this.products;
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (this.name == "washingmachine") {
            dashboard
              .getWMDetail()
              .then(res => {
                let response = res.data;
                this.no = res.data.length;
                this.j = 0;
                while (this.j < this.no) {
                  this.wmqty = response[this.j].Quantity;
                  if (this.wmqty <= 5) {
                    this.bname = response[this.j].Name;
                    this.col = response[this.j].Color;
                    this.price = response[this.j].Price;
                    this.qty = response[this.j].Quantity;
                    this.img = response[this.j].Image;
                    this.model = response[this.j].Model;
                    this.products.push({
                      bname: this.bname,
                      col: this.col,
                      price: this.price,
                      qty: this.qty,
                      model: this.model,
                      img: this.img
                    });
                  }
                  this.j = this.j + 1;
                }
                this.searched = this.products;
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else if (this.name == "waterpurifier") {
            dashboard
              .getWPDetail()
              .then(res => {
                let response = res.data;
                this.no = res.data.length;
                this.j = 0;
                while (this.j < this.no) {
                  this.wpqty = response[this.j].Quantity;
                  if (this.wpqty <= 5) {
                    this.bname = response[this.j].Name;
                    this.col = response[this.j].Color;
                    this.price = response[this.j].Price;
                    this.qty = response[this.j].Quantity;
                    this.img = response[this.j].Image;
                    this.model = response[this.j].Model;
                    this.products.push({
                      bname: this.bname,
                      col: this.col,
                      price: this.price,
                      qty: this.qty,
                      model: this.model,
                      img: this.img
                    });
                  }
                  this.j = this.j + 1;
                }
                this.searched = this.products;
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
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
        this.cid = this.$route.params.cid;
      this.retriveDetails(this.cid);
    } else {
      this.$router.push("/subadmin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

