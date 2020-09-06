import http from "../../http-common";

class forgotPwd {
  fpwd(data) {
    return http.post("/forgotpwd",data);
  }
}

export default new forgotPwd();
