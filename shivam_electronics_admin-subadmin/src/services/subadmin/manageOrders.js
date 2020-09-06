import http from "../../http-common";

class profile {
  getNewOrders() {
    return http.get("/employee/newOrders");
  }
  getAcceptedOrders() {
    return http.get("/employee/acceptedOrders");
  }
  getRejectedOrders() {
    return http.get("/employee/rejectedOrders");
  }
  getCompletedOrders() {
    return http.get("/employee/completedOrders");
  }
  getCanceledOrders() {
    return http.get("/employee/canceledOrders");
  }
  getUnderShipmentOrders() {
    return http.get("/employee/underShipmentOrders");
  }
  acceptOrder(data) {
    return http.post("/employee/order/accept", data);
  }
  rejectOrder(data) {
    return http.post("/employee/order/reject", data);
  }
  completeOrder(data) {
    return http.post("/employee/order/complete", data);
  }
  underShipmentOrder(data) {
    return http.post("/employee/order/underShipment", data);
  }
  productDetails(data) {
    return http.post("/employee/order/productDetails", data);
  }
  orderDetails(data) {
    return http.post("/employee/order/orderDetails", data);
  }
  customerDetails(id) {
    return http.get(`/employee/order/customerDetails/${id}`);
  }
  addressDetails(id) {
    return http.get(`/employee/order/addressDetails/${id}`);
  }
  uploadInvoice(data) {
    return http.post("/employee/order/uploadInvoice", data);
  }
  updateInvoice(data) {
    return http.post("/employee/order/updateInvoice", data);
  }
  changeShipDateTime(data) {
    return http.post("/admin/order/changeShipDateTime", data);
  }
}

export default new profile();
