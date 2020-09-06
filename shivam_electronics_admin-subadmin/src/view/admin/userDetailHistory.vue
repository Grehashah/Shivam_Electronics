<template>
  <div>
    <adminHead></adminHead>

    <section class="content">
      <div class="container-fluid">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="header">
              <h2>Customer List</h2>
            </div>
            <div class="body table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>ContactNo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user,index) in users" :key="index">
                    <td>{{ user.FirstName }} {{ user.LastName }}</td>
                    <td>{{ user.ContactNo }}</td>
                    <router-link
                      class="btn btn-info waves-effect"
                      :to="'/admin/history/userdetailshistory/list2/' + user.UserID"
                    >View Details</router-link>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//Scripts

import history from "../../services/admin/monthlyHistoryList_service";

export default {
  data() {
    return {
      error: "",
      userid: "",
      users: [],
      i: 0
    };
  },
  methods: {
    retrieveDetails() {
      history
        .getUName()
        .then(res => {
          this.users = res.data;
        })
        .catch(err => {
          this.error = "Something went wrong !!";
        });
    }
  },
  beforeMount() {
    if(this.$session.has("subadmin-email") === true)
    {
      this.$router.push("*");
    }
    else if (this.$session.has("admin-email") === true) {
      this.retrieveDetails();
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

