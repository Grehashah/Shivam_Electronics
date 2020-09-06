import http from "../../http-common";

class dashboard {
  getRelatedMobile(data) {
    return http.post("/user/products/mobile/getRelatedItems", data);
  }
  getRelatedFan(data) {
    return http.post("/user/products/fan/getRelatedItems", data);
  }
  getRelatedFridge(data) {
    return http.post("/user/products/fridge/getRelatedItems", data);
  }
  getRelatedSpeaker(data) {
    return http.post("/user/products/speaker/getRelatedItems", data);
  }
  getRelatedWashingMachine(data) {
    return http.post("/user/products/washingmachine/getRelatedItems", data);
  }
  getRelatedWaterPurifier(data) {
    return http.post("/user/products/waterpurifier/getRelatedItems", data);
  }
  getRelatedMixer(data) {
    return http.post("/user/products/mixer/getRelatedItems", data);
  }
  getRelatedFlourmil(data) {
    return http.post("/user/products/flourmil/getRelatedItems", data);
  }
  getRelatedTV(data) {
    return http.post("/user/products/tv/getRelatedItems", data);
  }
  getRelatedIron(data) {
    return http.post("/user/products/iron/getRelatedItems", data);
  }
  getRelatedOven(data) {
    return http.post("/user/products/oven/getRelatedItems", data);
  }
  getMobileReview(data) {
    return http.post("/user/products/mobile/getReviews", data);
  }
  getFanReview(data) {
    return http.post("/user/products/fan/getReviews", data);
  }
  getFridgeReview(data) {
    return http.post("/user/products/fridge/getReviews", data);
  }
  getWashingMachineReview(data) {
    return http.post("/user/products/washingmachine/getReviews", data);
  }
  getWaterPurifierReview(data) {
    return http.post("/user/products/waterpurifier/getReviews", data);
  }
  getSpeakerReview(data) {
    return http.post("/user/products/speaker/getReviews", data);
  }
  getFlourmilReview(data) {
    return http.post("/user/products/flourmil/getReviews", data);
  }
  getIronReview(data) {
    return http.post("/user/products/iron/getReviews", data);
  }
  getOvenReview(data) {
    return http.post("/user/products/oven/getReviews", data);
  }
  getTVReview(data) {
    return http.post("/user/products/tv/getReviews", data);
  }
  getMixerReview(data) {
    return http.post("/user/products/mixer/getReviews", data);
  }
  reportReview(data) {
    return http.post("/user/products/reportReview", data);
  }
  likeReview(data) {
    return http.post("/user/products/likeReview", data);
  }
  dislikeReview(data) {
    return http.post("/user/products/dislikeReview", data);
  }
  addReview(data) {
    return http.post("/user/products/addReview", data);
  }
  latestSoldProducts() {
    return http.get("/user/latestSoldProducts");
  }
  addToCart(data) {
    return http.post("/user/addToCart", data);
  }
  getFnameLname(data) {
    return http.post("/user/getFnameLname", data);
  }
}

export default new dashboard();
