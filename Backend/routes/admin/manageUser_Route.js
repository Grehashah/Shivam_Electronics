const express = require('express');
const manage = require('../../models/admin/manageUser');

const router = express.Router();

router.get('/admin/User-list', (req, res, next) => {

    manage.getAll((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});


router.delete('/admin/removeUser/:id', (req, res, next) => {

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
            manage.remove2(choice,(err,row) => {
                if(err)
                {
                    res.send(err);
                }
                else
                {
                    res.send(row);
                }
            })
        }
    });
});

router.post('/admin/unBlockUser/', (req, res, next) => {

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    manage.unBlockUser(dateTime, req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            manage.unBlockUser2(req.body,(err,row) => {
                if(err)
                {
                    res.send(err);
                }
                else
                {
                    res.send(row);
                }
            })
        }
    });
});

router.post('/admin/getUserDetails1/', (req, res, next) => {

    manage.getUserDetails(req.body,(err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});


module.exports = router;