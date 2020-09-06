const express = require('express');
const list = require('../../models/admin/monthlyHistoryList');

const router = express.Router();

/*router.get('/admin/subAdmin-List', (req, res, next) => {

    manage.getAll((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});*/

router.get('/admin/getAll', (req, res, next) => {

    list.getAll((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});


router.post('/admin/getName', (req, res, next) => {

    list.getName(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/admin/getUName', (req, res, next) => {

    list.getUName((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.get('/admin/getAllHistory', (req, res, next) => {

    list.getAllHistory((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});


router.post('/admin/getUserDetail', (req, res, next) => {

    list.getUserDetail(req.body , (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

/*router.delete('/admin/removeSubAdmin/:id', (req, res, next) => {

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    const choice = req.params.id;
    manage.remove(dateTime, choice, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});*/


module.exports = router;