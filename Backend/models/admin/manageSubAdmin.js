const db = require('../../util/database');

var item = {
    getAll(callback) {
        return db.query('select * from tbladmin where level = 1', callback);
    },

    insertSubAdmin(data, img, callback) {
        return db.query('insert into tbladmin(FirstName,LastName,AddedByAdminID,Email,Image,ContactNo) values (?,?,?,?,?,?)', [data.fname, data.lname, data.adminID, data.email, img, data.cno], callback);
    },

    selectID(callback) {
        return db.query('select AdminID from tbladmin order by AdminID DESC LIMIT 1', callback);
    },

    getID(data, callback) {
        return db.query('select AdminID from tbladmin where Email = ?', [data.email], callback);
    },

    getSubAdmin(id, callback) {
        return db.query('select * from tbladmin where AdminID = ?', [id.cIndex], callback);
    },

    getSubAdminPWD(email1, callback) {
        return db.query('select * from tbladminlogin where Email = ?', [email1.email], callback);
    },

    insert2SubAdmin(data, id, callback) {
        return db.query('insert into tbladminlogin(AdminID,Email,Password) values (?,?,?)', [id, data.email, data.pwd], callback);
    },

    remove(date1, id, callback) {
        return db.query('update tbladmin set updatedDateTime=? ,Status = 1 where AdminID = ?', [date1, id], callback);
    },

    update(data, date1, callback) {
        return db.query('update tbladmin set FirstName=? , LastName=?,ContactNo=?,Status=?,UpdatedDateTime=? where AdminID= ?', [data.fname, data.lname, data.cno, data.status, date1, data.adminID], callback);
    },
};

module.exports = item;