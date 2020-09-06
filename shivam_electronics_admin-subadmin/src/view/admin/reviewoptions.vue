<template>
  <div>
    <adminHead></adminHead>
    <section class="content">
      <div class="container-fluid">
        <!-- No Header Card -->
        <div class="block-header">
          <h1>Reviews</h1>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <a href="/admin/reviewoptions/review">
              <div class="card">
                <div class="body bg-blue-grey">All Reviews</div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <a href="/admin/reviewoptions/reportedreview">
              <div class="card">
                <div class="body bg-blue-grey">Reported Reviews</div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <a href="/admin/reviewoptions/blockedreview">
              <div class="card">
                <div class="body bg-blue-grey">Blocked Reviews</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//Scripts

import pro1 from "../../services/admin/profile_service";
import { Eventbus } from "../../main";

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
        

