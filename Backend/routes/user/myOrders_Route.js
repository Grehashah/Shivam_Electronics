const express = require('express');
const userSetup = require('../../models/user/myOrders');
const nodemailer = require('nodemailer');

const router = express.Router();
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shivamelectronics7757@gmail.com',
        pass: 'shivam@123'
    }
});

router.post('/user/myorders/getCurrentOrders', (req, res, next) => {

    userSetup.getID1(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            let id = row[0].UserID;

            userSetup.getCurrentOrders(id, (err, row) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.json(row);
                }
            });
        }
    });
});


router.post('/user/myorders/getOrders', (req, res, next) => {

    userSetup.getID1(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            let id = row[0].UserID;

            userSetup.getOrders(id, (err, row) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.json(row);
                }
            });
        }
    });
});

router.post('/user/myorders/addFanQty', (req, res, next) => {

    userSetup.getFanQty(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            let pqty = row[0].Quantity;

            let qty = req.body.qty + pqty;

            userSetup.updateFanQty(qty, req.body, (err, row) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send({
                        result: 1
                    });
                }
            });
        }
    });
});
router.post('/user/myorders/addFlourmilQty', (req, res, next) => {

    userSetup.getFlourmilQty(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            let pqty = row[0].Quantity;

            let qty = req.body.qty + pqty;

            userSetup.updateFlourmilQty(qty, req.body, (err, row) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send({
                        result: 1
                    });
                }
            });
        }
    });
});

router.post('/user/myorders/addMobileQty', (req, res, next) => {

    userSetup.getMobileQty(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            let pqty = row[0].Quantity;

            let qty = req.body.qty + pqty;

            userSetup.updateMobileQty(qty, req.body, (err, row) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send({
                        result: 1
                    });
                }
            });
        }
    });
});
router.post('/user/myorders/addWashingMachineQty', (req, res, next) => {

    userSetup.getWashingMachineQty(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            let pqty = row[0].Quantity;

            let qty = req.body.qty + pqty;

            userSetup.updateWashingMachineQty(qty, req.body, (err, row) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send({
                        result: 1
                    });
                }
            });
        }
    });
});
router.post('/user/myorders/addWaterPurifierQty', (req, res, next) => {

    userSetup.getWaterPurifierQty(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            let pqty = row[0].Quantity;

            let qty = req.body.qty + pqty;

            userSetup.updateWaterPurifierQty(qty, req.body, (err, row) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send({
                        result: 1
                    });
                }
            });
        }
    });
});
router.post('/user/myorders/addTVQty', (req, res, next) => {

    userSetup.getTVQty(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            let pqty = row[0].Quantity;

            let qty = req.body.qty + pqty;

            userSetup.updateTVQty(qty, req.body, (err, row) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send({
                        result: 1
                    });
                }
            });
        }
    });
});
router.post('/user/myorders/addFridgeQty', (req, res, next) => {

    userSetup.getFridgeQty(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            let pqty = row[0].Quantity;

            let qty = req.body.qty + pqty;

            userSetup.updateFridgeQty(qty, req.body, (err, row) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send({
                        result: 1
                    });
                }
            });
        }
    });
});
router.post('/user/myorders/addSpeakerQty', (req, res, next) => {

    userSetup.getSpeakerQty(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            let pqty = row[0].Quantity;

            let qty = req.body.qty + pqty;

            userSetup.updateSpeakerQty(qty, req.body, (err, row) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send({
                        result: 1
                    });
                }
            });
        }
    });
});
router.post('/user/myorders/addIronQty', (req, res, next) => {

    userSetup.getIronQty(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            let pqty = row[0].Quantity;

            let qty = req.body.qty + pqty;

            userSetup.updateIronQty(qty, req.body, (err, row) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send({
                        result: 1
                    });
                }
            });
        }
    });
});
router.post('/user/myorders/addOvenQty', (req, res, next) => {

    userSetup.getOvenQty(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            let pqty = row[0].Quantity;

            let qty = req.body.qty + pqty;

            userSetup.updateOvenQty(qty, req.body, (err, row) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send({
                        result: 1
                    });
                }
            });
        }
    });
});
router.post('/user/myorders/addMixerQty', (req, res, next) => {

    userSetup.getMixerQty(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            let pqty = row[0].Quantity;

            let qty = req.body.qty + pqty;

            userSetup.updateMixerQty(qty, req.body, (err, row) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send({
                        result: 1
                    });
                }
            });
        }
    });
});

router.post('/user/myorders/cancelOrder', (req, res, next) => {

    userSetup.cancelOrder(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            userSetup.getOrderDetails(req.body, (err, row) => {
                if (err) {
                    res.send(err);
                }
                else {
                    transport.sendMail(
                        {
                            to: req.body.email,
                            from: 'Shivam-Electronics',
                            subject: 'cancellation of Order',
                            html: '<p>Your Order for ' + row[0].Name + ' of Quantity ' + row[0].Quantity + ' on ' + row[0].OrderDateTime + ' has been Canceled. <br> You will get your amount of ₹ ' + row[0].NetAmount + ' within 7 days. <br> Thank you. </p>'
                        }
                    ).then(row => {
                        res.send({
                            result: 1
                        });
                    }).catch(err => {
                        res.send(err);
                    });
                }
            });

        }
    });
});
module.exports = router;