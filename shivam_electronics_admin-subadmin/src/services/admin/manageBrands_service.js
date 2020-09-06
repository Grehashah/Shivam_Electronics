import http from "../../http-common";

class manageBrands {
  getAll() {
    return http.get("/admin/Brand-List");
  }
  addBrand(data) {
    return http.post("/admin/addBrand", data);
  }
  getBrand(data) {
    return http.post("/admin/getBrand", data);
  }
  updateBrand(data) {
    return http.post("/admin/updateBrand", data);
  }
  removeBrand(data) {
    return http.post("/admin/removeBrand", data);
  }
  unblockBrand(data) {
    return http.post("/admin/unblockBrand", data);
  }
  getFridge(data) {
    return http.post("/admin/getFridge", data);
  }
  updateFridgeStatus1(data) {
    return http.post("/admin/updateFridgeStatus1", data);
  }
  getMobile(data) {
    return http.post("/admin/getMobile", data);
  }
  updateMobileStatus1(data) {
    return http.post("/admin/updateMobileStatus1", data);
  }
  getFan(data) {
    return http.post("/admin/getFan", data);
  }
  updateFanStatus1(data) {
    return http.post("/admin/updateFanStatus1", data);
  }
  getFlourmil(data) {
    return http.post("/admin/getFlourmil", data);
  }
  updateFlourmilStatus1(data) {
    return http.post("/admin/updateFlourmilStatus1", data);
  }
  getIron(data) {
    return http.post("/admin/getIron", data);
  }
  updateIronStatus1(data) {
    return http.post("/admin/updateIronStatus1", data);
  }
  getMixer(data) {
    return http.post("/admin/getMixer", data);
  }
  updateMixerStatus1(data) {
    return http.post("/admin/updateMixerStatus1", data);
  }
  getOven(data) {
    return http.post("/admin/getOven", data);
  }
  updateOvenStatus1(data) {
    return http.post("/admin/updateOvenStatus1", data);
  }
  getSpeaker(data) {
    return http.post("/admin/getSpeaker", data);
  }
  updateSpeakerStatus1(data) {
    return http.post("/admin/updateSpeakerStatus1", data);
  }
  getTV(data) {
    return http.post("/admin/getTV", data);
  }
  updateTVStatus1(data) {
    return http.post("/admin/updateTVStatus1", data);
  }
  getWM(data) {
    return http.post("/admin/getWM", data);
  }
  updateWMStatus1(data) {
    return http.post("/admin/updateWMStatus1", data);
  }
  getWP(data) {
    return http.post("/admin/getWP", data);
  }
  updateWPStatus1(data) {
    return http.post("/admin/updateWPStatus1", data);
  }

  updateFridgeStatus2(data) {
    return http.post("/admin/updateFridgeStatus2", data);
  }
  updateMobileStatus2(data) {
    return http.post("/admin/updateMobileStatus2", data);
  }
  updateFanStatus2(data) {
    return http.post("/admin/updateFanStatus2", data);
  }
  updateFlourmilStatus2(data) {
    return http.post("/admin/updateFlourmilStatus2", data);
  }
  updateIronStatus2(data) {
    return http.post("/admin/updateIronStatus2", data);
  }
  updateMixerStatus2(data) {
    return http.post("/admin/updateMixerStatus2", data);
  }
  updateOvenStatus2(data) {
    return http.post("/admin/updateOvenStatus2", data);
  }
  updateSpeakerStatus2(data) {
    return http.post("/admin/updateSpeakerStatus2", data);
  }
  updateTVStatus2(data) {
    return http.post("/admin/updateTVStatus2", data);
  }
  updateWMStatus2(data) {
    return http.post("/admin/updateWMStatus2", data);
  }
  updateWPStatus2(data) {
    return http.post("/admin/updateWPStatus2", data);
  }
}

export default new manageBrands();
