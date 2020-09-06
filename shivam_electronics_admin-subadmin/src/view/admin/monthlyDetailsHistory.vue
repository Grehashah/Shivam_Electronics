<template>
  <div>
    <adminHead></adminHead>

    <section class="content">
      <div class="container-fluid">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="header">
              <h2>Monthly Details</h2>
            </div>
            <br />
            <br />
            <div class="dropdown">
              <button class="dropbtn">Please Select</button>
              <div class="dropdown-content">
                <a href="/admin/history/monthlydetails">All Years</a>
                <a href="/admin/history/monthlydetails2">Current Year</a>
              </div>
            </div>

            <br />
            <br />
            <div class="body table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>SrNo</th>
                    <th>Month</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                  <tr v-for="(month,index) in months" :key="index">
                    <td>{{ month.no }}</td>
                    <td>{{ month.name }}</td>
                    <router-link
                      class="btn btn-info waves-effect"
                      :to="'/admin/history/monthlydetails/list1/' + month.no"
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
export default {
  data() {
    return {
      months: [
        {
          name: "January",
          no: 1
        },
        {
          name: "February",
          no: 2
        },
        {
          name: "March",
          no: 3
        },
        {
          name: "April",
          no: 4
        },
        {
          name: "May",
          no: 5
        },
        {
          name: "June",
          no: 6
        },
        {
          name: "July",
          no: 7
        },
        {
          name: "August",
          no: 8
        },
        {
          name: "September",
          no: 9
        },
        {
          name: "October",
          no: 10
        },
        {
          name: "November",
          no: 11
        },
        {
          name: "December",
          no: 12
        }
      ]
    };
  },
  methods: {},
  beforeMount() {
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
.dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 200%;
  margin-left: 10%;
  border-radius: 20px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-left: 10%;
  width: 200%;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>
        

