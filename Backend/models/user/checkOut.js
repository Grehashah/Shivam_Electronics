const db = require('../../util/database');

var item = {

    getCartItems(data, callback) {
        return db.query('select * from tblcart where UserID = ?', [data.userID], callback);
    },
    getCname(cid, callback) {
        return db.query('select Name from tblcategory where CategoryID = ?', [cid], callback);
    },
    setMobileQTY(pid, qty, callback) {
        return db.query('update tblmobile set Quantity = ? where MobileID = ?', [qty, pid], callback);
    },
    setFlourmilQTY(pid, qty, callback) {
        return db.query('update tblflourmil set Quantity = ? where FlourmilID = ?', [qty, pid], callback);
    },
    setFridgeQTY(pid, qty, callback) {
        return db.query('update tblfridge set Quantity = ? where FridgeID = ?', [qty, pid], callback);
    },
    setWashingMachineQTY(pid, qty, callback) {
        return db.query('update tblwashingmachine set Quantity = ? where WashingMachineID = ?', [qty, pid], callback);
    },
    setWaterPurifierQTY(pid, qty, callback) {
        return db.query('update tblwaterpurifier set Quantity = ? where WaterPurifierID = ?', [qty, pid], callback);
    },
    setMixerQTY(pid, qty, callback) {
        return db.query('update tblmixer set Quantity = ? where MixerID = ?', [qty, pid], callback);
    },
    setSpeakerQTY(pid, qty, callback) {
        return db.query('update tblspeaker set Quantity = ? where SpeakerID = ?', [qty, pid], callback);
    },
    setIronQTY(pid, qty, callback) {
        return db.query('update tbliron set Quantity = ? where IronID = ?', [qty, pid], callback);
    },
    setOvenQTY(pid, qty, callback) {
        return db.query('update tbloven set Quantity = ? where OvenID = ?', [qty, pid], callback);
    },
    setTVQTY(pid, qty, callback) {
        return db.query('update tbltv set Quantity = ? where TVID = ?', [qty, pid], callback);
    },
    setFanQTY(pid, qty, callback) {
        return db.query('update tblfan set Quantity = ? where FanID = ?', [qty, pid], callback);
    },
    getMobile(pid, callback) {
        return db.query('select Price,Discount,Quantity from tblmobile where MobileID = ?', [pid], callback);
    },
    getFan(pid, callback) {
        return db.query('select Price,Discount,Quantity from tblfan where FanID = ?', [pid], callback);
    },
    getFlourmil(pid, callback) {
        return db.query('select Price,Discount,Quantity from tblflourmil where FlourmilID = ?', [pid], callback);
    },
    getSpeaker(pid, callback) {
        return db.query('select Price,Discount,Quantity from tblspeaker where SpeakerID = ?', [pid], callback);
    },
    getWashingMachine(pid, callback) {
        return db.query('select Price,Discount,Quantity from tblwashingmachine where WashingMachineID = ?', [pid], callback);
    },
    getWaterPurifier(pid, callback) {
        return db.query('select Price,Discount,Quantity from tblwaterpurifier where WaterPurifierID = ?', [pid], callback);
    },
    getIron(pid, callback) {
        return db.query('select Price,Discount,Quantity from tbliron where IronID = ?', [pid], callback);
    },
    getOven(pid, callback) {
        return db.query('select Price,Discount,Quantity from tbloven where OvenID = ?', [pid], callback);
    },
    getMixer(pid, callback) {
        return db.query('select Price,Discount,Quantity from tblmixer where MixerID = ?', [pid], callback);
    },
    getFridge(pid, callback) {
        return db.query('select Price,Discount,Quantity from tblfridge where FridgeID = ?', [pid], callback);
    },
    getTV(pid, callback) {
        return db.query('select Price,Discount,Quantity from tbltv where TVID = ?', [pid], callback);
    },
    deleteCartItem(cartID, callback) {
        return db.query('delete from tblcart where CartID = ?', [cartID], callback);
    },
    makeOrderEntry(data, date1, callback) {
        return db.query('insert into tblorder(CategoryID,ProductID,Quantity,UserID,AddressID,OrderDateTime,NetAmount,Discount,TotalAmount,Status) values(?,?,?,?,?,?,?,?,?,1)', [data.CategoryID, data.ProductID, data.Quantity, data.UserID, data.AddressID, date1, data.NetAmount, data.Discount, data.TotalAmount], callback);
    }
};

module.exports = item;