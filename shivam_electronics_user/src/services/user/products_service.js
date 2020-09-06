import http from "../../http-common";

class dashboard {
  getFan() {
    return http.get("/user/products/getFan");
  }
  getTV() {
    return http.get("/user/products/getTV");
  }
  getFlourmil() {
    return http.get("/user/products/getFlourmil");
  }
  getFridge() {
    return http.get("/user/products/getFridge");
  }
  getIron() {
    return http.get("/user/products/getIron");
  }
  getMixer() {
    return http.get("/user/products/getMixer");
  }
  getMobile() {
    return http.get("/user/products/getMobile");
  }
  getOven() {
    return http.get("/user/products/getOven");
  }
  getSpeaker() {
    return http.get("/user/products/getSpeaker");
  }
  getWM() {
    return http.get("/user/products/getWM");
  }
  getWP() {
    return http.get("/user/products/getWP");
  }
  getBrands() {
    return http.get("/user/products/getBrands");
  }
  getFilteredFan(data) {
    return http.post("/user/products/getFilteredFan", data);
  }
  getFilteredMobile(data) {
    return http.post("/user/products/getFilteredMobile", data);
  }
  getFilteredTV(data) {
    return http.post("/user/products/getFilteredTV", data);
  }
  getFilteredOven(data) {
    return http.post("/user/products/getFilteredOven", data);
  }
  getFilteredIron(data) {
    return http.post("/user/products/getFilteredIron", data);
  }
  getFilteredMixer(data) {
    return http.post("/user/products/getFilteredMixer", data);
  }
  getFilteredSpeaker(data) {
    return http.post("/user/products/getFilteredSpeaker", data);
  }
  getFilteredWaterPurifier(data) {
    return http.post("/user/products/getFilteredWaterPurifier", data);
  }
  getFilteredWashingMachine(data) {
    return http.post("/user/products/getFilteredWashingMachine", data);
  }
  getFilteredFlourmil(data) {
    return http.post("/user/products/getFilteredFlourmil", data);
  }
  getFilteredFridge(data) {
    return http.post("/user/products/getFilteredFridge", data);
  }


}

export default new dashboard();
