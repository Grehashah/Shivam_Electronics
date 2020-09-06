import http from "../../http-common";

class forgotPwd {
  fpwd(data) {
    return http.post("/employee-forgotpwd",data);
  }
}

export default new forgotPwd();
