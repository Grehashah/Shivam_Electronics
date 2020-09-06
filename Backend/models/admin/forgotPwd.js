const db = require('../../util/database');

var item = {
    getadmin(item,callback)
    {
      return db.query('select * from tbladmin where Email = ? and Level = 0',[item.email],callback);           
    },
    updatePwd(newpwd,item,callback)
    {
        return db.query('update tbladminlogin set Password = ? where Email = ?',[newpwd,item],callback);                   
    }
};

module.exports = item;

