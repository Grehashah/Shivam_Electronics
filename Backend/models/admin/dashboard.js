const db = require('../../util/database');

var item = {
    getUsers(callback) {
        return db.query('select * from tbluser', callback);
    },
    getUserDetails(data, callback) {
        return db.query('select t1.FirstName,t1.LastName from tbladmin as t1 where t1.Email = ?', [data.email], callback);
    },
    getEmployees(callback) {
        return db.query('select * from tbladmin where Level = 1', callback);
    },
    getOrders(callback) {
        return db.query('select * from tblorder', callback);
    },
    getProducts(callback) {
        return db.query('select * from tblcategory', callback);
    },
    getFans(callback) {
        return db.query('select * from tblfan', callback);
    },
    getTVs(callback) {
        return db.query('select * from tbltv', callback);
    },
    getFlourmil(callback) {
        return db.query('select * from tblflourmil', callback);
    },
    getFridge(callback) {
        return db.query('select * from tblfridge', callback);
    },
    getIron(callback) {
        return db.query('select * from tbliron', callback);
    },
    getMixer(callback) {
        return db.query('select * from tblmixer', callback);
    },
    getMobile(callback) {
        return db.query('select * from tblmobile', callback);
    },
    getOven(callback) {
        return db.query('select * from tbloven', callback);
    },
    getSpeaker(callback) {
        return db.query('select * from tblspeaker', callback);
    },
    getWM(callback) {
        return db.query('select * from tblwashingmachine', callback);
    },
    getWP(callback) {
        return db.query('select * from tblwaterpurifier', callback);
    },
    getCategoryDetail(data, callback) {
        return db.query('select * from tblcategory where CategoryID = ?', [data.cid], callback);
    },
    getFansDetail(callback) {
        return db.query('select * from tblfan,tblbrand where tblfan.BrandID = tblbrand.BrandID', callback);
    },
    getTVsDetail(callback) {
        return db.query('select * from tbltv,tblbrand where tbltv.BrandID = tblbrand.BrandID', callback);
    },
    getFlourmilDetail(callback) {
        return db.query('select * from tblflourmil,tblbrand where tblflourmil.BrandID = tblbrand.BrandID', callback);
    },
    getFridgeDetail(callback) {
        return db.query('select * from tblfridge,tblbrand where tblfridge.BrandID = tblbrand.BrandID', callback);
    },
    getIronDetail(callback) {
        return db.query('select * from tbliron,tblbrand where tbliron.BrandID = tblbrand.BrandID', callback);
    },
    getMixerDetail(callback) {
        return db.query('select * from tblMixer,tblbrand where tblmixer.BrandID = tblbrand.BrandID', callback);
    },
    getMobileDetail(callback) {
        return db.query('select * from tblmobile,tblbrand where tblmobile.BrandID = tblbrand.BrandID', callback);
    },
    getOvenDetail(callback) {
        return db.query('select * from tbloven,tblbrand where tbloven.BrandID = tblbrand.BrandID', callback);
    },
    getSpeakerDetail(callback) {
        return db.query('select * from tblspeaker,tblbrand where tblspeaker.BrandID = tblbrand.BrandID', callback);
    },
    getWMDetail(callback) {
        return db.query('select * from tblwashingmachine,tblbrand where tblwashingmachine.BrandID = tblbrand.BrandID', callback);
    },
    getWPDetail(callback) {
        return db.query('select * from tblwaterpurifier,tblbrand where tblwaterpurifier.BrandID = tblbrand.BrandID', callback);
    },
    getRejectedOrders(callback) {
        return db.query('select * from tblorder where Status = 3', callback);
    },
    getCompletedOrders(callback) {
        return db.query('select * from tblorder where Status = 5', callback);
    },
    getCanceledOrders(callback) {
        return db.query('select * from tblorder where Status = 6', callback);
    },
    getBrands(callback) {
        return db.query('select * from tblbrand', callback);
    },
};

module.exports = item;