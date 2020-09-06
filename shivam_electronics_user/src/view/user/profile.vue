<template>
  <div>
    <userHead></userHead>

    <div id="mainBody">
      <div class="container">
        <div class="row">
          <userSidebar></userSidebar>

          <div class="span9">
            <ul class="breadcrumb">
              <li>
                <a href="/">Home</a>
                <span class="divider">/</span>
              </li>
              <li class="active">My Account</li>
            </ul>

            <div v-if="stdError !== ''">
              <h3 style="color: red;">{{ stdError }}</h3>
            </div>

            <div v-else>
              <h3>Account Details</h3>
              <div class="well">
                <form @submit.prevent="editdetails()" class="form-horizontal">
                  <div class="control-group">
                    <label class="control-label" for="firstname">Profile Picture :</label>
                    <div class="controls">
                      <img v-if="profilePic !== ''"
                        :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/customer/' + profilePic"
                        style="height: 180px; width: 160px;"
                        alt="profile pic"
                      />
                      <form enctype="multipart/form-data" @submit.prevent="sendFile">
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary">Upload</button>
                      </form>
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label" for="Firstname">FirstName :</label>
                    <div class="controls">
                      <input
                        type="text"
                        id="firstname"
                        placeholder="Enter your First Name"
                        v-model="firstname"
                        required
                        pattern="[a-zA-Z]*"
                        title="Only Characters are allowed"
                      />
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label" for="Lastname">LastName :</label>
                    <div class="controls">
                      <input
                        type="text"
                        id="lastname"
                        placeholder="Enter your Last Name"
                        v-model="lastname"
                        required
                        pattern="[a-zA-Z]*"
                        title="Only Characters are allowed"
                      />
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label" for="EmailAddress">Email Address :</label>
                    <div class="controls">
                      <input
                        type="text"
                        id="email_address"
                        placeholder="Enter your email address"
                        v-model="email"
                        disabled
                        required
                      />
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label" for="dob">Date of Birth :</label>
                    <div class="controls">
                      <input
                        type="date"
                        id="date"
                        placeholder="Enter your Date Of Birth"
                        v-model="dob"
                      />
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label" for="cno">Contact Number :</label>
                    <div class="controls">
                      <input
                        type="text"
                        id="contact_no"
                        placeholder="Enter your Contact Number"
                        v-model="contact"
                        maxlength="10"
                        required
                        pattern="[0-9]*"
                        title="Only Numbers are allowed"
                        minlength="10"
                      />
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label" for="acno">Alternate Contact Number</label>
                    <div class="controls">
                      <input
                        type="text"
                        id="altcontact_no"
                        placeholder="Enter your Alternate Contact Number"
                        v-model="altcontact"
                        maxlength="10"
                        required
                        pattern="[0-9]*"
                        title="Only Numbers are allowed"
                        minlength="10"
                      />
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label" for="password">Password :</label>
                    <div class="controls">
                      <input
                        type="text"
                        name="password"
                        maxlength="30"
                        v-model="pwd"
                        placeholder="Password"
                        required
                        minlength="8"
                        pattern="[a-zA-Z0-9_@$~.,()=+*^%#!\/?><-]*"
                        title="Only Numbers,characters and (_@$~.,()=+*^%#!\/?><-) are allowed"
                      />
                    </div>
                  </div>

                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <div class="control-group">
                    <div class="controls">
                      <button type="submit" class="btn btn-success">Update</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <userFooter></userFooter>
  </div>
</template>

<script>
//Scripts

import pro1 from "../../services/user/profile_service";

export default {
  data() {
    return {
      cindex: -1,
      cemp: null,
      error: "",
      id: "",
      usrid: "",
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      altcontact: "",
      pwd: "",
      profilePic: "",
      file: "",
      uploadStatus: 0,
      image: "",
      dob: "",
      stdError: "",
      dob: "",
      date: ""
    };
  },
  methods: {
    selectedFile() {
      this.file = this.$refs.file.files[0];
    },
    editdetails() {
      var dateobj = new Date(this.dob);
      var date1 = dateobj.toISOString().substr(0, 10);

      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
        contact: this.contact,
        altcontact: this.altcontact,
        usrid: this.usrid,
        image: this.profilePic,
        pwd: this.pwd,
        dob: date1
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
        usrid: id
      };
      pro1
        .usprofile(data)
        .then(res => {
          let response = res.data;
          (this.firstname = response[0].FirstName),
            (this.lastname = response[0].LastName),
            (this.email = this.id),
            (this.contact = response[0].ContactNo),
            (this.profilePic = response[0].Image),
            (this.altcontact = response[0].AlternateNo);

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
    }
  },

  beforeMount() {
    if (this.$session.exists() === true) {
      this.$session.start();
      this.stdError = "";
      this.id = this.$session.get("email");
      const data = {
        usrid: this.id
      };

      pro1
        .getID(data)
        .then(res => {
          let response = res.data;
          this.usrid = response[0].UserID;
          this.pwd = response[0].Password;
          this.retriveDetails(this.usrid);
        })
        .catch(err => {
          this.error = "Something went Wrong";
        });
    } else {
      this.stdError = "Please Do Login First !!!";
    }
  }
};
</script>
    

<style scoped>
</style>
        

