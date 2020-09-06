const db = require("../../util/database");

var item = {
  getID1(data, callback) {
    return db.query(
      "select t1.UserID,t2.FirstName,t2.LastName from tbluserlogin as t1 join tbluser as t2 on t1.UserID = t2.UserID where t1.Email = ?",
      [data.email],
      callback
    );
  },
  getRelatedMobile(data, callback) {
    return db.query(
      "select * from tblmobile where BrandID = ? and MobileID <> ?",
      [data.bid, data.id],
      callback
    );
  },
  getRelatedFan(data, callback) {
    return db.query(
      "select * from tblfan where BrandID = ? and FanID <> ?",
      [data.bid, data.id],
      callback
    );
  },
  getRelatedFridge(data, callback) {
    return db.query(
      "select * from tblfridge where BrandID = ? and FridgeID <> ?",
      [data.bid, data.id],
      callback
    );
  },
  getRelatedMixer(data, callback) {
    return db.query(
      "select * from tblmixer where BrandID = ? and MixerID <> ?",
      [data.bid, data.id],
      callback
    );
  },
  getRelatedWashingMachine(data, callback) {
    return db.query(
      "select * from tblwashingmachine where BrandID = ? and WashingMachineID <> ?",
      [data.bid, data.id],
      callback
    );
  },
  getRelatedWaterPurifier(data, callback) {
    return db.query(
      "select * from tblwaterpurifier where BrandID = ? and WaterPurifierID <> ?",
      [data.bid, data.id],
      callback
    );
  },
  getRelatedTV(data, callback) {
    return db.query(
      "select * from tbltv where BrandID = ? and TVID <> ?",
      [data.bid, data.id],
      callback
    );
  },
  getRelatedSpeaker(data, callback) {
    return db.query(
      "select * from tblspeaker where BrandID = ? and SpeakerID <> ?",
      [data.bid, data.id],
      callback
    );
  },
  getRelatedIron(data, callback) {
    return db.query(
      "select * from tbliron where BrandID = ? and IronID <> ?",
      [data.bid, data.id],
      callback
    );
  },
  getRelatedOven(data, callback) {
    return db.query(
      "select * from tbloven where BrandID = ? and OvenID <> ?",
      [data.bid, data.id],
      callback
    );
  },
  getRelatedFlourmil(data, callback) {
    return db.query(
      "select * from tblflourmil where BrandID = ? and FlourmilID <> ?",
      [data.bid, data.id],
      callback
    );
  },
  getMobileReview(data, callback) {
    return db.query(
      'select t1.Review,t1.ReviewID,t3.FirstName,t3.UserID,t3.LastName from tblreview as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID join tbluser as t3 on t3.UserID = t1.UserID join tblmobile as t4 on t4.MobileID = t1.ProductID where t2.Name = "mobile" and t1.ProductID = ? and t1.Status = 1',
      [data.pid],
      callback
    );
  },
  getFanReview(data, callback) {
    return db.query(
      'select t1.Review,t1.ReviewID,t3.FirstName,t3.UserID,t3.LastName from tblreview as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID join tbluser as t3 on t3.UserID = t1.UserID join tblfan as t4 on t4.FanID = t1.ProductID where t2.Name = "fan" and t1.ProductID = ? and t1.Status = 1',
      [data.pid],
      callback
    );
  },
  getFlourmilReview(data, callback) {
    return db.query(
      'select t1.Review,t1.ReviewID,t3.FirstName,t3.UserID,t3.LastName from tblreview as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID join tbluser as t3 on t3.UserID = t1.UserID join tblflourmil as t4 on t4.FlourmilID = t1.ProductID where t2.Name = "flourmil" and t1.ProductID = ? and t1.Status = 1',
      [data.pid],
      callback
    );
  },
  getMixerReview(data, callback) {
    return db.query(
      'select t1.Review,t1.ReviewID,t3.FirstName,t3.UserID,t3.LastName from tblreview as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID join tbluser as t3 on t3.UserID = t1.UserID join tblmixer as t4 on t4.MixerID = t1.ProductID where t2.Name = "mixer" and t1.ProductID = ? and t1.Status = 1',
      [data.pid],
      callback
    );
  },
  getTVReview(data, callback) {
    return db.query(
      'select t1.Review,t1.ReviewID,t3.FirstName,t3.UserID,t3.LastName from tblreview as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID join tbluser as t3 on t3.UserID = t1.UserID join tbltv as t4 on t4.TVID = t1.ProductID where t2.Name = "tv" and t1.ProductID = ? and t1.Status = 1',
      [data.pid],
      callback
    );
  },
  getSpeakerReview(data, callback) {
    return db.query(
      'select t1.Review,t1.ReviewID,t3.FirstName,t3.UserID,t3.LastName from tblreview as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID join tbluser as t3 on t3.UserID = t1.UserID join tblspeaker as t4 on t4.SpeakerID = t1.ProductID where t2.Name = "speaker" and t1.ProductID = ? and t1.Status = 1',
      [data.pid],
      callback
    );
  },
  getIronReview(data, callback) {
    return db.query(
      'select t1.Review,t1.ReviewID,t3.FirstName,t3.UserID,t3.LastName from tblreview as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID join tbluser as t3 on t3.UserID = t1.UserID join tbliron as t4 on t4.IronID = t1.ProductID where t2.Name = "iron" and t1.ProductID = ? and t1.Status = 1',
      [data.pid],
      callback
    );
  },
  getOvenReview(data, callback) {
    return db.query(
      'select t1.Review,t1.ReviewID,t3.FirstName,t3.UserID,t3.LastName from tblreview as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID join tbluser as t3 on t3.UserID = t1.UserID join tbloven as t4 on t4.OvenID = t1.ProductID where t2.Name = "oven" and t1.ProductID = ? and t1.Status = 1',
      [data.pid],
      callback
    );
  },
  getFridgeReview(data, callback) {
    return db.query(
      'select t1.Review,t1.ReviewID,t3.FirstName,t3.UserID,t3.LastName from tblreview as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID join tbluser as t3 on t3.UserID = t1.UserID join tblfridge as t4 on t4.FridgeID = t1.ProductID where t2.Name = "fridge" and t1.ProductID = ? and t1.Status = 1',
      [data.pid],
      callback
    );
  },
  getWashingMachineReview(data, callback) {
    return db.query(
      'select t1.Review,t1.ReviewID,t3.FirstName,t3.UserID,t3.LastName from tblreview as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID join tbluser as t3 on t3.UserID = t1.UserID join tblwashingmachine as t4 on t4.WashingMachineID = t1.ProductID where t2.Name = "washingmachine" and t1.ProductID = ? and t1.Status = 1',
      [data.pid],
      callback
    );
  },
  getWaterPurifierReview(data, callback) {
    return db.query(
      'select t1.Review,t1.ReviewID,t3.FirstName,t3.UserID,t3.LastName from tblreview as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID join tbluser as t3 on t3.UserID = t1.UserID join tblwaterpurifier as t4 on t4.WaterPurifierID = t1.ProductID where t2.Name = "waterpurifier" and t1.ProductID = ? and t1.Status = 1',
      [data.pid],
      callback
    );
  },
  getID(data, callback) {
    return db.query(
      "select UserID from tbluserlogin where Email = ?",
      [data.email],
      callback
    );
  },
  checkReportTable(data, id, callback) {
    return db.query(
      "select * from tblreports where ReviewID = ? and UserID = ? ",
      [data.rid, id],
      callback
    );
  },
  checkVoteTable(data, id, callback) {
    return db.query(
      "select * from tblreviewvote where ReviewID = ? and UserID = ?",
      [data.rid, id],
      callback
    );
  },
  checkReviewTable(data, id, callback) {
    return db.query(
      "select * from tblreports where ReviewID = ? and UserID = ? ",
      [data.rid, id],
      callback
    );
  },
  reportReview(data, id, callback) {
    return db.query(
      "insert into tblreports(ReviewID,UserID) values (?,?)",
      [data.rid, id],
      callback
    );
  },
  likeReview1(data, id, callback) {
    return db.query(
      "insert into tblreviewvote(ReviewID,UserID,Vote) values (?,?,1)",
      [data.rid, id],
      callback
    );
  },
  likeReview2(data, id, callback) {
    return db.query(
      "update tblreviewvote set Vote = 1 where UserID = ? and ReviewID = ?",
      [id, data.rid],
      callback
    );
  },
  dislikeReview1(data, id, callback) {
    return db.query(
      "insert into tblreviewvote(ReviewID,UserID,Vote) values (?,?,2)",
      [data.rid, id],
      callback
    );
  },
  dislikeReview2(data, id, callback) {
    return db.query(
      "update tblreviewvote set Vote = 2 where UserID = ? and ReviewID = ?",
      [id, data.rid],
      callback
    );
  },
  checkForReview(data, id1, id, callback) {
    return db.query(
      "select * from tblreview as t1 where t1.ProductID = ? and t1.CategoryID = ? and t1.UserID = ?",
      [data.pid, id1, id],
      callback
    );
  },
  getCategoryID(data, callback) {
    return db.query(
      "select * from tblcategory where Name = ?",
      [data.category],
      callback
    );
  },
  latestSoldProducts(callback) {
    return db.query(
      "select t1.OrderID , t2.Name , t1.ProductID from tblorder as t1 join tblcategory as t2 on t1.CategoryID = t2.CategoryID order by t1.OrderID DESC LIMIT 6",
      callback
    );
  },
  addReview(data, id1, id, callback) {
    return db.query(
      "insert into tblreview(UserID,CategoryID,ProductID,Review,Status) values (?,?,?,?,?)",
      [id, id1, data.pid, data.review, 1],
      callback
    );
  },
  addToCart(uid, cid, data, callback) {
    return db.query(
      "Insert into tblcart(UserID,CategoryID,ProductID,Quantity) values(?,?,?,?)",
      [uid, cid, data.pid, data.qty],
      callback
    );
  },
  checkCart(uid, cid, data, callback) {
    return db.query(
      "select * from tblcart where CategoryID = ? and UserID = ? and ProductID = ?",
      [cid, uid, data.pid],
      callback
    );
  },
  updateCart(cartID, data, callback) {
    return db.query(
      "update tblcart set Quantity = ? where CartID = ?",
      [data, cartID],
      callback
    );
  },
  getFnameLname(id, callback) {
    return db.query("select * from tbluser where UserID = ?", [id], callback);
  }
};

module.exports = item;
