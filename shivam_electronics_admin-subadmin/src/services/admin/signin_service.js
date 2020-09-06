import http from "../../http-common";

class signIn {
  sin(data) {
    return http.post("/admin-signin",data);
  }
  attempts(data) {
    return http.post("/admin-attempts",data);
  }
  apwd(data) {
    return http.post("/admin-attemptspwd",data);
  }
}

export default new signIn();
