const db = require('../../util/database');

var item = {
    /*getAll(callback) {
        return db.query('select * from tbladmin where level = 1', callback);
    },*/
    getAll(callback) {
        return db.query('select * from tblorder',callback);
    },
    getName(data,callback){
        return db.query('select * from tblorder,tblcategory where tblorder.CategoryID = tblcategory.CategoryID and tblorder.CategoryID = ? and tblorder.OrderID = ?',[data.cid,data.pid],callback);
    },
    getUName(callback){
        return db.query('select * from tbluser',callback);
    },
    getUserDetail(data,callback){
        return db.query('select * from tblorder,tblcategory,tbluser,tbladdress where tblorder.CategoryID = tblcategory.CategoryID and tblorder.UserID = tbluser.UserID and tblorder.AddressID = tbladdress.AddressID and tblorder.UserID = ?',[data.userid],callback);
    },
    getAllHistory(callback){
        return db.query('select * from tblorder,tblcategory,tbluser,tbladdress where tblorder.CategoryID = tblcategory.CategoryID and tblorder.UserID = tbluser.UserID and tblorder.AddressID = tbladdress.AddressID',callback);
    }
};

module.exports = item;