const db = require('../../util/database');

var item = {
    getCity(callback) {
        return db.query('select * from tblcity where Status = 0',callback);
    },
    getState(callback) {
        return db.query('select * from tblstate where Status = 0',callback);
    },
    getStateID(data,callback) {
        return db.query('select * from tblcity where CityID = ?',[data.cityId],callback);
    },
    getUserID(data,callback) {
        return db.query('select * from tbluserlogin where email = ?',[data.email],callback);
    },
    addAddress(data,callback) {
        return db.query('insert into tbladdress(UserID,AddressLine1,AddressLine2,Landmark,Pincode,CityID) values(?,?,?,?,?,?)', [data.userId,data.add1,data.add2,data.landmark,data.zipcode,data.cityId], callback);
    },
    getAddress(data,callback) {
        return db.query('select *,tblcity.Name as cityName,tblstate.Name as stateName from tbladdress,tblcity,tblstate where tbladdress.CityID = tblcity.CityID and tblstate.StateID = tblcity.StateID and UserID = ?',[data.userId],callback);
    },
    getDetails(data,callback) {
        return db.query('select * from tbladdress,tblcity where tbladdress.CityID = tblcity.CityID and AddressID = ?',[data.AddID],callback);
    },
    updateAddress(data,data1,callback) {
        return db.query('update tbladdress set AddressLine1 = ? , AddressLine2 = ? ,Landmark = ? ,CityID = ?,Pincode = ?,UpdatedDateTime = ? where AddressID = ?',[data.add1,data.add2,data.landmark,data.cityId,data.zipcode,data1,data.AddID],callback);
    }                                                                                                                                                                                                                      
};

module.exports = item;
