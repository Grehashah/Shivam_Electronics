<template>
  <div>
    <adminHead></adminHead>
    <section class="content">
      <div class="container-fluid">
        <div class="block-header">
        </div>
        <!-- Basic Example -->

        <div class="row clearfix">
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <router-link :to="'/admin/reviewoptions/review/reviewlikedislike/votedetails/' + rid">
              <div class="card">
                <div class="header bg-green">
                  <h2>Likes</h2>
                </div>
                <div class="body" align="center">
                  <img
                    src="../../assets/images/like.png"
                    style="height: 220px; width: 200px;"
                    alt="profile pic"
                  />
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <router-link :to="'/admin/reviewoptions/review/reviewlikedislike/unvotedetails/' + rid">
              <div class="card">
                <div class="header bg-red">
                  <h2>Dislikes</h2>
                </div>
                <div class="body" align="center">
                  <img
                    src="../../assets/images/dislike.png"
                    style="height: 220px; width: 200px;"
                    alt="profile pic"
                  />
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <!-- #END# Colored Card - With Loading -->
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
    return {
      rid: ""
    };
  },
  methods: {},

  beforeMount() {
     if(this.$session.has("subadmin-email") === true)
    {
      this.$router.push("*");
    }
    else if (this.$session.has("admin-email") === true) {
       this.rid = this.$route.params.rid;
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

