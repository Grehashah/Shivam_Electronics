import http from "../../http-common";

class dashboard {
  getUsers() {
    return http.get("/employee/getUsers");
  }
  getEmployees() {
    return http.get("/employee/getEmployees");
  }
  getOrders() {
    return http.get("/employee/getOrders");
  }
  getCategory(){
    return http.get("/employee/getProducts");
  }
  getFan(){
    return http.get("/employee/getFans");
  }
  getTV(){
    return http.get("/employee/getTVs");
  }
  getFlourmil(){
    return http.get("/employee/getFlourmil");
  }
  getFridge(){
    return http.get("/employee/getFridge");
  }
  getIron(){
    return http.get("/employee/getIron");
  }
  getMixer(){
    return http.get("/employee/getMixer");
  }
  getMobile(){
    return http.get("/employee/getMobile");
  }
  getOven(){
    return http.get("/employee/getOven");
  }
  getSpeaker(){
    return http.get("/employee/getSpeaker");
  }
  getWM(){
    return http.get("/employee/getWM");
  }
  getWP(){
    return http.get("/employee/getWP");
  }
  getCategoryDetail(data){
    return http.post("/employee/getCategoryDetail",data);
  }
  getFanDetail(){
    return http.get("/employee/getFansDetail");
  }
  getTVDetail(){
    return http.get("/employee/getTVsDetail");
  }
  getFlourmilDetail(){
    return http.get("/employee/getFlourmilDetail");
  }
  getFridgeDetail(){
    return http.get("/employee/getFridgeDetail");
  }
  getIronDetail(){
    return http.get("/employee/getIronDetail");
  }
  getMixerDetail(){
    return http.get("/employee/getMixerDetail");
  }
  getMobileDetail(){
    return http.get("/employee/getMobileDetail");
  }
  getOvenDetail(){
    return http.get("/employee/getOvenDetail");
  }
  getSpeakerDetail(){
    return http.get("/employee/getSpeakerDetail");
  }
  getWMDetail(){
    return http.get("/employee/getWMDetail");
  }
  getWPDetail(){
    return http.get("/employee/getWPDetail");
  }
   getCompletedOrders(){
    return http.get("/employee/getCompletedOrders");
  }
  getBrands(){
    return http.get("/employee/getBrands");
  }
  getCanceledOrders(){
    return http.get("/employee/getCanceledOrders");
  }
  getRejectedOrders(){
    return http.get("/employee/getRejectedOrders");
  }
}

export default new dashboard();
