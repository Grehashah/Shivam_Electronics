<template>
  <div>
    <adminHead></adminHead>

    <section class="content">
      <div class="container-fluid">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="header">{{ "User List" }}&nbsp;&nbsp;&nbsp;</div>
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

                <md-table-empty-state md-label="No Users found" md-description="No Users found"></md-table-empty-state>
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="First Name" md-sort-by="FirstName">{{ item.FirstName }}</md-table-cell>
                  <md-table-cell md-label="Last Name" md-sort-by="LastName">{{ item.LastName }}</md-table-cell>
                  <md-table-cell md-label="Email" md-sort-by="Email">{{ item.Email }}</md-table-cell>
                  <md-table-cell md-label="Status" v-if="item.Status === 0">
                    <span class="label label-success">{{ "UnBlocked" }}</span>
                  </md-table-cell>
                  <md-table-cell md-label="Status" v-if="item.Status === 1">
                    <span class="label label-danger">{{ 'Blocked' }}</span>
                  </md-table-cell>
                  <md-table-cell md-label="Action" v-if="item.Status === 0">
                    <button class="btn btn-danger waves-effect" @click="block(item.UserID)">Block</button>
                    <button class="btn btn-success waves-effect" disabled>UnBlock</button>
                    <br/>
                    <router-link
                      class="btn btn-info waves-effect"
                      :to="'/admin/manageUsers/userDetails/' + item.UserID"
                    >View Details</router-link>
                  </md-table-cell>

                  <md-table-cell md-label="Action" v-if="item.Status === 1">
                    <button class="btn btn-danger waves-effect" disabled>Block</button>
                    <button
                      class="btn btn-success waves-effect"
                      @click="unBlock(item.UserID)"
                    >Unblock</button>
                    <br/>
                    <router-link
                      class="btn btn-info waves-effect"
                      :to="'/admin/manageUsers/userDetails/' + item.UserID"
                    >View Details</router-link>
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

import manage from "../../services/admin/manageUser_service";

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
      users: [],
      cindex: -1,
      cemp: null,
      error: "",
      search: null,
      searched: [],
      users1: [],
      i: 0,
      no: 0,
      fname: "",
      lname: "",
      email: "",
      date: "",
      usrid: "",
      status: "",
      status2: ""
    };
  },
  methods: {
    unBlock(id) {
      this.$router.push("/admin/unBlockUser/" + id);
    },
    block(id) {
      this.$router.push("/admin/deleteUser/" + id);
    },
    retriveUsers() {
      manage
        .getAll()
        .then(res => {
          this.users = res.data;
          this.searched = this.users;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    searchOnTable() {
      this.searched = searchByName(this.users, this.search);
    }
  },
  created() {
    if(this.$session.has("subadmin-email") === true)
    {
      this.$router.push("*");
    }
    else if (this.$session.has("admin-email") === true) {
       this.retriveUsers();
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

