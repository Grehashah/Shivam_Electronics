const db = require('../../util/database');

var item = {
    prodetails(data, callback) {
        return db.query('select t1.Email,t1.FirstName,t1.Image,t1.LastName,t1.ContactNo,t2.Password from tbladmin as t1 join tbladminlogin as t2 on t1.AdminID = t2.AdminID where t1.Email = ?', [data.email], callback);
    },
    updatedetails(data,data1,callback) {
        return db.query('update tbladmin set FirstName=? , LastName=?,Image=?,ContactNo=?,UpdatedDateTime=? where Email= ?', [data.firstname, data.lastname,data.image, data.contact,data1,data.email], callback);
    },
    updatedetails2(data,data1,callback) {
        return db.query('update tbladminlogin set Password=?,UpdatedDateTime=? where Email= ?', [data.pwd, data1,data.email], callback);
    }
};

module.exports = item;