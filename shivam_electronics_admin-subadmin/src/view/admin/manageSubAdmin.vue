<template>
  <div>
    <adminHead></adminHead>

    <section class="content">
      <div class="container-fluid">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="header">
              {{ "Employee List" }}&nbsp;&nbsp;&nbsp;
              <button
                type="button"
                class="btn btn-primary waves-effect"
                @click="addemp"
              >Add Employee</button>
            </div>
            <div class="body table-responsive">
              <md-table
                v-model="searched"
                md-sort="FirstName"
                md-sort-order="asc"
                md-card
                md-fixed-header
                class="table table-hover"
              >
                <md-table-toolbar>
                  <md-field md-clearable class="md-toolbar-section-end">
                    <md-input
                      placeholder="Search by FirstName..."
                      v-model="search"
                      @input="searchOnTable"
                    />
                  </md-field>
                </md-table-toolbar>

                <md-table-empty-state
                  md-label="No employees found"
                  md-description="No employees found"
                ></md-table-empty-state>
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="First Name" md-sort-by="FirstName">{{ item.FirstName }}</md-table-cell>
                  <md-table-cell md-label="Last Name" md-sort-by="LastName">{{ item.LastName }}</md-table-cell>
                  <md-table-cell md-label="Email" md-sort-by="Email">{{ item.Email }}</md-table-cell>
                  <md-table-cell md-label="Contact no" md-sort-by="ContactNo">{{ item.ContactNo }}</md-table-cell>
                  <md-table-cell md-label="Status" v-if="item.Status === 0">
                    <span class="label label-success">{{ "unblocked" }}</span>
                  </md-table-cell>
                  <md-table-cell md-label="Status" v-if="item.Status === 1">
                    <span class="label label-danger">{{ 'Blocked' }}</span>
                  </md-table-cell>
                  <md-table-cell md-label="Action">
                    <router-link
                      class="btn btn-info waves-effect"
                      :to="'/admin/updateEmployee/' + item.AdminID"
                    >Edit</router-link>
                    <router-link
                      class="btn btn-danger waves-effect"
                      :to="'/admin/deleteEmployee/' + item.AdminID"
                    >Block</router-link>
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

import manage from "../../services/admin/manageSubAdmin";

const toLower = text => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter(item =>
      toLower(item.FirstName).includes(toLower(term))
    );
  }

  return items;
};

export default {
  data() {
    return {
      emps: [],
      cindex: -1,
      cemp: null,
      error: "",
      search: null,
      searched: []
    };
  },
  methods: {
    retriveEmps() {
      manage
        .getAll()
        .then(res => {
          this.emps = res.data;
          this.searched = this.emps;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },

    addemp() {
      this.$router.push("/admin/addEmployee");
    },
    searchOnTable() {
      this.searched = searchByName(this.emps, this.search);
    }
  },
  created() {
     if(this.$session.has("subadmin-email") === true)
    {
      this.$router.push("*");
    }
    else if (this.$session.has("admin-email") === true) {
      this.retriveEmps();
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

