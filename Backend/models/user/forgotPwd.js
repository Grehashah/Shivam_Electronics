const db = require('../../util/database');

var item = {
    getadmin(item,callback)
    {
      return db.query('select * from tbluserlogin where Email = ? ',[item.email],callback);           
    },
    updatePwd(newpwd,item,callback)
    {
        return db.query('update tbluserlogin set Password = ? where Email = ?',[newpwd,item],callback);                   
    }
};

module.exports = item;

