import http from "../../http-common";

class address {
  getCity() {
    return http.get("/addaddress/getCity");
  }
  getState() {
    return http.get("/addaddress/getState");
  }
  getStateID(data) {
    return http.post("/addaddress/getStateID",data);
  }
  addAddress(data) {
    return http.post("/addaddress/addAddress",data);
  }
  getUserID(data) {
    return http.post("/addaddress/getUserID",data);
  }
  getAddress(data) {
    return http.post("/addaddress/getAddress",data);
  }
  getDetails(data) {
    return http.post("/addaddress/getDetails",data);
  }
  updateAddress(data) {
    return http.post("/addaddress/updateAddress",data);
  }
}

export default new address();
