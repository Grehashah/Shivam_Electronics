const db = require('../../util/database');

var item = {
    isauth1(item, callback) {
        return db.query('select * from tbladminlogin where Email = ? and BINARY Password = ?', [item.email, item.pwd], callback);
    },
    isauth2(adminid, callback) {
        return db.query('select * from tbladmin where AdminID = ?', [adminid], callback);
    },
    attempts(item,callback) {
        return db.query('update tbladminlogin set LoginAttempt = ? where BINARY Email = ?', [item.count,item.email], callback);
    },
    updatePwd(newpwd,item,callback)
    {
        return db.query('update tbladminlogin set Password = ? where BINARY Email = ?',[newpwd,item],callback);                   
    },
    getadmin(item,callback)
    {
      return db.query('select * from tbladminlogin where BINARY Email = ? ',[item.email],callback);           
    }
};

module.exports = item;