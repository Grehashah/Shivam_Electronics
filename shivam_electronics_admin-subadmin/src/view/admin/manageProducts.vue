<template>
  <div>
    <adminHead></adminHead>

    <section class="content">
      <div class="container-fluid">
        <div class="row clearfix">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <a href="/admin/manageProducts/fan">
                <div class="card">
                  <div class="body bg-blue-grey">Fan</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <a href="/admin/manageProducts/fridge">
                <div class="card">
                  <div class="body bg-blue-grey">Fridge</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <a href="/admin/manageProducts/tv">
                <div class="card">
                  <div class="body bg-blue-grey">TV</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <a href="/admin/manageProducts/flourmil">
                <div class="card">
                  <div class="body bg-blue-grey">Flourmil</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <a href="/admin/manageProducts/washingmachine">
                <div class="card">
                  <div class="body bg-blue-grey">Washing Machine</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <a href="/admin/manageProducts/waterpurifier">
                <div class="card">
                  <div class="body bg-blue-grey">Water purifier</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <a href="/admin/manageProducts/iron">
                <div class="card">
                  <div class="body bg-blue-grey">Iron</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <a href="/admin/manageProducts/speaker">
                <div class="card">
                  <div class="body bg-blue-grey">Speaker</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <a href="/admin/manageProducts/mixer">
                <div class="card">
                  <div class="body bg-blue-grey">Mixer</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <a href="/admin/manageProducts/oven">
                <div class="card">
                  <div class="body bg-blue-grey">Oven</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <a href="/admin/manageProducts/mobile">
                <div class="card">
                  <div class="body bg-blue-grey">Mobile</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  beforeMount() {
    if(this.$session.has("subadmin-email") === true)
    {
      this.$router.push("*");
    }
    else if (this.$session.has("admin-email") === true) {
      this.retriveDetails();
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    
<style scoped>
</style>
        

