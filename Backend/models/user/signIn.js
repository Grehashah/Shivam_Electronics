const db = require('../../util/database');

var item = {
    isauth1(item, callback) {
        return db.query('select * from tbluserlogin where Email = ? and BINARY Password = ? ', [item.email, item.pwd], callback);
    },
    isauth2(id, callback) {
        return db.query('select * from tbluser where UserID = ? and Status = 0', [id], callback);
    },
    attempts(item,callback) {
        return db.query('update tbluserlogin set LoginAttempt = ? where BINARY Email = ?', [item.count,item.email], callback);
    },
    updatePwd(newpwd,item,callback)
    {
        return db.query('update tbluserlogin set Password = ? where BINARY Email = ?',[newpwd,item],callback);                   
    },
    getadmin(item,callback)
    {
      return db.query('select * from tbluserlogin where BINARY Email = ? ',[item.email],callback);           
    }
};

module.exports = item;