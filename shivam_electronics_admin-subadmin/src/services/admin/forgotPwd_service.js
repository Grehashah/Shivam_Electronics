import http from "../../http-common";

class forgotPwd {
  fpwd(data) {
    return http.post("/admin-forgotpwd",data);
  }
}

export default new forgotPwd();
