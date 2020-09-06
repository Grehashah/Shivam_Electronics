import http from "../../http-common";

class signIn {
  sin(data) {
    return http.post("/employee-signin",data);
  }
  attempts(data) {
    return http.post("/employee-attempts",data);
  }
  apwd(data) {
    return http.post("/employee-attemptspwd",data);
  }
}

export default new signIn();
