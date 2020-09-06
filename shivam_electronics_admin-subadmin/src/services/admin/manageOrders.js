import http from "../../http-common";

class profile {
  getNewOrders() {
    return http.get("/admin/newOrders");
  }
  getAcceptedOrders() {
    return http.get("/admin/acceptedOrders");
  }
  getRejectedOrders() {
    return http.get("/admin/rejectedOrders");
  }
  getCompletedOrders() {
    return http.get("/admin/completedOrders");
  }
  getCanceledOrders() {
    return http.get("/admin/canceledOrders");
  }
  getUnderShipmentOrders() {
    return http.get("/admin/underShipmentOrders");
  }
  acceptOrder(data) {
    return http.post("/admin/order/accept",data);
  }
  rejectOrder(data) {
    return http.post("/admin/order/reject",data);
  }
  completeOrder(data) {
    return http.post("/admin/order/complete",data);
  }
  underShipmentOrder(data) {
    return http.post("/admin/order/underShipment",data);
  }
  productDetails(data) {
    return http.post("/admin/order/productDetails",data);
  }
  orderDetails(data) {
    return http.post("/admin/order/orderDetails",data);
  }
  customerDetails(id) {
    return http.get(`/admin/order/customerDetails/${id}`);
  }
  addressDetails(id) {
    return http.get(`/admin/order/addressDetails/${id}`);
  }
  uploadInvoice(data) {
    return http.post("/admin/order/uploadInvoice", data);
  }
  updateInvoice(data) {
    return http.post("/admin/order/updateInvoice", data);
  }  
  changeShipDateTime(data) {
    return http.post("/admin/order/changeShipDateTime", data);
  }
}

export default new profile();
