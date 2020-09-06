const express = require('express');
const userSetup = require('../../models/user/cart');

const router = express.Router();

let id = 0;
router.post('/user/cart/getTotalCartItems', (req, res, next) => {

    userSetup.getID1(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            id = row[0].UserID;

            userSetup.getTotalCartItems(id, (err, row) => {
                if (err) {
                    res.send(err);
                }
                else {
                    let num = row.length;
                    res.send({
                        length1: num,
                        uid: id
                    });
                }
            });
        }
    });
});

router.post('/user/cart/getCartItems', (req, res, next) => {

    userSetup.getCartItems(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/user/cart/getFanDetails', (req, res, next) => {

    userSetup.getFans(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});
router.post('/user/cart/getFridgeDetails', (req, res, next) => {

    userSetup.getFridges(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});
router.post('/user/cart/getMobileDetails', (req, res, next) => {

    userSetup.getMobiles(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});
router.post('/user/cart/getWaterPurifierDetails', (req, res, next) => {

    userSetup.getWaterpurifiers(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});
router.post('/user/cart/getWashingMachineDetails', (req, res, next) => {

    userSetup.getWashingMachines(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});
router.post('/user/cart/getFlourmilDetails', (req, res, next) => {

    userSetup.getFlourmils(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});
router.post('/user/cart/getSpeakerDetails', (req, res, next) => {

    userSetup.getSpeakers(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});
router.post('/user/cart/getIronDetails', (req, res, next) => {

    userSetup.getIrons(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});
router.post('/user/cart/getOvenDetails', (req, res, next) => {

    userSetup.getOvens(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});
router.post('/user/cart/getTVDetails', (req, res, next) => {

    userSetup.getTVs(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});
router.post('/user/cart/getMixerDetails', (req, res, next) => {

    userSetup.getMixers(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.get('/user/cart/cancelProduct/:id1', (req, res, next) => {

    let id = req.params.id1;
    userSetup.removeProduct(id, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                result: 1
            });
        }
    });
});

module.exports = router;