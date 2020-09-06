<template>
  <div>
    <adminHead></adminHead>

    <section class="content">
      <div class="container-fluid">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="header">
              <h2>Reviews</h2>
            </div>
            <div class="body table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>USER NAME</th>
                    <th>PRODUCT NAME</th>
                    <th>BRAND NAME</th>
                    <th>REVIEW</th>
                    <th>VOTES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(r,index) in reviews1" :key="index">
                    <td>{{ r.uname }}</td>
                    <td>{{ r.pname }}</td>
                    <td>{{ r.bname }}</td>
                    <td>{{ r.rev }}</td>
                    <router-link
                      class="btn btn-info waves-effect"
                      :to="'/admin/reviewoptions/review/reviewlikedislike/' + r.rid"
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
import review from "../../services/admin/review_service";
import { Eventbus } from "../../main";

export default {
  data() {
    return {
      cindex: -1,
      cemp: null,
      error: "",
      reviews: [],
      count: 0,
      no: 0,
      i: 0,
      name: "",
      id: 0,
      uname: "",
      pname: "",
      rev: "",
      fname: "",
      lname: "",
      reviews1: [],
      rid: ""
    };
  },
  methods: {
    retriveReviews() {
      review
        .getReviews()
        .then(res => {
          this.reviews = res.data;
          let response = res.data;
          this.no = res.data.length;
          while (this.i < this.no) {
            this.name = response[this.i].Name;
            this.fname = this.reviews[this.i].FirstName;
            this.lname = this.reviews[this.i].LastName;
            this.uname = this.fname + " " + this.lname;
            this.pname = this.reviews[this.i].Name;
            this.rev = this.reviews[this.i].Review;
            this.id = this.reviews[this.i].ProductID;
            this.rid = this.reviews[this.i].ReviewID;
            if (this.name == "fan") {
              let id = this.id;
              let uname = this.uname;
              let pname = this.pname;
              let rev = this.rev;
              let rid = this.rid;
              const data = {
                id: id
              };
              review
                .getReviewFan(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  this.reviews1.push({
                    uname: uname,
                    pname: pname,
                    bname: bname,
                    rev: rev,
                    rid: rid
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.name == "TV") {
              let name = this.name;
              let id = this.id;
              let uname = this.uname;
              let pname = this.pname;
              let rev = this.rev;
              let rid = this.rid;
              const data = {
                id: id
              };
              review
                .getReviewTV(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  this.reviews1.push({
                    uname: uname,
                    pname: pname,
                    bname: bname,
                    rev: rev,
                    rid: rid
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.name == "flourmil") {
              let name = this.name;
              let id = this.id;
              let uname = this.uname;
              let pname = this.pname;
              let rev = this.rev;
              let rid = this.rid;
              const data = {
                id: id
              };
              review
                .getReviewFlourmil(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  this.reviews1.push({
                    uname: uname,
                    pname: pname,
                    bname: bname,
                    rev: rev,
                    rid: rid
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.name == "fridge") {
              let name = this.name;
              let id = this.id;
              let uname = this.uname;
              let pname = this.pname;
              let rev = this.rev;
              let rid = this.rid;
              const data = {
                id: id
              };
              review
                .getReviewFridge(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  this.reviews1.push({
                    uname: uname,
                    pname: pname,
                    bname: bname,
                    rev: rev,
                    rid: rid
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.name == "iron") {
              let name = this.name;
              let id = this.id;
              let uname = this.uname;
              let pname = this.pname;
              let rev = this.rev;
              let rid = this.rid;
              const data = {
                id: id
              };
              review
                .getReviewIron(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  this.reviews1.push({
                    uname: uname,
                    pname: pname,
                    bname: bname,
                    rev: rev,
                    rid: rid
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.name == "mixer") {
              let name = this.name;
              let id = this.id;
              let uname = this.uname;
              let pname = this.pname;
              let rev = this.rev;
              let rid = this.rid;
              const data = {
                id: id
              };
              review
                .getReviewMixer(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  this.reviews1.push({
                    uname: uname,
                    pname: pname,
                    bname: bname,
                    rev: rev,
                    rid: rid
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.name == "mobile") {
              let name = this.name;
              let id = this.id;
              let uname = this.uname;
              let pname = this.pname;
              let rev = this.rev;
              let rid = this.rid;
              const data = {
                id: id
              };
              review
                .getReviewMobile(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  this.reviews1.push({
                    uname: uname,
                    pname: pname,
                    bname: bname,
                    rev: rev,
                    rid: rid
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.name == "oven") {
              let name = this.name;
              let id = this.id;
              let uname = this.uname;
              let pname = this.pname;
              let rev = this.rev;
              let rid = this.rid;
              const data = {
                id: id
              };
              review
                .getReviewOven(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  this.reviews1.push({
                    uname: uname,
                    pname: pname,
                    bname: bname,
                    rev: rev,
                    rid: rid
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.name == "speaker") {
              let name = this.name;
              let id = this.id;
              let uname = this.uname;
              let pname = this.pname;
              let rev = this.rev;
              let rid = this.rid;
              const data = {
                id: id
              };
              review
                .getReviewSpeaker(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  this.reviews1.push({
                    uname: uname,
                    pname: pname,
                    bname: bname,
                    rev: rev,
                    rid: rid
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.name == "washingmachine") {
              let name = this.name;
              let id = this.id;
              let uname = this.uname;
              let pname = this.pname;
              let rev = this.rev;
              let rid = this.rid;
              const data = {
                id: id
              };
              review
                .getReviewWM(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  this.reviews1.push({
                    uname: uname,
                    pname: pname,
                    bname: bname,
                    rev: rev,
                    rid: rid
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.name == "waterpurifier") {
              let name = this.name;
              let id = this.id;
              let uname = this.uname;
              let pname = this.pname;
              let rev = this.rev;
              let rid = this.rid;
              const data = {
                id: id
              };
              review
                .getReviewWP(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  this.reviews1.push({
                    uname: uname,
                    pname: pname,
                    bname: bname,
                    rev: rev,
                    rid: rid
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            }
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
       this.retriveReviews();
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

