import http from "../../http-common";

class signUp {
  sup(data) {
    return http.post("/sign-up", data);
  }
  emailVarification(data) {
    return http.post("/emailVarification", data);
  }
}

export default new signUp();
