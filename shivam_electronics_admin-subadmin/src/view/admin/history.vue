<template>
  <div>
    <adminHead></adminHead>
    <section class="content">
      <div class="container-fluid">
        <!-- No Header Card -->
        <div class="block-header">
          <h1>History</h1>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <a href="/admin/history/monthlydetails">
              <div class="card">
                <div class="body bg-blue-grey">Monthly Details</div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <a href="/admin/history/userdetailshistory">
              <div class="card">
                <div class="body bg-blue-grey">Customer-Wise Details</div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <a href="/admin/history/list3">
              <div class="card">
                <div class="body bg-blue-grey">All Details</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import pro1 from "../../services/admin/profile_service";

export default {
  data() {
    return {};
  },
  methods: {},

  beforeMount() {
     if(this.$session.has("subadmin-email") === true)
    {
      this.$router.push("*");
    }
    else if (this.$session.has("admin-email") === true) {
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

