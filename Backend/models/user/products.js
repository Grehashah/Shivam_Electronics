const db = require('../../util/database');

var item = {
    getFans(callback) {
        return db.query('select * from tblfan as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.Status = 0', callback);
    },
    getTVs(callback) {
        return db.query('select * from tbltv as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.Status = 0', callback);
    },
    getFlourmil(callback) {
        return db.query('select * from tblflourmil as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.Status = 0', callback);
    },
    getFridge(callback) {
        return db.query('select * from tblfridge as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.Status = 0', callback);
    },
    getIron(callback) {
        return db.query('select * from tbliron as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.Status = 0', callback);
    },
    getMixer(callback) {
        return db.query('select * from tblmixer as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.Status = 0', callback);
    },
    getMobile(callback) {
        return db.query('select * from tblmobile as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.Status = 0', callback);
    },
    getOven(callback) {
        return db.query('select * from tbloven as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.Status = 0', callback);
    },
    getSpeaker(callback) {
        return db.query('select * from tblspeaker as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.Status = 0', callback);
    },
    getWM(callback) {
        return db.query('select * from tblwashingmachine as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.Status = 0', callback);
    },
    getWP(callback) {
        return db.query('select * from tblwaterpurifier as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.Status = 0', callback);
    },
    getBrands(callback) {
        return db.query('select * from tblbrand', callback);
    },
    getFilteredFan(data, callback) {
        return db.query("SELECT * FROM tblfan as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID WHERE t1.BrandID REGEXP ? AND t1.Ratings REGEXP ? AND t1.Price >= ? AND t1.Price <= ?", [data.bid, data.rate, data.min, data.max], callback);
    },
    getFilteredMobile(data, callback) {
        return db.query("SELECT * FROM tblmobile as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID WHERE t1.BrandID REGEXP ? AND t1.Ratings REGEXP ? AND t1.Price >= ? AND t1.Price <= ?", [data.bid, data.rate, data.min, data.max], callback);
    },
    getFilteredFridge(data, callback) {
        return db.query("SELECT * FROM tblfridge as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID WHERE t1.BrandID REGEXP ? AND t1.Ratings REGEXP ? AND t1.Price >= ? AND t1.Price <= ?", [data.bid, data.rate, data.min, data.max], callback);
    },
    getFilteredFlourmil(data, callback) {
        return db.query("SELECT * FROM tblflourmil as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID WHERE t1.BrandID REGEXP ? AND t1.Ratings REGEXP ? AND t1.Price >= ? AND t1.Price <= ?", [data.bid, data.rate, data.min, data.max], callback);
    },
    getFilteredWashingMachine(data, callback) {
        return db.query("SELECT * FROM tblwashingmachine as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID WHERE t1.BrandID REGEXP ? AND t1.Ratings REGEXP ? AND t1.Price >= ? AND t1.Price <= ?", [data.bid, data.rate, data.min, data.max], callback);
    },
    getFilteredWaterPurifier(data, callback) {
        return db.query("SELECT * FROM tblwaterpurifier as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID WHERE t1.BrandID REGEXP ? AND t1.Ratings REGEXP ? AND t1.Price >= ? AND t1.Price <= ?", [data.bid, data.rate, data.min, data.max], callback);
    },
    getFilteredIron(data, callback) {
        return db.query("SELECT * FROM tbliron as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID WHERE t1.BrandID REGEXP ? AND t1.Ratings REGEXP ? AND t1.Price >= ? AND t1.Price <= ?", [data.bid, data.rate, data.min, data.max], callback);
    },
    getFilteredOven(data, callback) {
        return db.query("SELECT * FROM tbloven as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID WHERE t1.BrandID REGEXP ? AND t1.Ratings REGEXP ? AND t1.Price >= ? AND t1.Price <= ?", [data.bid, data.rate, data.min, data.max], callback);
    },
    getFilteredMixer(data, callback) {
        return db.query("SELECT * FROM tblmixer as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID WHERE t1.BrandID REGEXP ? AND t1.Ratings REGEXP ? AND t1.Price >= ? AND t1.Price <= ?", [data.bid, data.rate, data.min, data.max], callback);
    },
    getFilteredTV(data, callback) {
        return db.query("SELECT * FROM tbltv as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID WHERE t1.BrandID REGEXP ? AND t1.Ratings REGEXP ? AND t1.Price >= ? AND t1.Price <= ?", [data.bid, data.rate, data.min, data.max], callback);
    },
    getFilteredSpeaker(data, callback) {
        return db.query("SELECT * FROM tblspeaker as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID WHERE t1.BrandID REGEXP ? AND t1.Ratings REGEXP ? AND t1.Price >= ? AND t1.Price <= ?", [data.bid, data.rate, data.min, data.max], callback);
    }
};

module.exports = item;