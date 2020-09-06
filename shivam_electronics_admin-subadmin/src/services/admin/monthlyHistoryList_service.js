import http from "../../http-common";

class monthlyHistoryList {
  getAll() {
    return http.get("/admin/getAll");
  }
  getName(data) {
    return http.post("/admin/getName",data);
  }
  getUName() {
    return http.get("/admin/getUName");
  }
  getUserDetail(data){
    return http.post("/admin/getUserDetail",data);
  }
  getAllHistory() {
    return http.get("/admin/getAllHistory");
  }
}

export default new monthlyHistoryList();
