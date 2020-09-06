import http from "../../http-common";

class dashboard {
    getCurrentOrders(data) {
        return http.post("/user/myorders/getCurrentOrders", data);
    }
    getOrders(data) {
        return http.post("/user/myorders/getOrders", data);
    }
    cancelOrder1(data) {
        return http.post("/user/myorders/cancelOrder", data);
    }
    addFanQuantity(data) {
        return http.post("/user/myorders/addFanQty", data);
    }
    addMobileQuantity(data) {
        return http.post("/user/myorders/addMobileQty", data);
    }
    addFlourmilQuantity(data) {
        return http.post("/user/myorders/addFlourmilQty", data);
    }
    addFridgeQuantity(data) {
        return http.post("/user/myorders/addFridgeQty", data);
    }
    addSpeakerQuantity(data) {
        return http.post("/user/myorders/addSpeakerQty", data);
    }
    addMixerQuantity(data) {
        return http.post("/user/myorders/addMixerQty", data);
    }
    addIronQuantity(data) {
        return http.post("/user/myorders/addIronQty", data);
    }
    addOvenQuantity(data) {
        return http.post("/user/myorders/addOvenQty", data);
    }
    addTVQuantity(data) {
        return http.post("/user/myorders/addTVQty", data);
    }
    addWashingMachineQuantity(data) {
        return http.post("/user/myorders/addWashingMachineQty", data);
    }
    addWaterPurifierQuantity(data) {
        return http.post("/user/myorders/addWaterPurifierQty", data);
    }
}

export default new dashboard();
