import http from "../../http-common";

class manageUser {
  removeUser(id) {
    return http.delete(`/admin/removeUser/${id}`);
  }
  unBlockUser(id) {
    return http.post("/admin/unBlockUser/",id);
  }
  getAll() {
    return http.get("/admin/User-list");
  }
  getUserDetails(data) {
    return http.post("/admin/getUserDetails1/",data);
  }
}

export default new manageUser();
