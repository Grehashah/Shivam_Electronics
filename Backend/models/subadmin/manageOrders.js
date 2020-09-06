const db = require('../../util/database');

var item = {
    getNewOrders(callback) {
        return db.query('select t1.OrderID,t1.Status,t1.Invoice,t2.Name,t3.FirstName,t4.Email,t1.Quantity,t1.OrderDateTime,t1.NetAmount,t1.TotalAmount,t1.Discount from tblorder as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID join tbluser as t3 on t3.UserID = t1.UserID join tbluserlogin as t4 on t4.UserID = t1.UserID where t1.Status = 1', callback);
    },
    getAcceptedOrders(callback) {
        return db.query('select t1.OrderID,t1.Status,t1.Invoice,t2.Name,t3.FirstName,t4.Email,t1.Quantity,t1.OrderDateTime,t1.NetAmount,t1.TotalAmount,t1.Discount from tblorder as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID join tbluser as t3 on t3.UserID = t1.UserID join tbluserlogin as t4 on t4.UserID = t1.UserID where t1.Status = 2', callback);
    },
    getRejectedOrders(callback) {
        return db.query('select t1.OrderID,t1.Status,t2.Name,t1.Invoice,t3.FirstName,t1.Quantity,t1.OrderDateTime,t1.NetAmount,t1.TotalAmount,t1.Discount from tblorder as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID join tbluser as t3 on t3.UserID = t1.UserID where t1.Status = 3', callback);
    },
    getUnderShipmentOrders(callback) {
        return db.query('select t1.OrderID,t1.Status,t2.Name,t1.Invoice,t3.FirstName,t4.Email,t1.Quantity,t1.OrderDateTime,t1.NetAmount,t1.TotalAmount,t1.Discount from tblorder as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID join tbluser as t3 on t3.UserID = t1.UserID join tbluserlogin as t4 on t4.UserID = t1.UserID where t1.Status = 4', callback);
    },
    getCompletedOrders(callback) {
        return db.query('select t1.OrderID,t1.Status,t2.Name,t1.Invoice,t3.FirstName,t1.Quantity,t1.OrderDateTime,t1.NetAmount,t1.TotalAmount,t1.Discount from tblorder as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID join tbluser as t3 on t3.UserID = t1.UserID where t1.Status = 5', callback);
    },
    getCanceledOrders(callback) {
        return db.query('select t1.OrderID,t1.Status,t2.Name,t1.Invoice,t3.FirstName,t1.Quantity,t1.OrderDateTime,t1.NetAmount,t1.TotalAmount,t1.Discount from tblorder as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID join tbluser as t3 on t3.UserID = t1.UserID where t1.Status = 6', callback);
    },
    rejectOrder(data, callback) {
        return db.query('update tblorder set Status = 3 where OrderID = ?', [data.orderid], callback);
    },
    acceptOrder(data, callback) {
        return db.query('update tblorder set Status = 2 where OrderID = ?', [data.orderid], callback);
    },
    completeOrder(data, callback) {
        return db.query('update tblorder set Status = 5 where OrderID = ?', [data.orderid], callback);
    },
    underShipmentOrder(data, callback) {
        return db.query('update tblorder set Status = 4 where OrderID = ?', [data.orderid], callback);
    },
    productDetails(data, callback) {
        return db.query('select * from tblorder as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID where t1.OrderID = ?', [data.orderid], callback);
    },
    fanDetails(pid, callback) {
        return db.query('select t1.FanID,t1.Status,t2.Name,t1.Quantity,t1.Warranty,t1.Image,t1.Model,t1.Color,t1.Ratings,t1.Price,t1.Details from tblfan as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.FanID = ?', [pid], callback);
    },
    mobileDetails(pid, callback) {
        return db.query('select t1.MobileID,t1.Status,t2.Name,t1.Quantity,t1.Warranty,t1.Image,t1.Model,t1.Color,t1.Ratings,t1.Price,t1.Details from tblmobile as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.MobileID = ?', [pid], callback);
    },
    TVDetails(pid, callback) {
        return db.query('select t1.TVID,t1.Status,t2.Name,t1.Quantity,t1.Warranty,t1.Image,t1.Model,t1.Color,t1.Ratings,t1.Price,t1.Details from tbltv as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.TVID = ?', [pid], callback);
    },
    fridgeDetails(pid, callback) {
        return db.query('select t1.FridgeID,t1.Status,t2.Name,t1.Quantity,t1.Warranty,t1.Image,t1.Model,t1.Color,t1.Ratings,t1.Price,t1.Details from tblfridge as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.FridgeID = ?', [pid], callback);
    },
    mixerDetails(pid, callback) {
        return db.query('select t1.MixerID,t1.Status,t2.Name,t1.Quantity,t1.Warranty,t1.Image,t1.Model,t1.Color,t1.Ratings,t1.Price,t1.Details from tblmixer as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.MixerID = ?', [pid], callback);
    },
    washingMachineDetails(pid, callback) {
        return db.query('select t1.WashingMachineID,t1.Status,t2.Name,t1.Quantity,t1.Warranty,t1.Image,t1.Model,t1.Color,t1.Ratings,t1.Price,t1.Details from tblwashingmachine as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.WashingMachineID = ?', [pid], callback);
    },
    waterPurifierDetails(pid, callback) {
        return db.query('select t1.WaterPurifierID,t1.Status,t2.Name,t1.Quantity,t1.Warranty,t1.Image,t1.Model,t1.Color,t1.Ratings,t1.Price,t1.Details from tblwaterpurifier as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.WaterPurifierID = ?', [pid], callback);
    },
    ironDetails(pid, callback) {
        return db.query('select t1.IronID,t1.Status,t2.Name,t1.Quantity,t1.Warranty,t1.Image,t1.Model,t1.Color,t1.Ratings,t1.Price,t1.Details from tbliron as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.IronID = ?', [pid], callback);
    },
    ovenDetails(pid, callback) {
        return db.query('select t1.OvenID,t1.Status,t2.Name,t1.Quantity,t1.Warranty,t1.Image,t1.Model,t1.Color,t1.Ratings,t1.Price,t1.Details from tbloven as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.OvenID = ?', [pid], callback);
    },
    flourmilDetails(pid, callback) {
        return db.query('select t1.FlourmilID,t1.Status,t2.Name,t1.Quantity,t1.Warranty,t1.Image,t1.Model,t1.Color,t1.Ratings,t1.Price,t1.Details from tblflourmil as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.FlourmilID = ?', [pid], callback);
    },
    speakerDetails(pid, callback) {
        return db.query('select t1.SpeakerID,t1.Status,t2.Name,t1.Quantity,t1.Warranty,t1.Image,t1.Model,t1.Color,t1.Ratings,t1.Price,t1.Details from tblspeaker as t1 join tblbrand as t2 on t1.BrandID = t2.BrandID where t1.SpeakerID = ?', [pid], callback);
    },
    orderDetails(oid, callback) {
        return db.query('select t1.Quantity,t2.Name,t1.UserID,t1.AddressID,t1.Discount,t1.Status,t1.TotalAmount,t1.NetAmount,t1.OrderDateTime,t1.ShipmentDateTime,t1.Invoice from tblorder as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID where t1.OrderID = ?', [oid.orderid], callback);
    },
    customerDetails(id, callback) {
        return db.query('select t2.Email,t1.FirstName,t1.LastName,t1.Image,t1.ContactNo,t1.AlternateNo from tbluser as t1 join tbluserlogin as t2 on t1.UserID = t2.UserID where t1.UserID = ?', [id], callback);
    },
    addressDetails(id, callback) {
        return db.query('select t1.AddressLine1,t1.AddressLine2,t1.Landmark,t1.Pincode,t2.Name,t3.Name as Name2 from tbladdress as t1 join tblcity as t2 on t1.CityID = t2.CityID join tblstate as t3 on t2.StateID = t3.StateID where t1.AddressID = ?', [id], callback);
    },
    updateInvoice(data, callback) {
        return db.query('update tblorder set Invoice = ? where OrderID = ?',[data.invoice,data.id], callback);
    },
};

module.exports = item;