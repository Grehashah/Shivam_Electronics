<template>
  <div>
    <subAdminHead></subAdminHead>

    <section class="content">
      <div class="container-fluid">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="header">
              {{ "Brand List" }}&nbsp;&nbsp;&nbsp;
              <button
                type="button"
                class="btn btn-primary waves-effect"
                data-toggle="modal"
                data-target="#defaultModal"
              >Add Brand</button>
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
                      placeholder="Search by Brand Name..."
                      v-model="search"
                      @input="searchOnTable"
                    />
                  </md-field>
                </md-table-toolbar>

                <md-table-empty-state md-label="No Brands found" md-description="No Brands found"></md-table-empty-state>
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Name" md-sort-by="Name">{{ item.Name }}</md-table-cell>
                  <md-table-cell md-label="Status" v-if="item.Status === 0">
                    <span class="label label-success">{{ "UnBlocked" }}</span>
                  </md-table-cell>
                  <md-table-cell md-label="Status" v-if="item.Status === 1">
                    <span class="label label-danger">{{ 'Blocked' }}</span>
                  </md-table-cell>
                  <md-table-cell md-label="Action">
                    <router-link
                      class="btn btn-info waves-effect"
                      :to="'/subadmin/updateBrand/' + item.BrandID"
                    >Edit</router-link>
                    <router-link
                      v-if="item.Status === 0"
                      class="btn btn-danger waves-effect"
                      :to="'/subadmin/deleteBrand/' + item.BrandID"
                    >Block</router-link>
                    <router-link
                      v-if="item.Status === 1"
                      disabled
                      class="btn btn-danger waves-effect"
                      :to="'/subadmin/deleteBrand/' + item.BrandID"
                    >Block</router-link>
                    <router-link
                      v-if="item.Status === 1"
                      class="btn btn-success waves-effect"
                      :to="'/subadmin/unblockBrand/' + item.BrandID"
                    >Unblock</router-link>
                    <router-link
                      v-if="item.Status === 0"
                      disabled
                      class="btn btn-success waves-effect"
                      :to="'/subadmin/unblockBrand/' + item.BrandID"
                    >Unblock</router-link>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </div>
          <div class="modal fade" id="defaultModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
              <form @submit.prevent="addbrand()">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title" id="defaultModalLabel">Add Brand</h4>
                  </div>
                  <div class="modal-body">
                    <div class="form-group">
                      <div class="form-line">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Add Brand Name"
                          v-model="bname"
                          required
                        />
                      </div>
                    </div>
                    <p style="color: red;" v-if="error !== ''">{{ error }}</p>
                    <p style="color: green;" v-if="error1 !== ''">{{ error1 }}</p>
                  </div>
                  <div class="modal-footer">
                    <button type="submit" class="btn btn-success waves-effect">Add</button>
                    <button
                      type="button"
                      class="btn btn-danger waves-effect"
                      data-dismiss="modal"
                    >CLOSE</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//Scripts

import manage from "../../services/admin/manageBrands_service";

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
      brands: [],
      cindex: -1,
      cemp: null,
      error: "",
      error1: "",
      search: null,
      searched: [],
      bname: ""
    };
  },
  methods: {
    retriveBrands() {
      manage
        .getAll()
        .then(res => {
          this.brands = res.data;
          this.searched = this.brands;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },

    addbrand() {
      if (this.bname.trim() == "") {
        this.error = "Please enter brandName";
      } else {
        const data = {
          Name: this.bname.trim()
        };
        manage
          .addBrand(data)
          .then(res => {
            let response = res.data;

            if (response.result === 1) {
              this.error = "";
              this.$router.go();
            } else {
              this.error1 = "";
              this.error = "This Brand is already added!!!";
            }
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    searchOnTable() {
      this.searched = searchByName(this.brands, this.search);
    }
  },
  created() {
     if (this.$session.has("admin-email") === true) {
      this.$router.push("*");
    } else if (this.$session.has("subadmin-email") === true) {
        this.retriveBrands();
    } else {
      this.$router.push("/subadmin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

