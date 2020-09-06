<template>
  <div>
    <adminHead></adminHead>
    <section class="content">
      <div class="container-fluid">
        <!-- Vertical Layout -->
        <div class="row clearfix">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
              <div class="header">
                <h2>PROFILE DETAILS</h2>
              </div>
              <div class="body">
                <form>
                  <label for="firstname">Profile Picture</label>
                  <div class="form-group">
                    <div class="form-line">
                      <img v-if="profilePic !== ''"
                        :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/admin/' + profilePic"
                        style="height: 220px; width: 200px;"
                        alt="profile pic"
                      />
                    </div>
                  </div>
                  <label for="firstname">First Name</label>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                      disabled
                        type="text"
                        id="firstname"
                        class="form-control"
                        placeholder="Enter your First Name"
                        v-model="firstname"
                        required
                        pattern="[a-zA-Z]*"
                        title="Only Characters are allowed in FirstName"
                      />
                    </div>
                  </div>
                  <label for="lastname">Last Name</label>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                      disabled
                        type="text"
                        id="lastname"
                        class="form-control"
                        placeholder="Enter your Last Name"
                        v-model="lastname"
                        required
                        pattern="[a-zA-Z]*"
                        title="Only Characters are allowed in LastName"
                      />
                    </div>
                  </div>

                  <label for="email_address">Email Address</label>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                      disabled
                        type="text"
                        id="email_address"
                        class="form-control"
                        placeholder="Enter your email address"
                        v-model="email"
                        disabled
                      />
                    </div>
                  </div>

                  <label for="contact_no">Contact Number</label>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                      disabled
                        type="text"
                        id="contact_no"
                        class="form-control"
                        placeholder="Enter your Contact Number"
                        v-model="contact"
                        maxlength="10"
                        minlength="10"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in ContactNo"
                      />
                    </div>
                  </div>
                <label for="contact_no">Alternate Contact Number</label>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                      disabled
                        type="text"
                        id="contact_no"
                        class="form-control"
                        placeholder="Enter your Contact Number"
                        v-model="altcontact"
                        maxlength="10"
                        minlength="10"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in ContactNo"
                      />
                    </div>
                  </div>

                  <label for="password">Password</label>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                      disabled
                        type="text"
                        class="form-control"
                        name="password"
                        maxlength="30"
                        v-model="pwd"
                        placeholder="Password"
                        required
                        pattern="[a-zA-Z0-9_@$~.,()=+*^%#!\/?><-]*"
                        title="Only Numbers,characters and (_@$~.,()=+*^%#!\/?><-) are allowed in Password"
                      />
                    </div>
                  </div>
                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>

                  <button type="submit" class="btn btn-info m-t-15 waves-effect" @click="viewOrder(id)">View Order-list</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//Scripts

import pro1 from "../../services/admin/manageUser_service";

export default {
  data() {
    return {
      cindex: -1,
      cemp: null,
      error: "",
      id: "",
      adid: "",
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      pwd: "",
      profilePic: "",
      file: "",
      uploadStatus: 0,
      image: "",
      altcontact:""
    };
  },
  methods: {
        retriveDetails(id) {
      const data = {
       id: id
      };
      pro1
        .getUserDetails(data)
        .then(res => {
        let response = res.data;
          (this.firstname = response[0].FirstName),
            (this.lastname = response[0].LastName),
            (this.email = response[0].Email),
            (this.contact = response[0].ContactNo),
            (this.profilePic = response[0].Image),
            (this.altcontact = response[0].AlternateNo);
            (this.pwd = response[0].Password);

          this.date = response[0].DOB;
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

          if (this.profilePic === null) {
            this.profilePic = "default_profile.png";
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    viewOrder(data){
      this.$router.push("/admin/history/userdetailshistory/list2/" + data);
    }
  },

  beforeMount() {
    if(this.$session.has("subadmin-email") === true)
    {
      this.$router.push("*");
    }
    else if (this.$session.has("admin-email") === true) {
      this.id = this.$route.params.id;
      this.retriveDetails(this.id);
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

