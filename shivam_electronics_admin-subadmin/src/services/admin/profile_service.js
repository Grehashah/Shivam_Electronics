import http from "../../http-common";

class profile {
  adprofile(data) {
    return http.post("/admin/profile",data);
  }
  updatedetails(data){
    return http.post("/admin/update-profile",data);
  }
  uploadImage(data) {
    return http.post("/admin/profile/uploadImage", data);
  }
}

export default new profile();
