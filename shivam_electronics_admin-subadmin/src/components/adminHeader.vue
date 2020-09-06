<template>
  <div class="theme-red">
    <div class="overlay"></div>

    <!-- Top Bar -->
    <nav class="navbar">
      <div class="container-fluid">
        <div class="navbar-header">
          <a href="javascript:void(0);" class="bars"></a>
          <a class="navbar-brand" href="/admin" style="text-align: center;">
            Shivam
            <b>Electronics</b>
          </a>
        </div>
      </div>
    </nav>
    <!-- #Top Bar -->
    <section>
      <!-- Left Sidebar -->
      <aside id="leftsidebar" class="sidebar">
        <!-- User Info -->
        <div class="user-info">
          <div class="info-container">
            <div
              style="margin-top : 50px;"
              class="name"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >{{ fname + " " + lname }}</div>
            <div class="email">{{ email }}</div>
            <div class="btn-group user-helper-dropdown" style="margin-bottom : 5px;">
              <i
                class="material-icons"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >keyboard_arrow_down</i>
              <ul class="dropdown-menu pull-right">
                <li>
                  <a href="/" @click="logout()">
                    <i class="material-icons">input</i>Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- #User Info -->
        <!-- Menu -->
        <div class="menu">
          <ul class="list">
            <li class="header">MAIN NAVIGATION</li>

            <li>
              <a href="/admin">
                <i class="material-icons">home</i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/admin/profile">
                <i class="material-icons">account_circle</i>
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <a href="/admin/manageEmployees">
                <i class="material-icons">supervisor_account</i>
                <span>Manage Employees</span>
              </a>
            </li>
            <li>
              <a href="/admin/manageProducts">
                <i class="material-icons">layers</i>
                <span>Manage Products</span>
              </a>
            </li>

            <li>
              <a href="/admin/manageBrands">
                <i class="material-icons">layers</i>
                <span>Manage Brands</span>
              </a>
            </li>

            <li>
              <a href="/admin/orders">
                <i class="material-icons">assignment</i>
                <span>Manage Orders</span>
              </a>
            </li>
            <li>
              <a href="/admin/reviewoptions">
                <i class="material-icons">supervisor_account</i>
                <span>Manage Reviews</span>
              </a>
            </li>
            <li>
              <a href="/admin/manageUsers">
                <i class="material-icons">supervisor_account</i>
                <span>Manage Users</span>
              </a>
            </li>
            <li>
              <a href="/admin/history">
                <i class="material-icons">history</i>
                <span>View History</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- #Menu -->
        <!-- Footer -->
        <div class="legal">
          <div class="copyright">
            &copy; 2020 - 2021
            <a href="/">
              Shivam
              <b>Electronics</b>
            </a>
          </div>
          <div class="version">
            <b>Version:</b> 1.0.0
          </div>
        </div>
        <!-- #Footer -->
      </aside>
    </section>
  </div>
</template>

<script>
import service from "../services/admin/dashboard_service";

export default {
  data() {
    return {
      email: "",
      fname: "",
      lname: ""
    };
  },
  methods: {
    logout() {
      this.$session.destroy();
    }
  },
  mounted() {
    if (localStorage.getItem('reloaded')) {
        localStorage.removeItem('reloaded');
    } else {
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
    if (this.$session.exists() === true) {
      const data = {
        email: this.$session.get("admin-email")
      };
      service
        .getUserDetails(data)
        .then(res => {
          let response = res.data;

          this.fname = response[0].FirstName;
          this.lname = response[0].LastName;
          this.email = this.$session.get("admin-email");
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    } else {
      this.email = "";
      this.fname = "";
      this.lname = "";
    }
  }
};
</script>

<style scoped>
</style>
