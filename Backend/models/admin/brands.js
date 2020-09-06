const db = require('../../util/database');

var item = {
    getAll(callback) {
        return db.query('select * from tblbrand', callback);
    },
    addBrand(data, callback) {
        return db.query("insert into tblbrand(Name,Status) values(?,?)", [ data.Name, 0], callback);
    },
    checkBrand(data, callback) {
        return db.query("select * from tblbrand where Name = ?", [data.Name], callback);
    },
    getBrand(data,callback) {
        return db.query('select * from tblbrand where BrandID = ?',[data.cIndex], callback);
    },
    updateBrand(data,callback) {
        return db.query('update tblbrand set Name = ? , Status = ?  where BrandID = ?',[data.bname,data.status,data.brandID], callback);
    },
    removeBrand(data,callback) {
        return db.query('update tblbrand set Status = 1  where BrandID = ?',[data.brandID], callback);
    },
    getFan(data,callback) {
        return db.query('select * from tblfan where BrandID = ?',[data.brandID], callback);
    },
    updateFanStatus1(data,callback) {
        return db.query('update tblfan set Status = 1  where BrandID = ?',[data.brandID], callback);
    },
    getFlourmil(data,callback) {
        return db.query('select * from tblflourmil where BrandID = ?',[data.brandID], callback);
    },
    updateFlourmilStatus1(data,callback) {
        return db.query('update tblflourmil set Status = 1  where BrandID = ?',[data.brandID], callback);
    },
    getFridge(data,callback) {
        return db.query('select * from tblfridge where BrandID = ?',[data.brandID], callback);
    },
    updateFridgeStatus1(data,callback) {
        return db.query('update tblfridge set Status = 1  where BrandID = ?',[data.brandID], callback);
    },
    getIron(data,callback) {
        return db.query('select * from tbliron where BrandID = ?',[data.brandID], callback);
    },
    updateIronStatus1(data,callback) {
        return db.query('update tbliron set Status = 1  where BrandID = ?',[data.brandID], callback);
    },
    getMixer(data,callback) {
        return db.query('select * from tblmixer where BrandID = ?',[data.brandID], callback);
    },
    updateMixerStatus1(data,callback) {
        return db.query('update tblmixer set Status = 1  where BrandID = ?',[data.brandID], callback);
    },
    getMobile(data,callback) {
        return db.query('select * from tblmobile where BrandID = ?',[data.brandID], callback);
    },
    updateMobileStatus1(data,callback) {
        return db.query('update tblmobile set Status = 1  where BrandID = ?',[data.brandID], callback);
    },
    getOven(data,callback) {
        return db.query('select * from tbloven where BrandID = ?',[data.brandID], callback);
    },
    updateOvenStatus1(data,callback) {
        return db.query('update tbloven set Status = 1  where BrandID = ?',[data.brandID], callback);
    },
    getSpeaker(data,callback) {
        return db.query('select * from tblspeaker where BrandID = ?',[data.brandID], callback);
    },
    updateSpeakerStatus1(data,callback) {
        return db.query('update tblspeaker set Status = 1  where BrandID = ?',[data.brandID], callback);
    },
    getTV(data,callback) {
        return db.query('select * from tbltv where BrandID = ?',[data.brandID], callback);
    },
    updateTVStatus1(data,callback) {
        return db.query('update tbltv set Status = 1  where BrandID = ?',[data.brandID], callback);
    },
    getWM(data,callback) {
        return db.query('select * from tblwashingmachine where BrandID = ?',[data.brandID], callback);
    },
    updateWMStatus1(data,callback) {
        return db.query('update tblwashingmachine set Status = 1  where BrandID = ?',[data.brandID], callback);
    },
    getWP(data,callback) {
        return db.query('select * from tblwaterpurifier where BrandID = ?',[data.brandID], callback);
    },
    updateWPStatus1(data,callback) {
        return db.query('update tblwaterpurifier set Status = 1  where BrandID = ?',[data.brandID], callback);
    },
    unblockBrand(data,callback) {
        return db.query('update tblbrand set Status = 0  where BrandID = ?',[data.brandID], callback);
    },
    updateFanStatus2(data,callback) {
        return db.query('update tblfan set Status = 0  where BrandID = ?',[data], callback);
    },
    updateFlourmilStatus2(data,callback) {
        return db.query('update tblflourmil set Status = 0  where BrandID = ?',[data.brandID], callback);
    },
    updateFridgeStatus2(data,callback) {
        return db.query('update tblfridge set Status = 0  where BrandID = ?',[data.brandID], callback);
    },
    updateIronStatus2(data,callback) {
        return db.query('update tbliron set Status = 0  where BrandID = ?',[data.brandID], callback);
    },
    updateMixerStatus2(data,callback) {
        return db.query('update tblmixer set Status = 0  where BrandID = ?',[data.brandID], callback);
    },
    updateMobileStatus2(data,callback) {
        return db.query('update tblmobile set Status = 0  where BrandID = ?',[data.brandID], callback);
    },
    updateOvenStatus2(data,callback) {
        return db.query('update tbloven set Status = 0  where BrandID = ?',[data.brandID], callback);
    },
    updateSpeakerStatus2(data,callback) {
        return db.query('update tblspeaker set Status = 0  where BrandID = ?',[data.brandID], callback);
    },
    updateTVStatus2(data,callback) {
        return db.query('update tbltv set Status = 0  where BrandID = ?',[data.brandID], callback);
    },
    updateWMStatus2(data,callback) {
        return db.query('update tblwashingmachine set Status = 0  where BrandID = ?',[data.brandID], callback);
    },
    updateWPStatus2(data,callback) {
        return db.query('update tblwaterpurifier set Status = 0  where BrandID = ?',[data.brandID], callback);
    }
};

module.exports = item;