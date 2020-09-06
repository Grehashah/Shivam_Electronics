import http from "../../http-common";

class dashboard {
    getTotalCartItems(data) {
        return http.post("/user/cart/getTotalCartItems", data);
    }
    getCartItems(data) {
        return http.post("/user/cart/getCartItems", data);
    }
    getFanDetails(data) {
        return http.post("user/cart/getFanDetails", data);
    }
    getFridgeDetails(data) {
        return http.post("user/cart/getFridgeDetails", data);
    }
    getWashingMachineDetails(data) {
        return http.post("user/cart/getWashingMachineDetails", data);
    }
    getWaterPurifierDetails(data) {
        return http.post("user/cart/getWaterPurifierDetails", data);
    }
    getIronDetails(data) {
        return http.post("user/cart/getIronDetails", data);
    }
    getOvenDetails(data) {
        return http.post("user/cart/getOvenDetails", data);
    }
    getFlourmilDetails(data) {
        return http.post("user/cart/getFlourmilDetails", data);
    }
    getSpeakerDetails(data) {
        return http.post("user/cart/getSpeakerDetails", data);
    }
    getMixerDetails(data) {
        return http.post("user/cart/getMixerDetails", data);
    }
    getMobileDetails(data) {
        return http.post("user/cart/getMobileDetails", data);
    }
    getTVDetails(data) {
        return http.post("user/cart/getTVDetails", data);
    }
    cancelCart(data) {
        return http.get(`user/cart/cancelProduct/${data}`);
    }
}

export default new dashboard();
