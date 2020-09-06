import http from "../../http-common";

class profile {
  usprofile(data) {
    return http.post("/user/profile",data);
  }
  updatedetails(data){
    return http.post("/user/update-profile",data);
  }
  getID(data){
    return http.post("/user/getid",data);
  }
  uploadImage(data) {
    return http.post("/user/profile/uploadImage", data);
  }
}

export default new profile();
