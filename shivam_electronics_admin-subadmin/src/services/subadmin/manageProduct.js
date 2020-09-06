import http from "../../http-common";

class manageProduct {
  getFan() {
    return http.get("/subadmin/product/fan/list");
  }
  getFridge() {
    return http.get("/subadmin/product/fridge/list");
  }
  getTV() {
    return http.get("/subadmin/product/tv/list");
  }
  getSpeaker() {
    return http.get("/subadmin/product/speaker/list");
  }
  getOven() {
    return http.get("/subadmin/product/oven/list");
  }
  getFlourMil() {
    return http.get("/subadmin/product/flourmil/list");
  }
  getWaterPurifier() {
    return http.get("/subadmin/product/waterpurifier/list");
  }
  getWashingMachine() {
    return http.get("/subadmin/product/washingmachine/list");
  }
  addBrand(data) {
    return http.post("/subadmin/addBrand", data);
  }
  getIron() {
    return http.get("/subadmin/product/iron/list");
  }
  getMobile() {
    return http.get("/subadmin/product/mobile/list");
  }
  getMixer() {
    return http.get("/subadmin/product/mixer/list");
  }
  removeFan(id) {
    return http.delete(`/subadmin/deleteproduct/fan/${id}`);
  }
  removeFridge(id) {
    return http.delete(`/subadmin/deleteproduct/fridge/${id}`);
  }
  removeMixer(id) {
    return http.delete(`/subadmin/deleteproduct/mixer/${id}`);
  }
  removeSpeaker(id) {
    return http.delete(`/subadmin/deleteproduct/speaker/${id}`);
  }
  removeWashingMachine(id) {
    return http.delete(`/subadmin/deleteproduct/washingmachine/${id}`);
  }
  removeWaterPurifier(id) {
    return http.delete(`/subadmin/deleteproduct/waterpurifier/${id}`);
  }
  removeMobile(id) {
    return http.delete(`/subadmin/deleteproduct/mobile/${id}`);
  }
  removeTV(id) {
    return http.delete(`/subadmin/deleteproduct/tv/${id}`);
  }
  removeFlourmil(id) {
    return http.delete(`/subadmin/deleteproduct/flourmil/${id}`);
  }
  removeIron(id) {
    return http.delete(`/subadmin/deleteproduct/iron/${id}`);
  }
  removeOven(id) {
    return http.delete(`/subadmin/deleteproduct/oven/${id}`);
  }
  addFan(data) {
    return http.post('/subadmin/addproduct/fan', data);
  }
  addMixer(data) {
    return http.post('/subadmin/addproduct/mixer', data);
  }
  addFlourmil(data) {
    return http.post('/subadmin/addproduct/flourmil', data);
  }
  addTV(data) {
    return http.post('/subadmin/addproduct/tv', data);
  }
  addIron(data) {
    return http.post('/subadmin/addproduct/iron', data);
  }
  addOven(data) {
    return http.post('/subadmin/addproduct/oven', data);
  }
  addWaterPurifier(data) {
    return http.post('/subadmin/addproduct/waterpurifier', data);
  }
  addWashingMachine(data) {
    return http.post('/subadmin/addproduct/washingmachine', data);
  }
  addMobile(data) {
    return http.post('/subadmin/addproduct/mobile', data);
  }
  addSpeaker(data) {
    return http.post('/subadmin/addproduct/speaker', data);
  }
  addFridge(data) {
    return http.post('/subadmin/addproduct/fridge', data);
  }
  getBrands() {
    return http.get("/subadmin/manageProduct/brands");
  }
  getFan1(data) {
    return http.post("/subadmin/getproduct/fan", data);
  }
  getFridge1(data) {
    return http.post("/subadmin/getproduct/fridge", data);
  }
  getWashingMachine1(data) {
    return http.post("/subadmin/getproduct/washingmachine", data);
  }
  getWaterPurifier1(data) {
    return http.post("/subadmin/getproduct/waterpurifier", data);
  }
  getMixer1(data) {
    return http.post("/subadmin/getproduct/mixer", data);
  }
  getSpeaker1(data) {
    return http.post("/subadmin/getproduct/speaker", data);
  }
  getTV1(data) {
    return http.post("/subadmin/getproduct/tv", data);
  }
  getIron1(data) {
    return http.post("/subadmin/getproduct/iron", data);
  }
  getOven1(data) {
    return http.post("/subadmin/getproduct/oven", data);
  }
  getMobile1(data) {
    return http.post("/subadmin/getproduct/mobile", data);
  }
  getFlourmil1(data) {
    return http.post("/subadmin/getproduct/flourmil", data);
  }
  updateFan(data) {
    return http.post("/subadmin/updateproduct/fan", data);
  }
  updateFridge(data) {
    return http.post("/subadmin/updateproduct/fridge", data);
  }
  updateFlourmil(data) {
    return http.post("/subadmin/updateproduct/flourmil", data);
  }
  updateSpeaker(data) {
    return http.post("/subadmin/updateproduct/speaker", data);
  }
  updateMixer(data) {
    return http.post("/subadmin/updateproduct/mixer", data);
  }
  updateWashingMachine(data) {
    return http.post("/subadmin/updateproduct/washingmachine", data);
  }
  updateWaterPurifier(data) {
    return http.post("/subadmin/updateproduct/waterpurifier", data);
  }
  updateIron(data) {
    return http.post("/subadmin/updateproduct/iron", data);
  }
  updateOven(data) {
    return http.post("/subadmin/updateproduct/oven", data);
  }
  updateMobile(data) {
    return http.post("/subadmin/updateproduct/mobile", data);
  }
  updateTV(data) {
    return http.post("/subadmin/updateproduct/tv", data);
  }
  uploadFanImage(data) {
    return http.post("/subadmin/uploadFanImage", data);
  }
  uploadFridgeImage(data) {
    return http.post("/subadmin/uploadFridgeImage", data);
  }
  uploadWashingMachineImage(data) {
    return http.post("/subadmin/uploadWashingMachineImage", data);
  }
  uploadWaterPurifierImage(data) {
    return http.post("/subadmin/uploadWaterPurifierImage", data);
  }
  uploadMixerImage(data) {
    return http.post("/subadmin/uploadMixerImage", data);
  }
  uploadSpeakerImage(data) {
    return http.post("/subadmin/uploadSpeakerImage", data);
  }
  uploadTVImage(data) {
    return http.post("/subadmin/uploadTVImage", data);
  }
  uploadMobileImage(data) {
    return http.post("/subadmin/uploadMobileImage", data);
  }
  uploadFlourmilImage(data) {
    return http.post("/subadmin/uploadFlourmilImage", data);
  }
  uploadIronImage(data) {
    return http.post("/subadmin/uploadIronImage", data);
  }
  uploadOvenImage(data) {
    return http.post("/subadmin/uploadOvenImage", data);
  }
}

export default new manageProduct();
