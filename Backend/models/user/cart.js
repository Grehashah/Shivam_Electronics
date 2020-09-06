const db = require('../../util/database');

var item = {

    getTotalCartItems(data, callback) {
        return db.query('select * from tblcart where UserID = ?', [data], callback);
    },
    getCartItems(data, callback) {
        return db.query('select t1.CartID,t1.UserID,t2.Name,t1.Quantity,t1.ProductID from tblcart as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID where t1.UserID = ?', [data.uid], callback);
    },
    getID1(data, callback) {
        return db.query('select t1.UserID from tbluserlogin as t1 join tbluser as t2 on t1.UserID = t2.UserID where t1.Email = ?', [data.email], callback);
    },
    getFans(data, callback) {
        return db.query('select * from tblfan as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.FanID = ?', [data.id], callback);
    },
    getFridges(data, callback) {
        return db.query('select * from tblfridge as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.FridgeID = ?', [data.id], callback);
    },
    getSpeakers(data, callback) {
        return db.query('select * from tblspeaker as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.SpeakerID = ?', [data.id], callback);
    },
    getMobiles(data, callback) {
        return db.query('select * from tblmobile as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.MobileID = ?', [data.id], callback);
    },
    getWaterPurifiers(data, callback) {
        return db.query('select * from tblwaterpurifier as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.WaterPurifierID = ?', [data.id], callback);
    },
    getWashingMachines(data, callback) {
        return db.query('select * from tblwashingmachine as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.WashingMachineID = ?', [data.id], callback);
    },
    getIrons(data, callback) {
        return db.query('select * from tbliron as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.IronID = ?', [data.id], callback);
    },
    getOvens(data, callback) {
        return db.query('select * from tbloven as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.OvenID = ?', [data.id], callback);
    },
    getMixers(data, callback) {
        return db.query('select * from tblmixer as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.MixerID = ?', [data.id], callback);
    },
    getTVs(data, callback) {
        return db.query('select * from tbltv as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.TVID = ?', [data.id], callback);
    },
    getFlourmils(data, callback) {
        return db.query('select * from tblflourmil as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.FlourmilID = ?', [data.id], callback);
    },
    removeProduct(data, callback) {
        return db.query('delete from tblcart where CartID = ? ',[data], callback);
    }
};

module.exports = item;