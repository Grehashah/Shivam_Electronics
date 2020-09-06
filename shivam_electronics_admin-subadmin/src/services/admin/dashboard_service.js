import http from "../../http-common";

class dashboard {
  getUsers() {
    return http.get("/admin/getUsers");
  }
  getEmployees() {
    return http.get("/admin/getEmployees");
  }
  getOrders() {
    return http.get("/admin/getOrders");
  }
  getCategory(){
    return http.get("/admin/getProducts");
  }
  getFan(){
    return http.get("/admin/getFans");
  }
  getTV(){
    return http.get("/admin/getTVs");
  }
  getFlourmil(){
    return http.get("/admin/getFlourmil");
  }
  getFridge(){
    return http.get("/admin/getFridge");
  }
  getIron(){
    return http.get("/admin/getIron");
  }
  getMixer(){
    return http.get("/admin/getMixer");
  }
  getMobile(){
    return http.get("/admin/getMobile");
  }
  getOven(){
    return http.get("/admin/getOven");
  }
  getSpeaker(){
    return http.get("/admin/getSpeaker");
  }
  getWM(){
    return http.get("/admin/getWM");
  }
  getWP(){
    return http.get("/admin/getWP");
  }
  getCategoryDetail(data){
    return http.post("/admin/getCategoryDetail",data);
  }
  getFanDetail(){
    return http.get("/admin/getFansDetail");
  }
  getTVDetail(){
    return http.get("/admin/getTVsDetail");
  }
  getFlourmilDetail(){
    return http.get("/admin/getFlourmilDetail");
  }
  getFridgeDetail(){
    return http.get("/admin/getFridgeDetail");
  }
  getIronDetail(){
    return http.get("/admin/getIronDetail");
  }
  getMixerDetail(){
    return http.get("/admin/getMixerDetail");
  }
  getMobileDetail(){
    return http.get("/admin/getMobileDetail");
  }
  getOvenDetail(){
    return http.get("/admin/getOvenDetail");
  }
  getSpeakerDetail(){
    return http.get("/admin/getSpeakerDetail");
  }
  getWMDetail(){
    return http.get("/admin/getWMDetail");
  }
  getWPDetail(){
    return http.get("/admin/getWPDetail");
  }
  getCompletedOrders(){
    return http.get("/admin/getCompletedOrders");
  }
  getBrands(){
    return http.get("/admin/getBrands");
  }
  getCanceledOrders(){
    return http.get("/admin/getCanceledOrders");
  }
  getRejectedOrders(){
    return http.get("/admin/getRejectedOrders");
  }
  getUserDetails(data){
    return http.post("/admin/getUserDetails",data);
  }
}

export default new dashboard();
