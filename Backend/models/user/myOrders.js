const db = require('../../util/database');

var item = {

    getCurrentOrders(data, callback) {
        return db.query('select t1.Status,t2.Name,t1.OrderDateTime,t1.Invoice,t1.OrderID,t1.Quantity,t1.ProductID from tblorder as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID where t1.UserID = ? and (t1.Status = 1 or t1.Status = 2 or t1.Status = 4)', [data], callback);
    },
    getID1(data, callback) {
        return db.query('select t1.UserID from tbluserlogin as t1 join tbluser as t2 on t1.UserID = t2.UserID where t1.Email = ?', [data.email], callback);
    },
    getOrders(data, callback) {
        return db.query('select t1.Status,t2.Name,t1.Quantity,t1.OrderDateTime,t1.NetAmount,t1.TotalAmount,t1.Discount,t1.ProductID from tblorder as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID where t1.UserID = ?', [data], callback);
    },
    cancelOrder(data, callback) {
        return db.query('update tblorder set Status = 6 where OrderID = ?', [data.id], callback);
    },
    getFanQty(data, callback) {
        return db.query('select Quantity from tblfan where FanID = ?', [data.pid], callback);
    },
    getMobileQty(data, callback) {
        return db.query('select Quantity from tblmobile where MobileID = ?', [data.pid], callback);
    },
    getFlourmilQty(data, callback) {
        return db.query('select Quantity from tblflourmil where FlourmilID = ?', [data.pid], callback);
    },
    getFridgeQty(data, callback) {
        return db.query('select Quantity from tblfridge where FridgeID = ?', [data.pid], callback);
    },
    getWashingMachineQty(data, callback) {
        return db.query('select Quantity from tblwashingmachine where WashingMachineID = ?', [data.pid], callback);
    },
    getWaterPurifierQty(data, callback) {
        return db.query('select Quantity from tblwaterpurifier where WaterPurifierID = ?', [data.pid], callback);
    },
    getSpeakerQty(data, callback) {
        return db.query('select Quantity from tblspeaker where SpeakerID = ?', [data.pid], callback);
    },
    getMixerQty(data, callback) {
        return db.query('select Quantity from tblmixer where MixerID = ?', [data.pid], callback);
    },
    getIronQty(data, callback) {
        return db.query('select Quantity from tbliron where IronID = ?', [data.pid], callback);
    },
    getOvenQty(data, callback) {
        return db.query('select Quantity from tbloven where OvenID = ?', [data.pid], callback);
    },
    getTVQty(data, callback) {
        return db.query('select Quantity from tbltv where TVID = ?', [data.pid], callback);
    },
    updateFanQty(qty, data, callback) {
        return db.query('update tblfan set Quantity = ? where FanID = ?', [qty, data.pid], callback);
    },
    updateFridgeQty(qty, data, callback) {
        return db.query('update tblfridge set Quantity = ? where FridgeID = ?', [qty, data.pid], callback);
    },
    updateWaterPurifierQty(qty, data, callback) {
        return db.query('update tblwaterpurifier set Quantity = ? where WaterPurifierID = ?', [qty, data.pid], callback);
    },
    updateWashingMachineQty(qty, data, callback) {
        return db.query('update tblwashingmachine set Quantity = ? where WashingMachineID = ?', [qty, data.pid], callback);
    },
    updateSpeakerQty(qty, data, callback) {
        return db.query('update tblspeaker set Quantity = ? where SpeakerID = ?', [qty, data.pid], callback);
    },
    updateIronQty(qty, data, callback) {
        return db.query('update tbliron set Quantity = ? where IronID = ?', [qty, data.pid], callback);
    },
    updateOvenQty(qty, data, callback) {
        return db.query('update tbloven set Quantity = ? where OvenID = ?', [qty, data.pid], callback);
    },
    updateMobileQty(qty, data, callback) {
        return db.query('update tblmobile set Quantity = ? where MobileID = ?', [qty, data.pid], callback);
    },
    updateFlourmilQty(qty, data, callback) {
        return db.query('update tblflourmil set Quantity = ? where FlourmilID = ?', [qty, data.pid], callback);
    },
    updateTVQty(qty, data, callback) {
        return db.query('update tbltv set Quantity = ? where TVID = ?', [qty, data.pid], callback);
    },
    updateMixerQty(qty, data, callback) {
        return db.query('update tblmixer set Quantity = ? where MixerID = ?', [qty, data.pid], callback);
    },
    getOrderDetails(data, callback) {
        return db.query('select t2.Name,t1.Quantity,t1.NetAmount,t1.OrderDateTime from tblorder as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID where t1.OrderID = ? ', [data.id], callback);
    }
};

module.exports = item;