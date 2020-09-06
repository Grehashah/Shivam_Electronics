import http from "../../http-common";

class dashboard {
    makePayment(data) {
        return http.post("/user/cart/makePayment", data);
    }
    capturePayment(data) {
        return http.post("/user/cart/capturePayment", data);
    }
    orderEntry(data) {
        return http.post("/user/cart/orderEntry", data);
    }
}

export default new dashboard();
