const express = require('express');
const list = require('../../models/admin/review');

const router = express.Router();

router.get('/admin/getReviews', (req, res, next) => {

    list.getReviews((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/admin/getReviewsReported', (req, res, next) => {

    list.getReviewsReported((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/admin/getCount', (req, res, next) => {

    list.getCount(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/admin/getReviewsBlocked', (req, res, next) => {

    list.getReviewsBlocked((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/admin/editReview', (req, res, next) => {

    list.editReview(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result: 1
            });
        }
    });
});

router.post('/admin/editReview2', (req, res, next) => {

    list.editReview2(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result: 1
            });
        }
    });
});

router.post('/admin/getReviewFans', (req, res, next) => {

    list.getReviewFans(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/admin/getReviewTVs', (req, res, next) => {

    list.getReviewTVs(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/admin/getReviewFlourmil', (req, res, next) => {

    list.getReviewFlourmil(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/admin/getReviewFridge', (req, res, next) => {

    list.getReviewFridge(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/admin/getReviewIron', (req, res, next) => {

    list.getReviewIron(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/admin/getReviewMixer', (req, res, next) => {

    list.getReviewMixer(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/admin/getReviewMobile', (req, res, next) => {

    list.getReviewMobile(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/admin/getReviewOven', (req, res, next) => {

    list.getReviewOven(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/admin/getReviewSpeaker', (req, res, next) => {

    list.getReviewSpeaker(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/admin/getReviewWM', (req, res, next) => {

    list.getReviewWM(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});


router.post('/admin/getReviewWP', (req, res, next) => {

    list.getReviewWP(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});


router.post('/admin/getVote', (req, res, next) => {

    list.getVote(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/admin/getdislikes', (req, res, next) => {

    list.getDislike(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

module.exports = router;