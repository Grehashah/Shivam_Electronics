import http from "../../http-common";

class profile {
  subadprofile(data) {
    return http.post("/employee/profile",data);
  }
  updatedetails(data){
    return http.post("/employee/update-profile",data);
  }
  uploadImage(data) {
    return http.post("/employee/profile/uploadImage", data);
  }
}

export default new profile();
