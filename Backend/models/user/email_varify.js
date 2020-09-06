const db = require('../../util/database');

var item = {
    validEmail(item, callback) {
        return db.query('select * from tbluserlogin where Email = ?', [item.email], callback);
    }
};

module.exports = item;