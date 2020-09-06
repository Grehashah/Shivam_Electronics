const express = require('express');
const signin = require('../../models/subadmin/signIn');
const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid-transport');

const router = express.Router();

const db = require('../../util/database');

router.post('/employee-signin', (req, res, next) => {

    signin.isauth1(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            var numrows = row.length;

            if (numrows == 0) {

                res.send({
                    result: -1
                });
            }
            else {
                let id = row[0].AdminID;
                signin.isauth2(id, (err, row1) => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        var rows = row1.length;

                        if (rows == 0) {

                            res.send({
                                result: -1
                            });
                        }
                        else {

                            let level = row1[0].Level;
                            let status = row1[0].Status;

                            if (level !== 1) {
                                res.send({
                                    result: -1
                                });
                            }
                            else if (status !== 0) {
                                res.send({
                                    result: -2
                                });
                            }
                            else {
                                res.send({
                                    result: 1
                                });
                            }
                        }
                    }
                });
            }
        }
    });
});

router.post('/employee-attempts', (req, res, next) => {

    signin.attempts(req.body ,(err, row) => {
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

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shivamelectronics7757@gmail.com',
        pass: 'shivam@123'
    }
});

router.post('/employee-attemptspwd', (req, res, next) => {

    signin.getadmin(req.body, (err, result) => {

        if (err) {
            res.send(err);
        }
        else {
            var numrows = result.length;
            if (numrows == 0) {
                res.send({
                    result: -1
                });
            }
            else {
                var newpwd = Math.floor(Math.random() * (99999999 - 11111111) + 11111111);
                var email = req.body.email;
                transport.sendMail(
                    {
                        to: email,
                        from: 'Shivam-Electronics',
                        subject: 'Wrong Attpemts Of Password',
                        html: '<p>Your New Password is </p>' + newpwd
                    }
                ).then(result1 => {
                    signin.updatePwd(newpwd, email, (err, result2) => {
                        if (err) {
                            res.send(err);
                        }
                        else {
                            res.send({
                                result: 1
                            });
                        }
                    })
                }
                )
                    .catch(err => {
                        res.send(err);
                    });
            }
        }
    });
});



module.exports = router;