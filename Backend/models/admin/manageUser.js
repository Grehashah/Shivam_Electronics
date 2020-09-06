const db = require('../../util/database');

var item = {
    getAll(callback) {
        return db.query('select * from tbluser join tbluserlogin on tbluser.UserID = tbluserlogin.UserID', callback);
    },

    remove(date1,id,callback) {
        return db.query('update tbluserlogin set UpdatedDateTime=? where UserID = ?',[date1,id], callback);
    },
    remove2(id,callback) {
        return db.query('update tbluser set Status=1 where UserID = ?',[id], callback);
    },
    unBlockUser2(id,callback) {
        return db.query('update tbluser set Status=0 where UserID = ?',[id.userID], callback);
    },

    unBlockUser(date1,id,callback) {
        return db.query('update tbluserlogin set UpdatedDateTime=? where UserID = ?',[date1,id.userID], callback);
    },
   getUserDetails(data, callback) {
        return db.query('select * from tbluser join tbluserlogin on tbluser.UserID = tbluserlogin.UserID where tbluser.UserID = ?', [data.id], callback);
    }
};

module.exports = item;