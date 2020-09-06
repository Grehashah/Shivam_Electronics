const db = require('../../util/database');

var item = {
    getFan(callback) {
        return db.query('select t1.Status,t2.Name,t1.Price,t1.Size,t1.Color,t1.Ratings,t1.Model,t1.FanID from tblfan as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID', callback);
    },
    getFridge(callback) {
        return db.query('select t1.Status,t2.Name,t1.Price,t1.Color,t1.Model,t1.Ratings,t1.Doors,t1.FridgeID from tblfridge as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID', callback);
    },
    getTV(callback) {
        return db.query('select t1.Status,t2.Name,t1.Price,t1.Color,t1.Model,t1.Ratings,t1.TVID from tbltv as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID', callback);
    },
    getWashingMachine(callback) {
        return db.query('select t1.Status,t2.Name,t1.Price,t1.Color,t1.Model,t1.Ratings,t1.WashingMachineID,t1.LoadCapacity,t1.CapacityKG from tblwashingmachine as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID', callback);
    },
    getMixer(callback) {
        return db.query('select t1.Status,t2.Name,t1.Price,t1.Color,t1.Model,t1.Ratings,t1.MixerID from tblmixer as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID', callback);
    },
    getSpeaker(callback) {
        return db.query('select t1.Status,t2.Name,t1.Price,t1.Color,t1.Model,t1.Ratings,t1.SpeakerID from tblspeaker as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID', callback);
    },
    getWaterPurifier(callback) {
        return db.query('select t1.Status,t2.Name,t1.Price,t1.Color,t1.Model,t1.Ratings,t1.Type,t1.WaterPurifierID from tblwaterpurifier as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID', callback);
    },
    getOven(callback) {
        return db.query('select t1.Status,t2.Name,t1.Price,t1.Color,t1.Model,t1.Ratings,t1.OvenID,t1.CapacityKG from tbloven as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID', callback);
    },
    getIron(callback) {
        return db.query('select t1.Status,t2.Name,t1.Price,t1.Color,t1.Model,t1.Ratings,t1.IronID,t1.CapacityWatt from tbliron as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID', callback);
    },
    getMobile(callback) {
        return db.query('select t1.Status,t2.Name,t1.Price,t1.Color,t1.Model,t1.Ratings,t1.MobileID from tblmobile as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID', callback);
    },
    getFlourmil(callback) {
        return db.query('select t1.Status,t2.Name,t1.Price,t1.Color,t1.Model,t1.Ratings,t1.FlourmilID from tblflourmil as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID', callback);
    },
    removeFan(id, callback) {
        return db.query('update tblfan set Status = 1 where FanID = ? ', [id], callback);
    },
    removeFlourmil(id, callback) {
        return db.query('update tblflourmil set Status = 1 where FlourmilID = ? ', [id], callback);
    },
    removeSpeaker(id, callback) {
        return db.query('update tblspeaker set Status = 1 where SpeakerID = ?', [id], callback);
    },
    removeTV(id, callback) {
        return db.query('update tbltv set Status = 1 where TVID = ?', [id], callback);
    },
    removeWashingMachine(id, callback) {
        return db.query('update tblwashingmachine set Status = 1 where WashingMachineID = ?', [id], callback);
    },
    removeIron(id, callback) {
        return db.query('update tbliron set Status = 1 where IronID = ?', [id], callback);
    },
    removeOven(id, callback) {
        return db.query('update tbloven set Status = 1 where OvenID = ?', [id], callback);
    },
    removeWaterPurifier(id, callback) {
        return db.query('update tblwaterpurifier set Status = 1 where WaterPurifierID = ?', [id], callback);
    },
    removeMobile(id, callback) {
        return db.query('update tblmobile set Status = 1 where MobileID = ? ', [id], callback);
    },
    removeMixer(id, callback) {
        return db.query('update tblmixer set Status = 1 where MixerID = ?', [id], callback);
    },
    removeFridge(id, callback) {
        return db.query('update tblfridge set Status = 1 where FridgeID = ?', [id], callback);
    },
    addFan(data, callback) {
        return db.query("insert into tblfan(BrandID,Ratings,Price,Color,Model,Warranty,Image,Details,Size,Quantity,Discount) values(?,?,?,?,?,?,?,?,?,?,?)", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.size, data.qty, data.discount], callback);
    },
    addFlourmil(data, callback) {
        return db.query("insert into tblflourmil(BrandID,Ratings,Price,Color,Model,Warranty,Image,Details,Quantity,Discount) values(?,?,?,?,?,?,?,?,?,?)", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.qty, data.discount], callback);
    },
    addFridge(data, callback) {
        return db.query("insert into tblfridge(BrandID,Ratings,Price,Color,Model,Warranty,Image,Details,CapacityLiter,Doors,Quantity,Discount) values(?,?,?,?,?,?,?,?,?,?,?,?)", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.capacity, data.doors, data.qty, data.discount], callback);
    },
    addWashingMachine(data, callback) {
        return db.query("insert into tblwashingmachine(BrandID,Ratings,Price,Color,Model,Warranty,Image,Details,CapacityKG,LoadCapacity,Quantity,Discount) values(?,?,?,?,?,?,?,?,?,?,?,?)", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.capacity, data.lcapacity, data.qty, data.discount], callback);
    },
    addWaterPurifier(data, callback) {
        return db.query("insert into tblwaterpurifier(BrandID,Ratings,Price,Color,Model,Warranty,Image,Details,Type,Quantity,Discount) values(?,?,?,?,?,?,?,?,?,?,?)", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.type, data.qty, data.discount], callback);
    },
    addIron(data, callback) {
        return db.query("insert into tbliron(BrandID,Ratings,Price,Color,Model,Warranty,Image,Details,CapacityWatt,Quantity,Discount) values(?,?,?,?,?,?,?,?,?,?,?)", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.capacity, data.qty, data.discount], callback);
    },
    addOven(data, callback) {
        return db.query("insert into tbloven(BrandID,Ratings,Price,Color,Model,Warranty,Image,Details,CapacityKG,Quantity,Discount) values(?,?,?,?,?,?,?,?,?,?,?)", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.capacity, data.qty, data.discount], callback);
    },
    addTV(data, callback) {
        return db.query("insert into tbltv(BrandID,Ratings,Price,Color,Model,Warranty,Image,Details,Quantity,Discount) values(?,?,?,?,?,?,?,?,?,?)", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.qty, data.discount], callback);
    },
    addMixer(data, callback) {
        return db.query("insert into tblmixer(BrandID,Ratings,Price,Color,Model,Warranty,Image,Details,Capacity,Quantity,Discount) values(?,?,?,?,?,?,?,?,?,?,?)", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.capacity, data.qty, data.discount], callback);
    },
    addSpeaker(data, callback) {
        return db.query("insert into tblspeaker(BrandID,Ratings,Price,Color,Model,Warranty,Image,Details,Type,Quantity,Discount) values(?,?,?,?,?,?,?,?,?,?,?)", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.type, data.qty, data.discount], callback);
    },
    addMobile(data, callback) {
        return db.query("insert into tblmobile(BrandID,Ratings,Price,Color,Model,Warranty,Image,Details,RAM,InternalStorage,ScreenSize,SimCapacity,CameraFront,CameraRear,Quantity,Discount) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.RAM, data.instorage, data.screenSize, data.simCapacity, data.cameraFront, data.cameraRear, data.qty, data.discount], callback);
    },
    getBrands(callback) {
        return db.query("select * from tblbrand", callback);
    },
    getFan1(data, callback) {
        return db.query('select t1.Status,t1.Image,t1.BrandID,t1.FanID,t2.Name,t1.Quantity,t1.Price,t1.Size,t1.Warranty,t1.Ratings,t1.Color,t1.Model,t1.Details,t1.Discount from tblfan as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID where t1.FanID = ?', [data.cid], callback);
    },
    getFridge1(data, callback) {
        return db.query('select t1.Status,t1.BrandID,t1.Image,t1.FridgeID,t2.Name,t1.Price,t1.Quantity,t1.CapacityLiter,t1.Doors,t1.Warranty,t1.Ratings,t1.Color,t1.Model,t1.Details,t1.Discount from tblfridge as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID where t1.FridgeID = ?', [data.cid], callback);
    },
    getTV1(data, callback) {
        return db.query('select t1.Status,t1.BrandID,t1.TVID,t1.Image,t2.Name,t1.Price,t1.Quantity,t1.Warranty,t1.Ratings,t1.Color,t1.Model,t1.Details,t1.Discount from tbltv as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID where t1.TVID = ?', [data.cid], callback);
    },
    getWashingMachine1(data, callback) {
        return db.query('select t1.Status,t1.BrandID,t1.WashingMachineID,t1.Image,t2.Name,t1.Price,t1.Quantity,t1.LoadCapacity,t1.CapacityKG,t1.Warranty,t1.Ratings,t1.Color,t1.Model,t1.Details,t1.Discount from tblwashingmachine as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID where t1.WashingMachineID = ? ', [data.cid], callback);
    },
    getMixer1(data, callback) {
        return db.query('select t1.Status,t1.Capacity,t1.BrandID,t1.MixerID,t2.Name,t1.Price,t1.Image,t1.Capacity,t1.Warranty,t1.Quantity,t1.Ratings,t1.Color,t1.Model,t1.Details,t1.Discount from tblmixer as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID where t1.MixerID = ?', [data.cid], callback);
    },
    getSpeaker1(data, callback) {
        return db.query('select t1.Status,t1.Type,t1.Quantity,t1.BrandID,t1.SpeakerID,t2.Name,t1.Image,t1.Price,t1.Type,t1.Warranty,t1.Ratings,t1.Color,t1.Model,t1.Details,t1.Discount from tblspeaker as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID where t1.SpeakerID = ?', [data.cid], callback);
    },
    getWaterPurifier1(data, callback) {
        return db.query('select t1.Status,t1.BrandID,t1.Quantity,t1.WaterPurifierID,t2.Name,t1.Image,t1.Price,t1.Type,t1.Warranty,t1.Ratings,t1.Color,t1.Model,t1.Details,t1.Discount from tblwaterpurifier as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID where t1.WaterPurifierID = ?', [data.cid], callback);
    },
    getOven1(data, callback) {
        return db.query('select t1.Status,t1.BrandID,t1.OvenID,t1.Quantity,t2.Name,t1.Price,t1.Image,t1.CapacityKG,t1.Warranty,t1.Ratings,t1.Color,t1.Model,t1.Details,t1.Discount from tbloven as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID where t1.OvenID = ?', [data.cid], callback);
    },
    getIron1(data, callback) {
        return db.query('select t1.Status,t1.BrandID,t1.IronID,t2.Name,t1.Quantity,t1.Price,t1.Image,t1.CapacityWatt,t1.Warranty,t1.Ratings,t1.Color,t1.Model,t1.Details,t1.Discount from tbliron as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID where t1.IronID = ?', [data.cid], callback);
    },
    getMobile1(data, callback) {
        return db.query('select t1.Status,t1.BrandID,t1.MobileID,t1.RAM,t1.Quantity,t1.InternalStorage,t1.Image,t1.ScreenSize,t1.CameraFront,t1.CameraRear,t1.SimCapacity,t2.Name,t1.Price,t1.Warranty,t1.Ratings,t1.Color,t1.Model,t1.Details,t1.Discount from tblmobile as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID where t1.MobileID =?', [data.cid], callback);
    },
    getFlourmil1(data, callback) {
        return db.query('select t1.Status,t1.BrandID,t1.FlourmilID,t2.Name,t1.Price,t1.Quantity,t1.Warranty,t1.Image,t1.Ratings,t1.Color,t1.Model,t1.Details,t1.Discount from tblflourmil as t1 JOIN tblbrand as t2 ON t1.BrandID = t2.BrandID where t1.FlourmilID = ?', [data.cid], callback);
    },
    updateFan(data, callback) {
        return db.query("update tblfan set BrandID = ? , Ratings = ?, Price = ? , Color = ? ,Model = ?,Warranty = ? ,Image= ? ,Details = ? ,Status = ? ,Size = ? , Quantity = ?,Discount = ? where FanID = ?", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.status, data.size, data.qty, data.discount, data.fanID], callback);
    },
    updateFridge(data, callback) {
        return db.query("update tblfridge set BrandID = ? , Ratings = ?, Price = ? , Color = ? ,Model = ?,Warranty = ? ,Image= ?,Details = ? ,Status = ? ,CapacityLiter = ?,Doors = ?, Quantity = ?,Discount = ? where FridgeID = ?", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.status, data.capacityLiter, data.doors, data.qty, data.discount, data.fridgeID], callback);
    },
    updateSpeaker(data, callback) {
        return db.query("update tblspeaker set BrandID = ? , Ratings = ?, Price = ? , Color = ? ,Model = ?,Warranty = ? ,Image= ?,Details = ? ,Status = ? ,Type = ?, Quantity = ?,Discount = ? where SpeakerID = ?", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.status, data.type, data.qty, data.discount, data.speakerID], callback);
    },
    updateWashingMachine(data, callback) {
        return db.query("update tblwashingmachine set BrandID = ? , Ratings = ?, Price = ? , Color = ? ,Model = ?,Warranty = ? ,Image= ?,Details = ? ,Status = ? ,LoadCapacity = ?,CapacityKG = ?, Quantity = ?,Discount = ? where WashingMachineID = ?", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.status, data.loadCapacity, data.capacityKG, data.qty, data.discount, data.washingmachineID], callback);
    },
    updateWaterPurifier(data, callback) {
        return db.query("update tblwaterpurifier set BrandID = ? , Ratings = ?, Price = ? , Color = ? ,Model = ?,Warranty = ? ,Image= ?,Details = ? ,Status = ? ,Type = ?, Quantity = ?,Discount = ? where WaterPurifierID = ?", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.status, data.type, data.qty, data.discount, data.waterpurifierID], callback);
    },
    updateMobile(data, callback) {
        return db.query("update tblmobile set BrandID = ? , Ratings = ?, Price = ? , Color = ? ,Model = ?,Warranty = ? ,Image= ?,Details = ? ,Status = ? ,RAM = ? ,InternalStorage = ? ,ScreenSize = ? , SimCapacity = ? ,CameraFront = ? , CameraRear = ?, Quantity = ?,Discount = ?  where MobileID = ?", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.status, data.RAM, data.internalStorage, data.screenSize, data.simCapacity, data.cameraFront, data.cameraRear, data.qty, data.discount, data.mobileID], callback);
    },
    updateIron(data, callback) {
        return db.query("update tbliron set BrandID = ? , Ratings = ?, Price = ? , Color = ? ,Model = ?,Warranty = ? ,Image= ?,Details = ? ,Status = ? ,CapacityWatt = ?, Quantity = ?,Discount = ? where IronID = ?", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.status, data.capacityWatt, data.qty, data.discount, data.ironID], callback);
    },
    updateTV(data, callback) {
        return db.query("update tbltv set BrandID = ? , Ratings = ?, Price = ? , Color = ? ,Model = ?,Warranty = ? ,Image= ?,Details = ? ,Status = ?, Quantity = ?,Discount = ? where TVID = ?", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.status, data.qty, data.discount, data.tvID], callback);
    },
    updateOven(data, callback) {
        return db.query("update tbloven set BrandID = ? , Ratings = ?, Price = ? , Color = ? ,Model = ?,Warranty = ? ,Image= ?,Details = ? ,Status = ? ,CapacityKG = ?, Quantity = ?,Discount = ? where OvenID = ?", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.status, data.capacityKG, data.qty, data.discount, data.ovenID], callback);
    },
    updateFlourmil(data, callback) {
        return db.query("update tblflourmil set BrandID = ? , Ratings = ?, Price = ? , Color = ? ,Model = ?,Warranty = ? ,Image= ?,Details = ? ,Status = ?, Quantity = ?,Discount = ? where FlourmilID = ?", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.status, data.qty, data.discount, data.flourmilID], callback);
    },
    updateMixer(data, callback) {
        return db.query("update tblmixer set BrandID = ? , Ratings = ?, Price = ? , Color = ? ,Model = ?,Warranty = ? ,Image= ?,Details = ? ,Status = ? ,Capacity = ?, Quantity = ?,Discount = ? where MixerID = ?", [data.brandID, data.ratings, data.price, data.color, data.model, data.warranty, data.image, data.details, data.status, data.capacity, data.qty, data.discount, data.mixerID], callback);
    },
    addBrand(data, callback) {
        return db.query("insert into tblbrand(Name,Status) values(?,?)", [ data.Name, 0], callback);
    },
    checkBrand(data, callback) {
        return db.query("select * from tblbrand where Name = ?", [data.Name], callback);
    }
};

module.exports = item;