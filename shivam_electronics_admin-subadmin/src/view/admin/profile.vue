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
                <form @submit.prevent="editdetails()">
                  <label for="firstname">Profile Picture</label>
                  <div class="form-group">
                    <div class="form-line">
                      <img v-if="profilePic !== ''"
                        :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/admin/' + profilePic"
                        style="height: 220px; width: 200px;"
                        alt="profile pic"
                      />
                      <form enctype="multipart/form-data" @submit.prevent="sendFile">
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>
                  <label for="firstname">First Name</label>
                  <div class="form-group">
                    <div class="form-line">
                      <input
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
                  <label for="password">Password</label>
                  <div class="form-group">
                    <div class="form-line">
                      <input
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

                  <button type="submit" class="btn btn-success m-t-15 waves-effect">Update</button>
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

import pro1 from "../../services/admin/profile_service";

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
      image: ""
    };
  },
  methods: {
    selectedFile() {
      this.file = this.$refs.file.files[0];
    },
    editdetails() {
      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
        contact: this.contact,
        email: this.email,
        pwd: this.pwd,
        image: this.profilePic
      };
      pro1
        .updatedetails(data)
        .then(res => {
          let response = res.data;
          this.error = "Update Successfull";
        })
        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    },
    sendFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      pro1
        .uploadImage(formData)
        .then(res => {
          let response = res.data;

          if (response.result === 1) {
            this.error = "Image Uploaded";
            this.profilePic = response.name;
            this.uploadStatus = 1;
          } else {
            this.uploadStatus = 0;
            this.error = "Error occured!!!";
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    retriveDetails(id) {
      const data = {
        email: id
      };
      pro1
        .adprofile(data)
        .then(res => {
          let response = res.data;
          (this.firstname = response[0].FirstName),
            (this.lastname = response[0].LastName),
            (this.email = response[0].Email),
            (this.pwd = response[0].Password),
            (this.profilePic = response[0].Image),
            (this.contact = response[0].ContactNo);

          if (this.profilePic === null) {
            this.profilePic = "default_profile.png";
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
     this.$session.start();
      this.id = this.$session.get("admin-email");
      this.retriveDetails(this.id);
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

