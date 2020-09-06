import http from "../../http-common";

class signIn {
  sin(data) {
    return http.post("/signin",data);
  }
  attempts(data) {
    return http.post("/attempts",data);
  }
  apwd(data) {
    return http.post("/attemptspwd",data);
  }
}

export default new signIn();
