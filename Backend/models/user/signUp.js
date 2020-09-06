const db = require('../../util/database');

var item = {
    insertRecord(item,img, callback) {
        return db.query('insert into tbluser(FirstName,LastName,Image,ContactNo) values(?,?,?,?)', [item.fname, item.lname,img, item.cno], callback);
    },
    findid(callback) {
        return db.query('select UserID from tbluser order by UserID DESC LIMIT 1', callback);
    },
    insertRecord2(item, uid, callback) {
        return db.query('insert into tbluserlogin(UserID,Email,Password,IsEmailVerified) values(?,?,?,1)', [uid, item.email, item.pwd], callback);
    }
};

module.exports = item;