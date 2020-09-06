const db = require('../../util/database');

var item = {
    getReviews(callback) {
        return db.query('select * from tblreview,tblcategory,tbluser where tblreview.CategoryID = tblcategory.CategoryID and tblreview.Status = 1 and tbluser.UserID = tblreview.UserID',callback);
    },
    getReviewsReported(callback) {
        return db.query('select Distinct tblreview.ProductID,tblreview.ReviewID,tblCategory.Name,tblreview.Review from tblreports,tblreview,tblcategory,tbluser where tblreview.CategoryID = tblcategory.CategoryID and tblreports.ReviewID = tblreview.ReviewID and tblreports.UserID = tbluser.UserID and tblreview.Status = 1',callback);
    },
    getCount(data,callback) {
        return db.query('select * from tblreports where ReviewID = ?',[data.rid],callback);
    },
    getReviewsBlocked(callback) {
        return db.query('select Distinct tblreview.ProductID,tblreview.ReviewID,tblCategory.Name,tblreview.Review from tblreports,tblreview,tblcategory,tbluser where tblreview.CategoryID = tblcategory.CategoryID and tblreports.ReviewID = tblreview.ReviewID and tblreports.UserID = tbluser.UserID and tblreview.Status = 2',callback);
    },
    editReview(data,callback){
        return db.query('update tblreview set Status = 2 where ReviewID = ?',[data.rid],callback);
    },
    editReview2(data,callback){
        return db.query('update tblreview set Status = 1 where ReviewID = ?',[data.rid],callback);
    },
    getReviewFans(data,callback) {
        return db.query('select * from tblfan,tblbrand where tblfan.BrandID = tblbrand.BrandID and FanID = ?',[data.id],callback);
    },
    getReviewTVs(data,callback){
        return db.query('select * from tbltv,tblbrand where tbltv.BrandID = tblbrand.BrandID and TVID = ?',[data.id],callback);
    },
    getReviewFlourmil(data,callback){
        return db.query('select * from tblflourmil,tblbrand where tblflourmil.BrandID = tblbrand.BrandID and FlourmilID = ?',[data.id],callback);
    },
    getReviewFridge(data,callback){
        return db.query('select * from tblfridge,tblbrand where tblfridge.BrandID = tblbrand.BrandID and FridgeID = ?',[data.id],callback);
    },
    getReviewIron(data,callback){
        return db.query('select * from tbliron,tblbrand where tbliron.BrandID = tblbrand.BrandID and IronID = ?',[data.id],callback);
    },
    getReviewMixer(data,callback){
        return db.query('select * from tblmixer,tblbrand where tblmixer.BrandID = tblbrand.BrandID and MixerID = ?',[data.id],callback);
    },
    getReviewMobile(data,callback){
        return db.query('select * from tblmobile,tblbrand where tblmobile.BrandID = tblbrand.BrandID and MobileID = ?',[data.id],callback);
    },
    getReviewOven(data,callback){
        return db.query('select * from tbloven,tblbrand where tbloven.BrandID = tblbrand.BrandID and OvenID = ?',[data.id],callback);
    },
    getReviewSpeaker(data,callback){
        return db.query('select * from tblspeaker,tblbrand where tblspeaker.BrandID = tblbrand.BrandID and SpeakerID = ?',[data.id],callback);
    },
    getReviewWM(data,callback){
        return db.query('select * from tblwashingmachine,tblbrand where tblwashingmachine.BrandID = tblbrand.BrandID and WashingMachineID = ?',[data.id],callback);
    },
    getReviewWP(data,callback){
        return db.query('select * from tblwaterpurifier,tblbrand where tblwaterpurifier.BrandID = tblbrand.BrandID and WaterPurifierID = ?',[data.id],callback);
    },
    getVote(data,callback){
        return db.query('select * from tblreviewvote,tbluser where tblreviewvote.UserID = tbluser.UserID and tblreviewvote.Vote = 1 and tblreviewvote.ReviewID = ?',[data.rid],callback);
    },
    getDislike(data,callback){
        return db.query('select * from tblreviewvote,tbluser where tblreviewvote.UserID = tbluser.UserID and tblreviewvote.Vote = 2 and tblreviewvote.ReviewID = ?',[data.rid],callback);
    }
};

module.exports = item;