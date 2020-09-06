<template>
  <div>
    <adminHead></adminHead>

    <section class="content">
      <div class="container-fluid">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="header">
              <h2>List of Blocked Reviews</h2>
            </div>
            <div class="body table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>PRODUCT NAME</th>
                    <th>BRANDNAME</th>
                    <th>REVIEW</th>
                    <th>NO. OF USERS</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(r,index) in reviews1" :key="index">
                    <td>{{ r.pname }}</td>
                    <td>{{ r.bname }}</td>
                    <td>{{ r.rev }}</td>
                    <td>{{ r.count }}</td>
                    <router-link
                      class="btn btn-success waves-effect"
                      :to="'/admin/reviewoptions/blockedreview/unblockreview/' + r.rid"
                    >UnBlock</router-link>
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
      rid: "",
      status2: "",
      status1: "",
      count: 0
    };
  },
  methods: {
    retriveReviews() {
      review
        .getReviewsBlocked()
        .then(res => {
          this.reviews = res.data;
          let response = res.data;
          this.no = res.data.length;
          while (this.i < this.no) {
            this.name = response[this.i].Name;
            this.pname = this.reviews[this.i].Name;
            this.rev = this.reviews[this.i].Review;
            this.id = this.reviews[this.i].ProductID;
            this.rid = this.reviews[this.i].ReviewID;

            if (this.name == "fan") {
              let id = this.id;
              let pname = this.pname;
              let rev = this.rev;
              let rid = this.rid;
              const data = {
                id: id
              };
              const data1 = {
                rid: rid
              };
              review
                .getReviewFan(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;

                  review
                    .getCount(data1)
                    .then(res => {
                      let response = res.data;
                      this.count = res.data.length;
                      this.reviews1.push({
                        pname: pname,
                        bname: bname,
                        rev: rev,
                        rid: rid,
                        count: this.count
                      });
                    })
                    .catch(err => {
                      this.error = "Something Went Wrong!!!";
                    });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.name == "tv") {
              let name = this.name;
              let id = this.id;
              let pname = this.pname;
              let rev = this.rev;
              let rid = this.rid;

              const data = {
                id: id
              };
              const data1 = {
                rid: rid
              };
              review
                .getReviewTV(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  review
                    .getCount(data1)
                    .then(res => {
                      let response = res.data;
                      this.count = res.data.length;
                      this.reviews1.push({
                        pname: pname,
                        bname: bname,
                        rev: rev,
                        rid: rid,
                        count: this.count
                      });
                    })
                    .catch(err => {
                      this.error = "Something Went Wrong!!!";
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
              const data1 = {
                rid: rid
              };
              review
                .getReviewFlourmil(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  review
                    .getCount(data1)
                    .then(res => {
                      let response = res.data;
                      this.count = res.data.length;
                      this.reviews1.push({
                        pname: pname,
                        bname: bname,
                        rev: rev,
                        rid: rid,
                        count: this.count
                      });
                    })
                    .catch(err => {
                      this.error = "Something Went Wrong!!!";
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
              const data1 = {
                rid: rid
              };

              review
                .getReviewFridge(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  review
                    .getCount(data1)
                    .then(res => {
                      let response = res.data;
                      this.count = res.data.length;
                      this.reviews1.push({
                        pname: pname,
                        bname: bname,
                        rev: rev,
                        rid: rid,
                        count: this.count
                      });
                    })
                    .catch(err => {
                      this.error = "Something Went Wrong!!!";
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
              const data1 = {
                rid: rid
              };

              review
                .getReviewIron(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  review
                    .getCount(data1)
                    .then(res => {
                      let response = res.data;
                      this.count = res.data.length;
                      this.reviews1.push({
                        pname: pname,
                        bname: bname,
                        rev: rev,
                        rid: rid,
                        count: this.count
                      });
                    })
                    .catch(err => {
                      this.error = "Something Went Wrong!!!";
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
              const data1 = {
                rid: rid
              };

              review
                .getReviewMixer(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  review
                    .getCount(data1)
                    .then(res => {
                      let response = res.data;
                      this.count = res.data.length;
                      this.reviews1.push({
                        pname: pname,
                        bname: bname,
                        rev: rev,
                        rid: rid,
                        count: this.count
                      });
                    })
                    .catch(err => {
                      this.error = "Something Went Wrong!!!";
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
              const data1 = {
                rid: rid
              };

              review
                .getReviewMobile(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  review
                    .getCount(data1)
                    .then(res => {
                      let response = res.data;
                      this.count = res.data.length;
                      this.reviews1.push({
                        pname: pname,
                        bname: bname,
                        rev: rev,
                        rid: rid,
                        count: this.count
                      });
                    })
                    .catch(err => {
                      this.error = "Something Went Wrong!!!";
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
              const data1 = {
                rid: rid
              };

              review
                .getReviewOven(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  review
                    .getCount(data1)
                    .then(res => {
                      let response = res.data;
                      this.count = res.data.length;
                      this.reviews1.push({
                        pname: pname,
                        bname: bname,
                        rev: rev,
                        rid: rid,
                        count: this.count
                      });
                    })
                    .catch(err => {
                      this.error = "Something Went Wrong!!!";
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
              const data1 = {
                rid: rid
              };

              review
                .getReviewSpeaker(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  review
                    .getCount(data1)
                    .then(res => {
                      let response = res.data;
                      this.count = res.data.length;
                      this.reviews1.push({
                        pname: pname,
                        bname: bname,
                        rev: rev,
                        rid: rid,
                        count: this.count
                      });
                    })
                    .catch(err => {
                      this.error = "Something Went Wrong!!!";
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
              const data1 = {
                rid: rid
              };

              review
                .getReviewWM(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  review
                    .getCount(data1)
                    .then(res => {
                      let response = res.data;
                      this.count = res.data.length;
                      this.reviews1.push({
                        pname: pname,
                        bname: bname,
                        rev: rev,
                        rid: rid,
                        count: this.count
                      });
                    })
                    .catch(err => {
                      this.error = "Something Went Wrong!!!";
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
              const data1 = {
                rid: rid
              };

              review
                .getReviewWP(data)
                .then(res => {
                  let response = res.data;
                  let bname = response[0].Name;
                  review
                    .getCount(data1)
                    .then(res => {
                      let response = res.data;
                      this.count = res.data.length;
                      this.reviews1.push({
                        pname: pname,
                        bname: bname,
                        rev: rev,
                        rid: rid,
                        count: this.count
                      });
                    })
                    .catch(err => {
                      this.error = "Something Went Wrong!!!";
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
        

