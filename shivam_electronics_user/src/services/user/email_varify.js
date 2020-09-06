import http from "../../http-common";

class signIn {
  varifyEmail(data) {
    return http.post("/sup-email",data);
  }
}

export default new signIn();
