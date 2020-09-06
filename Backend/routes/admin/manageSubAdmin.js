const express = require('express');
const manage = require('../../models/admin/manageSubAdmin');

const router = express.Router();

router.get('/admin/subAdmin-List', (req, res, next) => {

    manage.getAll((err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/admin/getAdminID', (req, res, next) => {

    manage.getID(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                adminID: row[0].AdminID
            });
        }
    });
});

router.post('/admin/getSubAdmin', (req, res, next) => {

    manage.getSubAdmin(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.post('/admin/getSubAdmin-PWD', (req, res, next) => {

    manage.getSubAdminPWD(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    });
});

router.delete('/admin/removeSubAdmin/:id', (req, res, next) => {

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
});

router.post('/admin/updateSubAdmin', (req, res, next) => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    manage.update(req.body, dateTime, (err, row) => {
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

router.post('/admin/addSubAdmin', (req, res, next) => {

    var string = req.body.fname;
    var img = string.charAt(0).toUpperCase() + '.svg';
    manage.insertSubAdmin(req.body,img, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            manage.selectID((err, row) => {
                if (err) {
                    res.send(err);
                }
                else {
                    let id = row[0].AdminID;
                    manage.insert2SubAdmin(req.body, id, (err, row) => {
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
        }
    });
});

module.exports = router;