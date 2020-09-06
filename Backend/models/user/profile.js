const db = require('../../util/database');

var item = {
    prodetails(data, callback) {
        return db.query('select * from tbluser where UserID = ?', [data.usrid], callback);
    },
    updatedetails(data,callback) {
        return db.query('update tbluser set FirstName=? , LastName=?,Image=?,DOB = ? ,ContactNo=?,AlternateNo=?where UserID= ?', [data.firstname, data.lastname,data.image,data.dob, data.contact,data.altcontact,data.usrid], callback);
    },
    updatedetails2(data,date1,callback) {
        return db.query('update tbluserlogin set Password=? , UpdatedDateTime = ?  where UserID= ?', [data.pwd, date1,data.usrid], callback);
    },
    getID(data,callback) {
        return db.query('select * from tbluserlogin where Email = ?', [data.usrid], callback);
    }
};

module.exports = item;