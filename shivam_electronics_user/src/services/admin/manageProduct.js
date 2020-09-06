import http from "../../http-common";

class manageProduct {
  getFan() {
    return http.get("/admin/product/fan/list");
  }
  getFridge() {
    return http.get("/admin/product/fridge/list");
  }
  getTV() {
    return http.get("/admin/product/tv/list");
  }
  getSpeaker() {
    return http.get("/admin/product/speaker/list");
  }
  getOven() {
    return http.get("/admin/product/oven/list");
  }
  getFlourMil() {
    return http.get("/admin/product/flourmil/list");
  }
  getWaterPurifier() {
    return http.get("/admin/product/waterpurifier/list");
  }
  getWashingMachine() {
    return http.get("/admin/product/washingmachine/list");
  }
  getIron() {
    return http.get("/admin/product/iron/list");
  }
  getMobile() {
    return http.get("/admin/product/mobile/list");
  }
  getMixer() {
    return http.get("/admin/product/mixer/list");
  }
  removeFan(id) {
    return http.delete(`/admin/deleteproduct/fan/${id}`);
  }
  removeFridge(id) {
    return http.delete(`/admin/deleteproduct/fridge/${id}`);
  }
  removeMixer(id) {
    return http.delete(`/admin/deleteproduct/mixer/${id}`);
  }
  removeSpeaker(id) {
    return http.delete(`/admin/deleteproduct/speaker/${id}`);
  }
  removeWashingMachine(id) {
    return http.delete(`/admin/deleteproduct/washingmachine/${id}`);
  }
  removeWaterPurifier(id) {
    return http.delete(`/admin/deleteproduct/waterpurifier/${id}`);
  }
  removeMobile(id) {
    return http.delete(`/admin/deleteproduct/mobile/${id}`);
  }
  removeTV(id) {
    return http.delete(`/admin/deleteproduct/tv/${id}`);
  }
  removeFlourmil(id) {
    return http.delete(`/admin/deleteproduct/flourmil/${id}`);
  }
  removeIron(id) {
    return http.delete(`/admin/deleteproduct/iron/${id}`);
  }
  removeOven(id) {
    return http.delete(`/admin/deleteproduct/oven/${id}`);
  }
  addFan(data) {
    return http.post('/admin/addproduct/fan', data);
  }
  addMixer(data) {
    return http.post('/admin/addproduct/mixer', data);
  }
  addFlourmil(data) {
    return http.post('/admin/addproduct/flourmil', data);
  }
  addTV(data) {
    return http.post('/admin/addproduct/tv', data);
  }
  addIron(data) {
    return http.post('/admin/addproduct/iron', data);
  }
  addOven(data) {
    return http.post('/admin/addproduct/oven', data);
  }
  addWaterPurifier(data) {
    return http.post('/admin/addproduct/waterpurifier', data);
  }
  addWashingMachine(data) {
    return http.post('/admin/addproduct/washingmachine', data);
  }
  addMobile(data) {
    return http.post('/admin/addproduct/mobile', data);
  }
  addSpeaker(data) {
    return http.post('/admin/addproduct/speaker', data);
  }
  addFridge(data) {
    return http.post('/admin/addproduct/fridge', data);
  }
  getBrands() {
    return http.get("/admin/manageProduct/brands");
  }
  getFan1(data) {
    return http.post("/admin/getproduct/fan", data);
  }
  getFridge1(data) {
    return http.post("/admin/getproduct/fridge", data);
  }
  getWashingMachine1(data) {
    return http.post("/admin/getproduct/washingmachine", data);
  }
  getWaterPurifier1(data) {
    return http.post("/admin/getproduct/waterpurifier", data);
  }
  getMixer1(data) {
    return http.post("/admin/getproduct/mixer", data);
  }
  getSpeaker1(data) {
    return http.post("/admin/getproduct/speaker", data);
  }
  getTV1(data) {
    return http.post("/admin/getproduct/tv", data);
  }
  getIron1(data) {
    return http.post("/admin/getproduct/iron", data);
  }
  getOven1(data) {
    return http.post("/admin/getproduct/oven", data);
  }
  getMobile1(data) {
    return http.post("/admin/getproduct/mobile", data);
  }
  getFlourmil1(data) {
    return http.post("/admin/getproduct/flourmil", data);
  }
  updateFan(data) {
    return http.post("/admin/updateproduct/fan", data);
  }
  updateFridge(data) {
    return http.post("/admin/updateproduct/fridge", data);
  }
  updateFlourmil(data) {
    return http.post("/admin/updateproduct/flourmil", data);
  }
  updateSpeaker(data) {
    return http.post("/admin/updateproduct/speaker", data);
  }
  updateMixer(data) {
    return http.post("/admin/updateproduct/mixer", data);
  }
  updateWashingMachine(data) {
    return http.post("/admin/updateproduct/washingmachine", data);
  }
  updateWaterPurifier(data) {
    return http.post("/admin/updateproduct/waterpurifier", data);
  }
  updateIron(data) {
    return http.post("/admin/updateproduct/iron", data);
  }
  updateOven(data) {
    return http.post("/admin/updateproduct/oven", data);
  }
  updateMobile(data) {
    return http.post("/admin/updateproduct/mobile", data);
  }
  updateTV(data) {
    return http.post("/admin/updateproduct/tv", data);
  }
  addBrand(data) {
    return http.post("/admin/addBrand", data);
  }
  uploadFanImage(data) {
    return http.post("/admin/uploadFanImage", data);
  }
  uploadFridgeImage(data) {
    return http.post("/admin/uploadFridgeImage", data);
  }
  uploadWashingMachineImage(data) {
    return http.post("/admin/uploadWashingMachineImage", data);
  }
  uploadWaterPurifierImage(data) {
    return http.post("/admin/uploadWaterPurifierImage", data);
  }
  uploadMixerImage(data) {
    return http.post("/admin/uploadMixerImage", data);
  }
  uploadSpeakerImage(data) {
    return http.post("/admin/uploadSpeakerImage", data);
  }
  uploadTVImage(data) {
    return http.post("/admin/uploadTVImage", data);
  }
  uploadMobileImage(data) {
    return http.post("/admin/uploadMobileImage", data);
  }
  uploadFlourmilImage(data) {
    return http.post("/admin/uploadFlourmilImage", data);
  }
  uploadIronImage(data) {
    return http.post("/admin/uploadIronImage", data);
  }
  uploadOvenImage(data) {
    return http.post("/admin/uploadOvenImage", data);
  }
}

export default new manageProduct();
