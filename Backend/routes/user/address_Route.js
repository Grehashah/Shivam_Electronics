const express = require('express');
const address = require('../../models/user/address');

const router = express.Router();

router.get('/addaddress/getCity', (req, res, next) => {

    address.getCity((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/addaddress/getState', (req, res, next) => {

    address.getState((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/addaddress/getStateID', (req, res, next) => {

    address.getStateID(req.body ,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/addaddress/getUserID', (req, res, next) => {

    address.getUserID(req.body ,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/addaddress/addAddress', (req, res, next) => {

    address.addAddress(req.body ,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/addaddress/getAddress', (req, res, next) => {

    address.getAddress(req.body ,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/addaddress/getDetails', (req, res, next) => {

    address.getDetails(req.body ,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/addaddress/updateAddress', (req, res, next) => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    address.updateAddress(req.body, dateTime,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                result : 1
            });
        }
    });
});

module.exports = router;