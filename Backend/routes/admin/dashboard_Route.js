const express = require('express');
const list = require('../../models/admin/dashboard');

const router = express.Router();

router.get('/admin/getUsers', (req, res, next) => {

    list.getUsers((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/admin/getUserDetails', (req, res, next) => {

    list.getUserDetails(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getCompletedOrders', (req, res, next) => {

    list.getCompletedOrders((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});


router.get('/admin/getCanceledOrders', (req, res, next) => {

    list.getCanceledOrders((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getRejectedOrders', (req, res, next) => {

    list.getRejectedOrders((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getBrands', (req, res, next) => {

    list.getBrands((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getProducts', (req, res, next) => {

    list.getProducts((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getFans', (req, res, next) => {

    list.getFans((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getTVs', (req, res, next) => {

    list.getTVs((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getFlourmil', (req, res, next) => {

    list.getFlourmil((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getFridge', (req, res, next) => {

    list.getFridge((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getIron', (req, res, next) => {

    list.getIron((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getMixer', (req, res, next) => {

    list.getMixer((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getMobile', (req, res, next) => {

    list.getMobile((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});


router.get('/admin/getOrders', (req, res, next) => {

    list.getOrders((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});


router.get('/admin/getEmployees', (req, res, next) => {

    list.getEmployees((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getOven', (req, res, next) => {

    list.getOven((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getSpeaker', (req, res, next) => {

    list.getSpeaker((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getWM', (req, res, next) => {

    list.getWM((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});


router.get('/admin/getWP', (req, res, next) => {

    list.getWP((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/admin/getCategoryDetail', (req, res, next) => {

    list.getCategoryDetail(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getFansDetail', (req, res, next) => {

    list.getFansDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getTVsDetail', (req, res, next) => {

    list.getTVsDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getFlourmilDetail', (req, res, next) => {

    list.getFlourmilDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getFridgeDetail', (req, res, next) => {

    list.getFridgeDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getIronDetail', (req, res, next) => {

    list.getIronDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getMixerDetail', (req, res, next) => {

    list.getMixerDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getMobileDetail', (req, res, next) => {

    list.getMobileDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getOvenDetail', (req, res, next) => {

    list.getOvenDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getSpeakerDetail', (req, res, next) => {

    list.getSpeakerDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/admin/getWMDetail', (req, res, next) => {

    list.getWMDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});


router.get('/admin/getWPDetail', (req, res, next) => {

    list.getWPDetail((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

module.exports = router;