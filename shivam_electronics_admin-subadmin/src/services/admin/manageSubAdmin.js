import http from "../../http-common";

class manageSubAdmin {
  addsubadmin(data) {
    return http.post("/admin/addSubAdmin",data);
  }
  updatesubadmin(data) {
    return http.post("/admin/updateSubAdmin",data);
  }
  removesubadmin(id) {
    return http.delete(`/admin/removeSubAdmin/${id}`);
  }
  getAll() {
    return http.get("/admin/subAdmin-List");
  }
  getEmp(data) {
    return http.post("/admin/getSubAdmin",data);
  }
  getEmp2(data) {
    return http.post("/admin/getSubAdmin-PWd",data);
  }
  getID(data)
  {
    return http.post("/admin/getAdminID",data);
  }
}

export default new manageSubAdmin();
