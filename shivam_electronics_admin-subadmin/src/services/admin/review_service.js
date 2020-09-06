import http from "../../http-common";

class review {
  getReviews() {
    return http.get("/admin/getReviews");
  }
  getReviewsReported() {
    return http.get("/admin/getReviewsReported");
  }
  getCount(data) {
    return http.post("/admin/getCount",data);
  }
  getReviewsBlocked() {
    return http.get("/admin/getReviewsBlocked");
  }
  editReview(data) {
    return http.post("/admin/editReview",data);
  }
  editReview2(data) {
    return http.post("/admin/editReview2",data);
  }
  getReviewFan(data){
    return http.post("/admin/getReviewFans",data);
  }
  getReviewTV(data){
    return http.post("/admin/getReviewTVs",data);
  }
  getReviewFlourmil(data){
    return http.post("/admin/getReviewFlourmil",data);
  }
  getReviewFridge(data){
    return http.post("/admin/getReviewFridge",data);
  }
  getReviewIron(data){
    return http.post("/admin/getReviewIron",data);
  }
  getReviewMixer(data){
    return http.post("/admin/getReviewMixer",data);
  }
  getReviewMobile(data){
    return http.post("/admin/getReviewMobile",data);
  }
  getReviewOven(data){
    return http.post("/admin/getReviewOven",data);
  }
  getReviewSpeaker(data){
    return http.post("/admin/getReviewSpeaker",data);
  }
  getReviewWM(data){
    return http.post("/admin/getReviewWM",data);
  }
  getReviewWP(data){
    return http.post("/admin/getReviewWP",data);
  }
  getVote(data){
    return http.post("/admin/getVote",data);
  }
  getDislikeCount(data){
    return http.post("/admin/getdislikes",data);
  }
}

export default new review();
