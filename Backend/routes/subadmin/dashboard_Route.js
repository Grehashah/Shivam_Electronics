const express = require('express');
const list = require('../../models/subadmin/dashboard');

const router = express.Router();

router.get('/employee/getUsers', (req, res, next) => {

    list.getUsers((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getEmployees', (req, res, next) => {

    list.getEmployees((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});


router.get('/employee/getCompletedOrders', (req, res, next) => {

    list.getCompletedOrders((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});


router.get('/employee/getCanceledOrders', (req, res, next) => {

    list.getCanceledOrders((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getRejectedOrders', (req, res, next) => {

    list.getRejectedOrders((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getBrands', (req, res, next) => {

    list.getBrands((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});


router.get('/employee/getOrders', (req, res, next) => {

    list.getOrders((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getProducts', (req, res, next) => {

    list.getProducts((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});


router.get('/employee/getFans', (req, res, next) => {

    list.getFans((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getTVs', (req, res, next) => {

    list.getTVs((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getFlourmil', (req, res, next) => {

    list.getFlourmil((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getFridge', (req, res, next) => {

    list.getFridge((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getIron', (req, res, next) => {

    list.getIron((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getMixer', (req, res, next) => {

    list.getMixer((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getMobile', (req, res, next) => {

    list.getMobile((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getOven', (req, res, next) => {

    list.getOven((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getSpeaker', (req, res, next) => {

    list.getSpeaker((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getWM', (req, res, next) => {

    list.getWM((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});


router.get('/employee/getWP', (req, res, next) => {

    list.getWP((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/employee/getCategoryDetail', (req, res, next) => {

    list.getCategoryDetail(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getFansDetail', (req, res, next) => {

    list.getFansDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getTVsDetail', (req, res, next) => {

    list.getTVsDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getFlourmilDetail', (req, res, next) => {

    list.getFlourmilDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getFridgeDetail', (req, res, next) => {

    list.getFridgeDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getIronDetail', (req, res, next) => {

    list.getIronDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getMixerDetail', (req, res, next) => {

    list.getMixerDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getMobileDetail', (req, res, next) => {

    list.getMobileDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getOvenDetail', (req, res, next) => {

    list.getOvenDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getSpeakerDetail', (req, res, next) => {

    list.getSpeakerDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/employee/getWMDetail', (req, res, next) => {

    list.getWMDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});


router.get('/employee/getWPDetail', (req, res, next) => {

    list.getWPDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

module.exports = router;