<template>
  <div>
    <adminHead></adminHead>

    <section class="content">
      <div class="container-fluid">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="header">
              <h2>Review Disliked by Following Customers</h2>
              <br />
              <h2>Dislikes : {{ dislikeCount }}</h2>
            </div>
            <div class="body table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Customer Name</th>
                    <th>Date of Birth</th>
                    <th>Contact No</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(v,index) in votes" :key="index">
                    <td>{{ v.fname + " " + v.lname }}</td>
                    <td>{{ v.dob }}</td>
                    <td>{{ v.cno }}</td>
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

import review from "../../services/admin/review_service";
export default {
  data() {
    return {
      cindex: -1,
      cemp: null,
      error: "",
      rid: "",
      votes: [],
      i: 0,
      fname: "",
      lname: "",
      uid: "",
      likeCount: 0,
      dislikeCount: 0,
      dob: "",
      date: "",
      cno: ""
    };
  },
  methods: {
    retriveReviews(id) {
      const data = {
        rid: id
      };
          review
            .getDislikeCount(data)
            .then(res => {
              let response = res.data;
              this.no = res.data.length;
              this.dislikeCount = this.no;
              while (this.i < this.no) {
            this.fname = response[this.i].FirstName;
            this.lname = response[this.i].LastName;
            this.cno = response[this.i].ContactNo;

            this.date = response[this.i].DOB;
            var date = new Date(this.date);
            var month = date.getMonth() + 1;
            var date1 = date.getDate();
            if (month < 10 && date1 < 10) {
              this.dob =
                date.getFullYear() +
                "-0" +
                (date.getMonth() + 1) +
                "-0" +
                date.getDate();
            } else if (month < 10) {
              this.dob =
                date.getFullYear() +
                "-0" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate();
            } else if (date1 < 10) {
              this.dob =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-0" +
                date.getDate();
            } else if (month > 10 && date1 > 10) {
              this.dob =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate();
            }

            this.votes.push({
              fname: this.fname,
              lname: this.lname,
              cno: this.cno,
              dob: this.dob
            });
            this.i = this.i + 1;
            }

            })
            .catch(err => {
              this.error = "Something Went Wrong!!!";
            });
    }
  },
  beforeMount() {
     if(this.$session.has("subadmin-email") === true)
    {
      this.$router.push("*");
    }
    else if (this.$session.has("admin-email") === true) {
      this.rid = this.$route.params.rid;
      this.retriveReviews(this.rid);
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

