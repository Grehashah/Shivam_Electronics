<template>
  <div>
    <subAdminHead></subAdminHead>

    <section class="content">
      <div class="container-fluid">
        <!-- No Header Card -->
        <div class="block-header">
          <h2>Products</h2>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12" :key="name" v-for="name in products">
            <div class="card">
              <div class="body bg-blue-grey">
               <router-link
                  :to="'/subadmin/products/productlist/' + name.cid"
                  style="color : white;"
                >{{ name.cname }}</router-link>
              </div>
            </div>
          </div>
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
      cname: "",
      cid: 0,
      j: 0,
      k: 0,
      fanflag: "",
      tvflag: 0,
      flflag: 0,
      friflag: 0,
      ironflag: 0,
      mixflag: 0,
      mobflag: 0,
      ovenflag: 0,
      spflag: 0,
      wmflag: 0,
      wpflag: 0
    };
  },
  methods: {
    retriveDetails() {
      dashboard
        .getCategory()
        .then(res => {
          this.productnames = res.data;
          this.no = res.data.length;
          while (this.i < this.no) {
            this.cname = this.productnames[this.i].Name;
            this.cid = this.productnames[this.i].CategoryID;
            if (this.cname == "fan") {
              let name = this.cname;
              let cid = this.cid;
              dashboard
                .getFan()
                .then(res => {
                  let response = res.data;
                  this.no = res.data.length;

                  while (this.j < this.no) {
                    this.fanqty = response[this.j].Quantity;
                    if (this.fanqty <= 5) {
                      this.products.push({ cname: name, cid: cid });
                      this.fanflag = 1;
                    }
                    this.j = this.j + 1;

                    if (this.fanflag == 1) {
                      break;
                    }
                  }
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.cname == "tv") {
              let name = this.cname;
              let cid = this.cid;
              dashboard
                .getTV()
                .then(res => {
                  let response = res.data;
                  this.no = res.data.length;
                  this.j = 0;
                  while (this.j < this.no) {
                    this.tvqty = response[this.j].Quantity;
                    if (this.tvqty <= 5) {
                      this.products.push({ cname: name, cid: cid });
                      this.tvflag = 1;
                    }
                    this.j = this.j + 1;

                    if (this.tvflag == 1) {
                      break;
                    }
                  }
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.cname == "flourmil") {
              let name = this.cname;
              let cid = this.cid;
              dashboard
                .getFlourmil()
                .then(res => {
                  let response = res.data;
                  this.no = res.data.length;
                  this.j = 0;
                  while (this.j < this.no) {
                    this.flqty = response[this.j].Quantity;
                    if (this.flqty <= 5) {
                      this.products.push({ cname: name, cid: cid });
                      this.flflag = 1;
                    }
                    this.j = this.j + 1;

                    if (this.flflag == 1) {
                      break;
                    }
                  }
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.cname == "fridge") {
              let name = this.cname;
              let cid = this.cid;
              dashboard
                .getFridge()
                .then(res => {
                  let response = res.data;
                  this.no = res.data.length;
                  this.j = 0;
                  while (this.j < this.no) {
                    this.friqty = response[this.j].Quantity;
                    if (this.friqty <= 5) {
                      this.products.push({ cname: name, cid: cid });
                      this.friflag = 1;
                    }
                    this.j = this.j + 1;

                    if (this.friflag == 1) {
                      break;
                    }
                  }
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.cname == "iron") {
              let name = this.cname;
              let cid = this.cid;
              dashboard
                .getIron()
                .then(res => {
                  let response = res.data;
                  this.no = res.data.length;
                  this.j = 0;
                  while (this.j < this.no) {
                    this.ironqty = response[this.j].Quantity;
                    if (this.ironqty <= 5) {
                      this.products.push({ cname: name, cid: cid });
                      this.ironflag = 1;
                    }
                    this.j = this.j + 1;

                    if (this.ironflag == 1) {
                      break;
                    }
                  }
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.cname == "mixer") {
              let name = this.cname;
              let cid = this.cid;
              dashboard
                .getMixer()
                .then(res => {
                  let response = res.data;
                  this.no = res.data.length;
                  this.j = 0;
                  while (this.j < this.no) {
                    this.mixqty = response[this.j].Quantity;
                    if (this.mixqty <= 5) {
                      this.products.push({ cname: name, cid: cid });
                      this.mixflag = 1;
                    }
                    this.j = this.j + 1;

                    if (this.mixflag == 1) {
                      break;
                    }
                  }
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.cname == "mobile") {
              let name = this.cname;
              let cid = this.cid;
              dashboard
                .getMobile()
                .then(res => {
                  let response = res.data;
                  this.no = res.data.length;
                  this.j = 0;
                  while (this.j < this.no) {
                    this.mobqty = response[this.j].Quantity;
                    if (this.mobqty <= 5) {
                      this.products.push({ cname: name, cid: cid });
                      this.mobflag = 1;
                    }
                    this.j = this.j + 1;

                    if (this.mobflag == 1) {
                      break;
                    }
                  }
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.cname == "oven") {
              let name = this.cname;
              let cid = this.cid;
              dashboard
                .getOven()
                .then(res => {
                  let response = res.data;
                  this.no = res.data.length;
                  this.j = 0;
                  while (this.j < this.no) {
                    this.ovenqty = response[this.j].Quantity;
                    if (this.ovenqty <= 5) {
                      this.products.push({ cname: name, cid: cid });
                      this.ovenflag = 1;
                    }
                    this.j = this.j + 1;

                    if (this.ovenflag == 1) {
                      break;
                    }
                  }
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.cname == "speaker") {
              let name = this.cname;
              let cid = this.cid;
              dashboard
                .getSpeaker()
                .then(res => {
                  let response = res.data;
                  this.no = res.data.length;
                  this.j = 0;
                  while (this.j < this.no) {
                    this.spqty = response[this.j].Quantity;
                    if (this.spqty <= 5) {
                      this.products.push({ cname: name, cid: cid });
                      this.spflag = 1;
                    }
                    this.j = this.j + 1;

                    if (this.spflag == 1) {
                      break;
                    }
                  }
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.cname == "washingmachine") {
              let name = this.cname;
              let cid = this.cid;
              dashboard
                .getWM()
                .then(res => {
                  let response = res.data;
                  this.no = res.data.length;
                  this.j = 0;
                  while (this.j < this.no) {
                    this.wmqty = response[this.j].Quantity;
                    if (this.wmqty <= 5) {
                      this.products.push({ cname: name, cid: cid });
                      this.wmflag = 1;
                    }
                    this.j = this.j + 1;

                    if (this.wmflag == 1) {
                      break;
                    }
                  }
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.cname == "waterpurifier") {
              let name = this.cname;
              let cid = this.cid;
              dashboard
                .getWP()
                .then(res => {
                  let response = res.data;
                  this.no = res.data.length;
                  this.j = 0;
                  while (this.j < this.no) {
                    this.wpqty = response[this.j].Quantity;
                    if (this.wpqty <= 5) {
                      this.products.push({ cname: name, cid: cid });
                      this.wpflag = 1;
                    }
                    this.j = this.j + 1;

                    if (this.wpflag == 1) {
                      break;
                    }
                  }
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
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
        this.retriveDetails();
    } else {
      this.$router.push("/subadmin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

