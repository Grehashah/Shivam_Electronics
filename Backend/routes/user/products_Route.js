const express = require('express');
const list = require('../../models/user/products');

const router = express.Router();

router.get('/user/products/getFan', (req, res, next) => {

    list.getFans((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/user/products/getTV', (req, res, next) => {

    list.getTVs((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/user/products/getFlourmil', (req, res, next) => {

    list.getFlourmil((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/user/products/getFridge', (req, res, next) => {

    list.getFridge((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/user/products/getIron', (req, res, next) => {

    list.getIron((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/user/products/getMixer', (req, res, next) => {

    list.getMixer((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/user/products/getMobile', (req, res, next) => {

    list.getMobile((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});


router.get('/user/products/getOven', (req, res, next) => {

    list.getOven((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/user/products/getSpeaker', (req, res, next) => {

    list.getSpeaker((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/user/products/getWM', (req, res, next) => {

    list.getWM((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});


router.get('/user/products/getWP', (req, res, next) => {

    list.getWP((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/user/products/getBrands', (req, res, next) => {

    list.getBrands((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/user/products/getFilteredFan', (req, res, next) => {

    list.getFilteredFan(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/user/products/getFilteredOven', (req, res, next) => {

    list.getFilteredOven(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/user/products/getFilteredIron', (req, res, next) => {

    list.getFilteredIron(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/user/products/getFilteredWaterPurifier', (req, res, next) => {

    list.getFilteredWaterPurifier(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/user/products/getFilteredWashingMachine', (req, res, next) => {

    list.getFilteredWashingMachine(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/user/products/getFilteredTV', (req, res, next) => {

    list.getFilteredTV(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/user/products/getFilteredFlourmil', (req, res, next) => {

    list.getFilteredFlourmil(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/user/products/getFilteredMixer', (req, res, next) => {

    list.getFilteredMixer(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/user/products/getFilteredMobile', (req, res, next) => {

    list.getFilteredMobile(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/user/products/getFilteredFridge', (req, res, next) => {

    list.getFilteredFridge(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/user/products/getFilteredSpeaker', (req, res, next) => {

    list.getFilteredSpeaker(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});


module.exports = router;